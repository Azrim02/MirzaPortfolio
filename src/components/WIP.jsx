import WIP from '../assets/WIP.png';
import '../styles/wip.scss';

export default function WIPComponent(){
    return (
        <div className="WIP">
            <img src={WIP} alt="Work In Progress" />
        </div>
    );
}