import { useEffect, useState } from 'react';
import BlogEntry from '../components/BlogEntry';
import Layout from '../components/Layout';
import '../styles/projects.scss';
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

export default function Projects() {
  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadEntries = async () => {
      const entryFiles = import.meta.glob('../entries/*.md', { as: 'raw' });
      const projectsMap = {};

      for (const [path, loader] of Object.entries(entryFiles)) {
        const content = await loader();
        const fileName = path.split('/').pop();
        const { title, description, date, tags, project } = parseMarkdown(content);
        
        // Only include entries that have a project assigned
        if (project) {
          if (!projectsMap[project]) {
            projectsMap[project] = [];
          }

          projectsMap[project].push({
            fileName,
            title,
            description,
            date,
            tags,
            project,
            path
          });
        }
      }

      // Sort entries within each project by date in descending order
      Object.keys(projectsMap).forEach(projectName => {
        projectsMap[projectName].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
      });

      setProjects(projectsMap);
      // Set the first project as selected by default
      const projectNames = Object.keys(projectsMap).sort();
      if (projectNames.length > 0) {
        setSelectedProject(projectNames[0]);
      }
    };

    loadEntries();
  }, []);

  const projectNames = Object.keys(projects).sort();
  const currentEntries = selectedProject ? projects[selectedProject] : [];

  return (
    <Layout contentMaxWidth="1000px">
      <div className="Projects">
        <h1>Projects</h1>
        
        {projectNames.length === 0 ? (
          <p className="no-projects">No projects with entries found. Add a "project" field to your entry frontmatter.</p>
        ) : (
          <>
            <div className="project-tabs">
              {projectNames.map((projectName) => (
                <button
                  key={projectName}
                  className={`project-tab ${selectedProject === projectName ? 'active' : ''}`}
                  onClick={() => setSelectedProject(projectName)}
                >
                  <span className="project-name">{projectName}</span>
                  <span className="project-count">{projects[projectName].length}</span>
                </button>
              ))}
            </div>

            <div className="project-content">
              <h2>{selectedProject}</h2>
              <div className="entries-list">
                {currentEntries.map((entry) => (
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
          </>
        )}
      </div>
    </Layout>
  );
}
