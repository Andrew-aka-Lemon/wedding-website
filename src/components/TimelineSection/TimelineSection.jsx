import { weddingData } from '../../data/weddingData';
import './TimelineSection.css';

export default function TimelineSection() {
  const { timeline } = weddingData;

  return (
    <section className="section__timeline">
      <h2
        className="timeline__title"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {timeline.heading}
      </h2>
      <div className="timeline__list_wrap">
        {timeline.events.map((event, index) => (
          <div className="timeline__item" key={index}>
            <p
              className="timeline_time"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-once="true"
            >
              {event.time}
            </p>
            <div className="timeline__body">
              <p
                className="_body__title"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
              >
                {event.title}
              </p>
              <p
                className="_body__text"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                data-aos-once="true"
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
