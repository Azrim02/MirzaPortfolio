import Button from 'react-bootstrap/Button';
import '../styles/home.scss';
import logo from '../assets/logo.png';

export default function Home() {
  return (
    <div className="Home">
      <div>
        <h6>Hello, I'm</h6>
        <h2><b>Mirza Shariman</b></h2>
        <h1>Junior Software Developer</h1>
        <h5>| Linux, Python, Java, React, AWS, Arduino</h5>
        {/* <Button as="a" variant='success'>Get Started</Button> */}
        <br></br>
        <p>Avid learner, meme connoisseur, and an indecisive fudge</p>
        <p>Professionally, I'm a great guy</p>
      </div>
      <div>
        <img src={logo} alt="Mirza Shariman" />
      </div>
    </div>
  );
}