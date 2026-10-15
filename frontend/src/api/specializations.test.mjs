import test from 'node:test';
import assert from 'node:assert/strict';
import { loadSpecializations, retryDeadline } from './specializations.mjs';

test('Retry-After supports seconds, dates, and a safe fallback', () => {
    const now = Date.parse('2026-10-15T12:00:00Z');
    assert.equal(retryDeadline('120', now), now + 120000);
    assert.equal(retryDeadline('0', now), now);
    assert.equal(retryDeadline('Thu, 15 Oct 2026 12:02:00 GMT', now), now + 120000);
    for (const value of [null, '', 'invalid', '-10', 'Thu, 15 Oct 2026 11:59:00 GMT']) {
        assert.equal(retryDeadline(value, now), now + 30000);
    }
});

test('requests recover after a 429 and log only diagnostic headers', async (t) => {
    const warnings = [];
    t.mock.method(console, 'warn', (...args) => warnings.push(args));
    const replies = [
        new Response('private response body', { status: 429, headers: {
            'Retry-After': '60', 'x-vercel-id': 'request-id', 'set-cookie': 'secret',
        } }),
        new Response(JSON.stringify([{ id: 'spec-ai-ml' }]), { status: 200 }),
    ];
    const calls = [];
    t.mock.method(globalThis, 'fetch', async (...args) => {
        calls.push(args);
        return replies.shift();
    });
    const controller = new AbortController();
    const before = Date.now();
    await assert.rejects(loadSpecializations(controller.signal), error => {
        assert.equal(error.status, 429);
        assert.match(error.message, /Too many requests/);
        assert.ok(error.retryAt >= before + 60000);
        return true;
    });
    assert.deepEqual(warnings[0][1].headers, { 'retry-after': '60', 'x-vercel-id': 'request-id' });
    assert.equal(JSON.stringify(warnings).includes('private response body'), false);
    assert.deepEqual(await loadSpecializations(controller.signal), [{ id: 'spec-ai-ml' }]);
    assert.equal(calls.length, 2); // No automatic retry loop.
    assert.equal(calls[0][1].signal, controller.signal);
});

test('other HTTP failures are not described as connection errors', async (t) => {
    t.mock.method(console, 'warn', () => {});
    t.mock.method(globalThis, 'fetch', async () => new Response('', { status: 503 }));
    await assert.rejects(loadSpecializations(), error => {
        assert.equal(error.status, 503);
        assert.equal(error.retryAt, undefined);
        assert.match(error.message, /HTTP 503/);
        return true;
    });
});

test('rejects unexpected data and preserves network/abort errors', async (t) => {
    t.mock.method(globalThis, 'fetch', async () => new Response('{}'));
    await assert.rejects(loadSpecializations(), /unexpected data/);
    for (const error of [new TypeError('Failed to fetch'), new DOMException('Aborted', 'AbortError')]) {
        globalThis.fetch = async () => { throw error; };
        await assert.rejects(loadSpecializations(), actual => actual === error);
    }
});
