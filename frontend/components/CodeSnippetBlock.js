import React, { useState } from 'react';

const CodeSnippetBlock = ({ code, language, compact }) => {
    const [copied, setCopied] = useState(false);

    if (!code) return null;

    const handleCopy = async () => {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(code);
            } else {
                const ta = document.createElement('textarea');
                ta.value = code;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
            }
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (e) {
            // copy unavailable; fail silently
        }
    };

    return (
        <figure
            className={`code-snippet-block${compact ? ' compact' : ''}`}
            aria-label={language ? `${language} code snippet` : 'code snippet'}
        >
            <div className="code-snippet-header">
                <span className="code-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                </span>
                <span className="code-lang-badge">{language || 'code'}</span>
                <button type="button" className="code-copy-btn" onClick={handleCopy}>
                    {copied ? 'Copied ✓' : 'Copy'}
                </button>
            </div>
            <pre className="code-snippet-pre"><code>{code}</code></pre>
        </figure>
    );
};

export default CodeSnippetBlock;
