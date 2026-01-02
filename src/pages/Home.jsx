import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome to My Portfolio</h1>
      <Button as="a" variant='success'>Get Started</Button>
    </div>
  );
}