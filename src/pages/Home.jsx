import Button from 'react-bootstrap/Button';
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <h1>Welcome to My Portfolio</h1>
      <Button as="a" variant='success'>Get Started</Button>
    </div>
  );
}