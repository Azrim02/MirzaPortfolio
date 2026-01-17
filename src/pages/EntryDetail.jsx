import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../styles/entry-detail.scss';
import { parseDateFromFrontmatter } from '../utils/dateParser';

// Import all attachment images dynamically
const attachmentModules = import.meta.glob('../entries/attachments/**/*', { eager: true, as: 'url' });

// Create a map of filenames to their URLs
const attachmentMap = Object.entries(attachmentModules).reduce((acc, [path, url]) => {
  const filename = path.split('/').pop();
  acc[filename] = url;
  return acc;
}, {});

// Custom image component for responsive images
function CustomImage({ src, alt }) {
  return (
    <img 
      src={src} 
      alt={alt}
    />
  );
}

function parseMarkdown(content) {
  const lines = content.split('\n');
  let frontmatter = {};
  let title = '';
  let contentStart = 0;

  // Parse frontmatter
  if (lines[0].trim() === '---') {
    let fmEnd = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        fmEnd = i;
        contentStart = i + 1;
        break;
      }
      const [key, ...valueParts] = lines[i].split(':');
      if (key && valueParts.length > 0) {
        let value = valueParts.join(':').trim();
        
        // Handle array values for tags
        if (key.trim() === 'tags' && value.startsWith('[')) {
          value = value.replace(/[\[\]"']/g, '').split(',').map(tag => tag.trim());
        } else {
          value = value.replace(/^["']|["']$/g, '');
        }
        
        frontmatter[key.trim()] = value;
      }
    }
  }

  // Parse title from content
  for (let i = contentStart; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!title && line.startsWith('#')) {
      title = line.replace(/^#+\s*/, '').trim();
      break;
    }
  }

  // Get content after frontmatter
  let markdownContent = lines.slice(contentStart).join('\n');

  // Convert Obsidian image syntax ![[filename]] to standard markdown with resolved URLs
  markdownContent = markdownContent.replace(/!\[\[([^\]]+)\]\]/g, (match, filename) => {
    const imageUrl = attachmentMap[filename] || '';
    return `![${filename}](${imageUrl})`;
  });

  return { 
    title, 
    content: markdownContent,
    date: parseDateFromFrontmatter(frontmatter.date) || '',
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : []
  };
}

export default function EntryDetail() {
  const { entryName } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEntry = async () => {
      try {
        const fileName = `${entryName}.md`;
        const modules = import.meta.glob('../entries/*.md', { as: 'raw' });
        const modulePath = `../entries/${fileName}`;
        
        if (modulePath in modules) {
          const content = await modules[modulePath]();
          const parsed = parseMarkdown(content);
          setEntry(parsed);
        } else {
          setError('Entry not found');
        }
      } catch (err) {
        setError('Failed to load entry');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadEntry();
  }, [entryName]);

  if (loading) {
    return <div className="entry-detail"><p>Loading...</p></div>;
  }

  if (error || !entry) {
    return (
      <div className="entry-detail">
        <p>{error || 'Entry not found'}</p>
        <button onClick={() => navigate('/entries')}>Back to Entries</button>
      </div>
    );
  }

  return (
    <article className="entry-detail">
      <button className="back-button" onClick={() => navigate('/entries')}>← Back</button>
      <header className="entry-detail-header">
        {/* <h1>{entry.title}</h1> */}
        <p className="entry-detail-meta">
          {entry.date && <time>{entry.date}</time>}
        </p>
        {entry.tags && entry.tags.length > 0 && (
          <div className="entry-detail-tags">
            {entry.tags.map((tag) => (
              <span key={tag} className="entry-detail-tag">{tag}</span>
            ))}
          </div>
        )}
      </header>
      <div className="entry-detail-content">
        <ReactMarkdown components={{ img: CustomImage }}>
          {entry.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
