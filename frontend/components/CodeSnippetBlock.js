import React from 'react';

/**
 * Ultra-compact light-theme read-only code snippet editor with line numbers.
 * Simple, distraction-free styling matching modern developer IDEs.
 */
const CodeSnippetBlock = ({ code, language, compact }) => {
    if (!code) return null;

    const lines = code.trim().split('\n');

    return (
        <div 
            className={`editor-snippet-container${compact ? ' compact' : ''}`}
            aria-label={language ? `${language} code snippet` : 'code snippet'}
        >
            {/* Gutter with Line Numbers */}
            <div className="editor-snippet-gutter" aria-hidden="true">
                {lines.map((_, idx) => (
                    <span key={idx} className="editor-line-number">
                        {idx + 1}
                    </span>
                ))}
            </div>

            {/* Code Content */}
            <pre className="editor-snippet-pre">
                <code>
                    {lines.map((line, idx) => (
                        <div key={idx} className="editor-code-line">
                            {line || ' '}
                        </div>
                    ))}
                </code>
            </pre>
        </div>
    );
};

export default CodeSnippetBlock;
