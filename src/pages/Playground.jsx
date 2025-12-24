/*import '../styles/App.css'*/
import Button from '../components/Button';
import '../styles/colors.scss'

function Playground() {
  return (
    <div className="Playground">
      <h1>Hello World! <br />Yayangku COMEYYYY xD </h1>
      <Button>Default</Button>

      <Button variant="confirm">
        Confirm
      </Button>

      <Button variant="delete">
        Delete
      </Button>
      <br></br>
      <Button variant="borderless">
        Cancel
      </Button>

      <Button variant="confirm" loading>
        Saving
      </Button>

      <Button variant="delete" disabled>
        Delete
      </Button>
      

    </div>
  );
}

export default Playground;