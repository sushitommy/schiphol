import { State } from "@app/State";
import { useContext } from "react";
import { Flight } from "types";
import { sortFlightsByDateAndTime } from "utils/sortFlights";
import styles from "./FlightList.module.css";
import FlightListItem from "./FlightListItem";
import InfoMessage from "./InfoMessage";
import Sort from "./Sort";

function FlightList() {
  const { state } = useContext(State);

  if (!state.data) {
    return null;
  }

  // Check input
  if (!state.inputHasChanged) {
    return null;
  }

  if (state.inputValue.length < 3) {
    return <InfoMessage message="Please use 3 or more characters when searching." />;
  }

  let parsedFlights = state.data;

  // Filter on destination
  const airportRegex = new RegExp(state.inputValue, "i");
  parsedFlights = parsedFlights.filter((flight) => airportRegex.test(flight.airport));

  // Limit to 5 results
  parsedFlights = parsedFlights.slice(0, 5);

  // Sort flights
  if (parsedFlights.length > 1) {
    parsedFlights = sortFlightsByDateAndTime(parsedFlights, state.sorting);
  }

  if (parsedFlights.length > 0) {
    return (
      <div className={styles.flightList}>
        <Sort />
        {parsedFlights?.map((flight: Flight) => (
          <FlightListItem key={flight.flightIdentifier} {...flight} />
        ))}
      </div>
    );
  } else {
    return <div className={styles.flightList}>No flights found.</div>;
  }
}

export default FlightList;
