import { Flight } from "types";
import styles from "./FlightListItem.module.css";

function FlightListItem({ flightNumber, airport, date, expectedTime, originalTime, url, score }: Flight) {
  return (
    <div className={styles.item}>
      <h2 className={styles.itemTitle}>
        {flightNumber} to {airport}
      </h2>
      <dl className={styles.itemContent}>
        <dt>Date</dt>
        <dd>{date}</dd>
        <dt>Original time</dt>
        <dd>{originalTime}</dd>
        <dt>Expected time</dt>
        <dd>{expectedTime}</dd>
        <dt>Score</dt>
        <dd>{score}</dd>
        <dt>
          <a href={url}>Go to flight ↗</a>
        </dt>
        <dd></dd>
      </dl>
    </div>
  );
}

export default FlightListItem;
