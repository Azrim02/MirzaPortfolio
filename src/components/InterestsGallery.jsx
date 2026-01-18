import Layout from './Layout';
import GalleryDiv from './GalleryDiv';
import InterestCard from './InterestCard';
import CoolEmoji from '../assets/cool_emoji.png';

function InterestsGallery() {
    return (
        <Layout>
            <GalleryDiv>
                <InterestCard
                skillName="Raspberry PI"
                logoSrc="https://upload.wikimedia.org/wikipedia/en/c/cb/Raspberry_Pi_Logo.svg"
                link="https://www.raspberrypi.org/"
                />
                <InterestCard
                skillName="Kubernetes"
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg"
                link="https://kubernetes.io/"
                />
                <InterestCard
                skillName="Docker"
                logoSrc="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png"
                link="https://www.docker.com/"
                />
                <InterestCard
                skillName="React"
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                link="https://reactjs.org/"
                />
                <InterestCard
                skillName="Amazon Web Services"
                logoSrc="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
                link="https://aws.amazon.com/"
                />
                <InterestCard
                skillName="Linux"
                logoSrc="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png"
                link="https://www.linux.org/"
                />
                {/* <img src={CoolEmoji} alt='test images' />
                <img src={CoolEmoji} alt='test images' />
                <img src={CoolEmoji} alt='test images' />
                <img src={CoolEmoji} alt='test images' />
                <img src={CoolEmoji} alt='test images' /> */}
            </GalleryDiv>
        </Layout>
    );
    }

export default InterestsGallery;