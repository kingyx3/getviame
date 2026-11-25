import { createServer } from 'node:http';
import { pathToFileURL } from 'node:url';

const home = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>GetViaMe</title></head><body><main><h1>GetViaMe</h1><p>Application scaffold — product features pending.</p></main></body></html>';

export function createApp() {
  return createServer((req, res) => {
    const path = (req.url ?? '').split('?')[0];
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store');
    if (req.method === 'GET' && path === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(home);
    }
    if (req.method === 'GET' && path === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      return res.end(JSON.stringify({ status: 'ok' }));
    }
    if (path === '/' || path === '/health') {
      res.writeHead(405, { Allow: 'GET', 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Method not allowed');
    }
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT ?? '3000');
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid PORT');
  createApp().listen(port, '127.0.0.1', () => console.log('GetViaMe listening on http://localhost:' + port));
}
