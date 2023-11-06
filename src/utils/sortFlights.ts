import { Flight, SortingType } from "types";

export function sortFlightsByDateAndTime(flights: Flight[], sortOrder = SortingType.EARLY_TO_LATE) {
  return flights.sort((a, b) => {
    const dateTimeA = a.date + "T" + a.expectedTime;
    const dateTimeB = b.date + "T" + b.expectedTime;

    if (sortOrder === SortingType.EARLY_TO_LATE) {
      if (dateTimeA < dateTimeB) {
        return -1;
      }
      if (dateTimeA > dateTimeB) {
        return 1;
      }
    } else if (sortOrder === SortingType.LATE_TO_EARLY) {
      if (dateTimeA > dateTimeB) {
        return -1;
      }
      if (dateTimeA < dateTimeB) {
        return 1;
      }
    }
    return 0;
  });
}
