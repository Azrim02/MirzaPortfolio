export function parseDateFromFrontmatter(dateString) {
  if (!dateString) return '';
  
  // Parse dd-mm-yy format
  const regex = /(\d{2})-(\d{2})-(\d{2})/;
  const match = dateString.match(regex);
  
  if (!match) return dateString;
  
  const day = match[1];
  const month = match[2];
  const year = match[3];
  
  // Convert yy to yyyy (00-99 -> 2000-2099)
  const fullYear = parseInt(year) < 50 ? `20${year}` : `20${year}`;
  
  // Create date object (month is 0-indexed in JavaScript)
  const date = new Date(`${fullYear}-${month}-${day}`);
  
  // Format as "January 15, 2024"
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
