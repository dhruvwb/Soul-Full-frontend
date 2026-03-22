import DOMPurify from 'dompurify';

/**
 * Renders HTML content safely using DOMPurify.
 * Use this wherever CMS / admin-authored rich-text content is displayed.
 */
export default function RichContent({ html, className, style, as: Tag = 'div' }) {
  if (!html) return null;

  const clean = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'br', 'hr',
      'strong', 'b', 'em', 'i', 'u', 's', 'strike',
      'ul', 'ol', 'li',
      'a', 'span', 'div', 'blockquote', 'pre', 'code',
      'sub', 'sup'
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'style']
  });

  return (
    <Tag
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
