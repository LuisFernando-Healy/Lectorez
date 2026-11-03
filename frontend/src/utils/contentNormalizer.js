export const plainTextToHtml = (text) => {
    if (!text) return '';
    
    const escape = (value) => value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    return text
        .replace(/\r\n?/g, '\n')
        .replace(/\u00a0/g, ' ')
        .replace(/[ \t]{2,}/g, ' ')
        .split(/\n{2,}/)
        .map(value => value.trim())
        .filter(Boolean)
        .map(value => `<p>${escape(value).replace(/\n/g, '<br>')}</p>`)
        .join('');
};

/**
 * Normaliza y limpia código HTML pegado (remueve párrafos vacíos y ajusta espacios)
 */
export const normalizeHtml = (html, collapseBlankBlocks = true) => {
    if (typeof html !== 'string' || !html.trim()) return html || '';

    const parser = new DOMParser();
    const documentNode = parser.parseFromString(`<div id="librox-root">${html}</div>`, 'text/html');
    const root = documentNode.getElementById('librox-root');
    
    if (!root) return html;

    // Normalizar espacios en nodos de texto
    const walker = documentNode.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let currentNode;
    while ((currentNode = walker.nextNode())) {
        currentNode.nodeValue = (currentNode.nodeValue || '')
            .replace(/\u00a0/g, ' ')
            .replace(/[ \t\r\f\v]+/g, ' ')
            .replace(/\s*\n\s*/g, ' ');
    }

    if (collapseBlankBlocks) {
        const isBlankBlock = (node) => {
            if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
            const tag = node.tagName.toLowerCase();
            if (tag !== 'p' && tag !== 'div') return false;
            if (node.querySelector('img,figure,iframe')) return false;
            return (node.textContent || '').trim() === '';
        };

        const children = Array.from(root.childNodes).filter(node => 
            node.nodeType !== Node.TEXT_NODE || (node.textContent || '').trim() !== ''
        );

        let previousWasBlank = false;
        children.forEach(node => {
            const blank = isBlankBlock(node);
            if (blank && previousWasBlank) {
                node.remove();
                return;
            }
            previousWasBlank = blank;
        });
    }

    return root.innerHTML.trim();
};