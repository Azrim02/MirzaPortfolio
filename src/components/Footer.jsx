import '../styles/footer.scss';

function Footer() {
    return (
        <div>
            <div className="divider"></div>
            <div className="Footer">
            <footer style={{ textAlign: 'center', padding: '1rem 0' }}>
                <p>© {new Date().getFullYear()} Mirza Shariman. All rights reserved.</p>
            </footer>
            </div>
        </div>
    );
}

export default Footer;