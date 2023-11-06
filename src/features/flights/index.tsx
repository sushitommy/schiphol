import { State } from "@app/State";
import { useContext } from "react";
import FlightList from "./FlightList";
import InfoMessage from "./InfoMessage";
import styles from "./index.module.css";

function Flights() {
  const { state } = useContext(State);

  if (state.isLoading) {
    return <InfoMessage message="Loading..." />;
  }

  if (state.isError) {
    return <InfoMessage message="We encountered an error. Please try again or contact support." />;
  }

  if (state.data && !state.data.length) {
    return <InfoMessage message="There are no flights." />;
  }

  if (state.data && state.data.length) {
    return (
      <section className={styles.container}>
        <FlightList />
      </section>
    );
  }
}

export default Flights;
