import { useEffect, useState } from 'react';
import BlogEntry from '../components/BlogEntry';
import '../styles/entries.scss';
import { parseDateFromFrontmatter } from '../utils/dateParser';

function parseMarkdown(content) {
  const lines = content.split('\n');
  let frontmatter = {};
  let title = '';
  let description = '';
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

  // Parse title and description from content
  for (let i = contentStart; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (!title && line.startsWith('#')) {
      title = line.replace(/^#+\s*/, '').trim();
    }
    else if (title && !description && line && !line.startsWith('#')) {
      description = line;
      break;
    }
  }

  return { 
    title, 
    description,
    date: parseDateFromFrontmatter(frontmatter.date) || '',
    tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
    project: frontmatter.project || ''
  };
}

export default function Entries() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const entryFiles = import.meta.glob('../entries/*.md', { as: 'raw' });
      const loadedEntries = [];

      for (const [path, loader] of Object.entries(entryFiles)) {
        const content = await loader();
        const fileName = path.split('/').pop();
        const { title, description, date, tags, project } = parseMarkdown(content);
        
        loadedEntries.push({
          fileName,
          title,
          description,
          date,
          tags,
          project,
          path
        });
      }

      // Sort entries by date in descending order
      loadedEntries.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      });

      setEntries(loadedEntries);
    };

    loadEntries();
  }, []);

  return (
    <div className="Entries">
      <h1>Entries</h1>
      <div className="blog-list">
        {entries.map((entry) => (
          <BlogEntry
            key={entry.path}
            title={entry.title}
            description={entry.description}
            date={entry.date}
            tags={entry.tags}
            fileName={entry.fileName}
          />
        ))}
      </div>
    </div>
  );
}