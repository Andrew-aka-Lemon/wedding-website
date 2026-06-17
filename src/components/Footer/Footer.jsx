import { weddingData } from '../../data/weddingData';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <hr className="footer__divider" />
      <footer className="footer">
        <h2 className="footer__text">{weddingData.footer}</h2>
      </footer>
    </>
  );
}
