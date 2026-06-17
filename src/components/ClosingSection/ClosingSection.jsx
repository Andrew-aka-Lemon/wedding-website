import { weddingData } from '../../data/weddingData';
import './ClosingSection.css';

export default function ClosingSection() {
  return (
    <section className="last__section">
      <h2
        className="last__title"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {weddingData.closing}
      </h2>
    </section>
  );
}
