import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/home.scss';
import Candid from '../assets/CandidLondon.png';
import CoolEmoji from '../assets/cool_emoji.png';

export default function Home() {
  return (
    <div className="Home">
      <div>
        <h6>Hello, I'm</h6>
        <h2><b>Mirza Shariman</b></h2>
        <h1 style={{ color: '#546e59' }}><b>Junior Software Developer</b></h1>
        <h5 style={{ color: 'gray' }}>| Linux, Python, Java, React, AWS, Arduino</h5>
        {/* <Button as="a" variant='success'>Get Started</Button> */}
        <br></br>
        <p>Avid learner, meme connoisseur, and an indecisive fudge</p>
        <p>Professionally, I'm a great guy <img className="CoolEmoji" src={CoolEmoji} alt="cool emoji"/> </p>
        <Button as={Link} to="/entries" variant='success'>See what I've been up to</Button>
        <Button as={Link} to="/contact" variant='outline-success' style={{ marginLeft: '10px' }}>Contact</Button>
      </div>
      <div className="CandidContainer">
        <img className="Candid" src={Candid} alt="Mirza Shariman" />
      </div>
    </div>
  );
}