import { Link } from 'react-router-dom';

function BlogEntry({ title, description, date, tags, fileName }) {
  const entryName = fileName.replace('.md', '');
  
  return (
    <article className="blog-entry">
      <header className="blog-entry-header">
        <h2 className="blog-entry-title">{title || 'Untitled'}</h2>
        <time className="blog-entry-date">{date}</time>
      </header>
      {tags && tags.length > 0 && (
        <div className="blog-entry-tags">
          {tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
      )}
      <p className="blog-entry-excerpt">{description || 'No description available.'}</p>
      <Link to={`/entries/${entryName}`} className="blog-entry-link">Read More →</Link>
    </article>
  );
}

export default BlogEntry;
