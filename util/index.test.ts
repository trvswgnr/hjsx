import { escapeHtml } from '.';
import { describe, expect, it } from 'bun:test';

describe('escapeHtml', () => {
    it('should escape special HTML characters', () => {
        expect(escapeHtml('Hello, <world> & "everyone"!')).toBe('Hello, &lt;world&gt; &amp; &quot;everyone&quot;!');
        expect(escapeHtml('1 < 2 & 3 > 4')).toBe('1 &lt; 2 &amp; 3 &gt; 4');
        expect(escapeHtml('Use "quotes" and \'apostrophes\' wisely')).toBe('Use &quot;quotes&quot; and &#39;apostrophes&#39; wisely');
    });

    it('should not escape already escaped HTML entities', () => {
        expect(escapeHtml('Hello, &lt;world&gt; &amp; &quot;everyone&quot;!')).toBe('Hello, &amp;lt;world&amp;gt; &amp;amp; &amp;quot;everyone&amp;quot;!');
    });

    it('should handle empty strings', () => {
        expect(escapeHtml('')).toBe('');
    });

    it('should handle strings without special characters', () => {
        expect(escapeHtml('Hello, world!')).toBe('Hello, world!');
    });

    it('should handle strings with only special characters', () => {
        expect(escapeHtml('<>&"\'')).toBe('&lt;&gt;&amp;&quot;&#39;');
    });
});