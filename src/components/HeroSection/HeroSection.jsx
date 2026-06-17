import { weddingData } from '../../data/weddingData';
import groomAndBride from '../../assets/groom_and_bride.jpg';
import './HeroSection.css';

export default function HeroSection() {
  const { hero } = weddingData;

  return (
    <section className="first__section">
      <h1
        className="first__title"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {hero.title}
      </h1>
      
      <div className="first__content_wrapper">
        <div
          className="first__subtitle_overlay"
          data-aos="fade-in"
          data-aos-delay="400"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <span className="name-step name-1"><span className="cursive-a">А</span>ндрій</span>
          <span className="name-step name-2">та</span>
          <span className="name-step name-3">Марина</span>
        </div>
        <div
          className="first__img"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <img src={groomAndBride} alt={hero.names} />
        </div>
      </div>
    </section>
  );
}
