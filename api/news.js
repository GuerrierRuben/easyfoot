const NEWS_API_BASE_URL = 'https://newsapi.org/v2/everything';
const DEFAULT_QUERY = 'football OR "Premier League" OR "La Liga" OR "Serie A" OR Bundesliga OR "Ligue 1"';

function setCorsHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendJson(res, statusCode, body) {
  setCorsHeaders(res);
  res.status(statusCode).json(body);
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'GET') {
    sendJson(res, 405, { message: 'Method not allowed.' });
    return;
  }

  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    sendJson(res, 500, {
      message: 'NEWS_API_KEY is missing. Add it to your Vercel environment variables.',
    });
    return;
  }

  const requestUrl = new URL(req.url, 'https://placeholder.vercel.app');
  const pageSize = Number(requestUrl.searchParams.get('pageSize') || 12);
  const q = requestUrl.searchParams.get('q') || DEFAULT_QUERY;

  const upstreamParams = new URLSearchParams({
    q,
    language: 'en',
    sortBy: 'publishedAt',
    pageSize: String(Math.min(Math.max(pageSize, 1), 20)),
  });

  try {
    const upstreamResponse = await fetch(`${NEWS_API_BASE_URL}?${upstreamParams.toString()}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    const body = await upstreamResponse.text();
    const contentType = upstreamResponse.headers.get('content-type') || 'application/json; charset=utf-8';

    if (!upstreamResponse.ok) {
      let parsed = {};

      try {
        parsed = JSON.parse(body);
      } catch {
        parsed = {};
      }

      sendJson(res, upstreamResponse.status, {
        message: parsed.message || 'Unable to load news from NewsAPI.',
        code: parsed.code || 'unexpectedError',
      });
      return;
    }

    res.status(200);
    res.setHeader('Content-Type', contentType);
    res.send(body);
  } catch (error) {
    sendJson(res, 502, {
      message: 'Unable to reach newsapi.org.',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
