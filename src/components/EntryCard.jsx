import { Card } from 'react-bootstrap';

function EntryCard({ title, description, date, fileName }) {
  return (
    <Card className="text-center">
      {/* <Card.Header>{title || 'Untitled'}</Card.Header> */}
      <Card.Body>
        <Card.Title>{title || 'Untitled'}</Card.Title>
        <Card.Text>
          {description || 'No description available.'}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{date || fileName}</Card.Footer>
    </Card>
  );
}

export default EntryCard;