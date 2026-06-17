import { weddingData } from '../../data/weddingData';
import './InvitationSection.css';

export default function InvitationSection() {
  const { invitation } = weddingData;

  return (
    <section className="main__section">
      <h2
        className="main__title"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {invitation.heading}
      </h2>
      <p
        className="main__text"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {invitation.paragraphs.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </p>
    </section>
  );
}
