// Retry-After accepts either a delay in seconds or an HTTP date.
export function retryDeadline(value, now = Date.now()) {
    if (value !== null && value.trim() !== '') {
        const seconds = /^\d+$/.test(value.trim()) ? Number(value) : NaN;
        const deadline = Number.isFinite(seconds) ? now + seconds * 1000 : Date.parse(value);
        if (Number.isFinite(deadline) && deadline >= now) return deadline;
    }
    return now + 30000;
}

export async function loadSpecializations(signal) {
    const response = await fetch('/api/specializations', { signal });
    if (!response.ok) {
        // Only log routing/diagnostic headers, never response bodies or credentials.
        const headers = {};
        for (const name of ['retry-after', 'server', 'x-vercel-id', 'x-vercel-cache', 'rndr-id', 'x-render-origin-server', 'cf-ray']) {
            const value = response.headers.get(name);
            if (value !== null) headers[name] = value;
        }
        console.warn('Specializations request failed', {
            path: '/api/specializations', status: response.status, headers,
        });
        const error = new Error(response.status === 429
            ? 'Too many requests. Please wait before trying again.'
            : `Unable to load specializations (HTTP ${response.status}). Please try again later.`);
        error.status = response.status;
        if (response.status === 429) error.retryAt = retryDeadline(response.headers.get('retry-after'));
        throw error;
    }
    const data = await response.json();
    if (!Array.isArray(data)) throw new Error('The server returned unexpected data. Please try again later.');
    return data;
}
