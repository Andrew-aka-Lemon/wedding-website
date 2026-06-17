import { weddingData } from '../../data/weddingData';
import { useCountdown } from '../../hooks/useCountdown';
import './DateCountdown.css';

export default function DateCountdown() {
  const { date } = weddingData;
  const countdown = useCountdown(date.targetDate);

  return (
    <section className="date__section">
      <h2
        className="main__title"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {date.label}
      </h2>
      <h3
        className="main__subtitile"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {date.dateString}
      </h3>
      <h2
        className="main__title"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        {date.countdownLabel}
      </h2>
      <div
        className="time__wrap"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-once="true"
      >
        <div className="time__item">
          <span>{countdown.days}</span>
          <span>{countdown.labels.days}</span>
        </div>
        <div className="time__item">
          <span>{countdown.hours}</span>
          <span>{countdown.labels.hours}</span>
        </div>
        <div className="time__item">
          <span>{countdown.minutes}</span>
          <span>{countdown.labels.minutes}</span>
        </div>
        <div className="time__item">
          <span>{countdown.seconds}</span>
          <span>{countdown.labels.seconds}</span>
        </div>
      </div>
    </section>
  );
}
