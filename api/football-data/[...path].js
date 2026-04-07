const FOOTBALL_DATA_BASE_URL = 'https://api.football-data.org/v4';

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

  const token = process.env.FOOTBALL_DATA_API_TOKEN;

  if (!token) {
    sendJson(res, 500, {
      message: 'FOOTBALL_DATA_API_TOKEN is missing. Add it to your Vercel environment variables.',
    });
    return;
  }

  const pathSegments = Array.isArray(req.query.path) ? req.query.path : [];
  const upstreamPath = pathSegments.join('/');
  const searchParams = new URLSearchParams();

  Object.entries(req.query).forEach(([key, value]) => {
    if (key === 'path') {
      return;
    }

    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item !== undefined && item !== null && item !== '') {
          searchParams.append(key, String(item));
        }
      });
      return;
    }

    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  const upstreamUrl = `${FOOTBALL_DATA_BASE_URL}/${upstreamPath}${queryString ? `?${queryString}` : ''}`;

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      headers: {
        'X-Auth-Token': token,
      },
    });

    const contentType = upstreamResponse.headers.get('content-type') || 'application/json; charset=utf-8';
    const body = await upstreamResponse.text();

    res.status(upstreamResponse.status);
    res.setHeader('Content-Type', contentType);
    res.send(body);
  } catch (error) {
    sendJson(res, 502, {
      message: 'Unable to reach football-data.org.',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
