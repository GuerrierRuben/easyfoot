import { createServer } from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const FOOTBALL_DATA_BASE_URL = 'https://api.football-data.org/v4';
const FOOTBALL_DATA_PREFIX = '/api/football-data';

function loadEnvFile(fileName) {
  const filePath = resolve(process.cwd(), fileName);

  if (!existsSync(filePath)) {
    return;
  }

  const content = readFileSync(filePath, 'utf-8');

  content.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      return;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');

    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  });
}

loadEnvFile('.env');
loadEnvFile('.env.local');

const PORT = Number(process.env.PORT || 3001);

function setCorsHeaders(response) {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function sendJson(response, statusCode, body) {
  setCorsHeaders(response);
  response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(body));
}

const server = createServer(async (request, response) => {
  setCorsHeaders(response);

  if (request.method === 'OPTIONS') {
    response.writeHead(204);
    response.end();
    return;
  }

  if (!request.url?.startsWith(FOOTBALL_DATA_PREFIX)) {
    sendJson(response, 404, { message: 'Route not found.' });
    return;
  }

  const incomingUrl = new URL(request.url, `http://localhost:${PORT}`);
  const baseUrl = FOOTBALL_DATA_BASE_URL;
  const prefix = FOOTBALL_DATA_PREFIX;
  const token = process.env.FOOTBALL_DATA_API_TOKEN;

  if (!token) {
    sendJson(response, 500, {
      message: 'FOOTBALL_DATA_API_TOKEN is missing. Add it to your environment before starting the proxy.',
    });
    return;
  }

  const upstreamPath = incomingUrl.pathname.replace(prefix, '') || '';
  const normalizedUpstreamPath = upstreamPath.startsWith('/') ? upstreamPath : `/${upstreamPath}`;
  const upstreamUrl = `${baseUrl}${normalizedUpstreamPath}${incomingUrl.search}`;

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      headers: {
        'X-Auth-Token': token,
      },
    });

    const contentType = upstreamResponse.headers.get('content-type') || 'application/json; charset=utf-8';
    const body = await upstreamResponse.text();

    response.writeHead(upstreamResponse.status, { 'Content-Type': contentType });
    response.end(body);
  } catch (error) {
    sendJson(response, 502, {
      message: 'Unable to reach football-data.org.',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

server.listen(PORT, () => {
  console.log(`proxy listening on http://localhost:${PORT}${FOOTBALL_DATA_PREFIX}`);
});
