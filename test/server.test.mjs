import { test } from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createApp } from '../src/server.mjs';

async function withApp(t, run) {
  const server = createApp();
  server.listen(0, '127.0.0.1');
  t.after(() => new Promise((resolve, reject) => server.close(err => err ? reject(err) : resolve())));
  await once(server, 'listening');
  await run('http://127.0.0.1:' + server.address().port);
}

test('BASE-001: home renders placeholder HTML', async t => withApp(t, async base => {
  const response = await fetch(base);
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /^text\/html/);
  assert.match(await response.text(), /GetViaMe/);
}));

test('BASE-002: health returns machine-readable status', async t => withApp(t, async base => {
  const response = await fetch(base + '/health');
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /^application\/json/);
  assert.deepEqual(await response.json(), { status: 'ok' });
}));

test('BASE-003: unknown routes and unsupported methods are rejected', async t => withApp(t, async base => {
  assert.equal((await fetch(base + '/unknown')).status, 404);
  const response = await fetch(base + '/health', { method: 'POST' });
  assert.equal(response.status, 405);
  assert.equal(response.headers.get('allow'), 'GET');
  assert.equal((await fetch(base, { method: 'POST' })).status, 405);
}));
