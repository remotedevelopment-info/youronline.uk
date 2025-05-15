type TextNode = {
    type: 'text';
    text: string;
    bold?: boolean;
    italic?: boolean;
}

type RichTextNodeType = 
    | 'paragraph' 
    | 'text'
    | 'heading'
    | 'list'
    | 'list-item'
    | 'link'
    | 'code'
    | 'quote'
    | 'image';

type RichTextNode = {
    type: RichTextNodeType;
    level?: number;        // for headings (h1-h6)
    format?: 'ordered' | 'unordered'; // for lists
    url?: string;         // for links
    text?: string;        // for text nodes
    children?: RichTextNode[];
    bold?: boolean;
    italic?: boolean;
    code?: boolean;
    // other styling properties...
};

type ParagraphNode = {
    type: 'paragraph';
    children: Array<TextNode>;
}

// type RichTextNode = TextNode | ParagraphNode;
function formatTextNode(node: any): string {
    let text = node.text;
    if (node.bold) text = `<strong>${text}</strong>`;
    if (node.italic) text = `<em>${text}</em>`;
    return text;
}

function formatHeadingNode(node: any): string {
    const level = node.level || 1;
    const content = node.children?.map(child => formatTextNode(child)).join('') || '';
    return `<h${level}>${content}</h${level}>`;
}

function formatParagraphNode(node: ParagraphNode): string {
    const innerContent = node.children
        .map(child => formatTextNode(child))
        .join('');
    return `<p>${innerContent}</p>`;
}

function formatListNode(node: any): string {
    const tag = node.format === 'ordered' ? 'ol' : 'ul';
    const items = node.children?.map(child => {
        const content = child.children?.map(grandChild => formatTextNode(grandChild)).join('') || '';
        return `<li>${content}</li>`;
    }).join('') || '';
    return `<${tag}>${items}</${tag}>`;
}

// Main parser function
export function parseRichText(content: RichTextNode[]): string {
    return content.map(node => {
        switch (node.type) {
            case 'text':
                return formatTextNode(node);
            case 'heading':
                return formatHeadingNode(node);
            case 'list':
                return formatListNode(node);
            case 'paragraph':
                return formatParagraphNode(node);
            default:
                console.warn(`Unhandled node type: ${node.type}`);
                return '';
        }
    }).join('\n');
}
