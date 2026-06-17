import { weddingData } from '../../data/weddingData';
import './LocationsSection.css';

export default function LocationsSection() {
  const { locations } = weddingData;

  return (
    <section className="section__location">
      <div className="__container">
        <div className="location__list">
          <div
            className="location__item"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h2 className="location__item__event">{locations[0].eventName}</h2>
            <h3 className="location__item__time">{locations[0].time}</h3>
            <div className="location__item__address_block">
              <p className="location__item__text">
                <span>{locations[0].venue}</span>
              </p>
              <p className="location__item__text">
                <span>{locations[0].address}</span>
              </p>
            </div>
            <a
              href={locations[0].mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location__item__link"
            >
              Відкрити карту
            </a>
          </div>
          <span className="line"></span>
          <div
            className="location__item"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h2 className="location__item__event">{locations[1].eventName}</h2>
            <h3 className="location__item__time">{locations[1].time}</h3>
            <div className="location__item__address_block">
              <p className="location__item__text">
                <span>{locations[1].venue}</span>
              </p>
              <p className="location__item__text">
                <span>{locations[1].address}</span>
              </p>
            </div>
            <a
              href={locations[1].mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location__item__link"
            >
              Відкрити карту
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
