import { SortingType } from "types";
import { describe, expect, test } from "vitest";
import { sortFlightsByDateAndTime } from "../src/utils/sortFlights";
import { flightsSortedEarlyToLate, flightsToSort } from "./data/sortFlightsTestData";

describe("sortFlights", () => {
  test("Flights should be sorted correctly from early to late", () => {
    expect(sortFlightsByDateAndTime(flightsToSort, SortingType.EARLY_TO_LATE)).toEqual(flightsSortedEarlyToLate);
  });
  test("Flights should be sorted correctly from late to early", () => {
    expect(sortFlightsByDateAndTime(flightsToSort, SortingType.LATE_TO_EARLY)).toEqual(flightsSortedEarlyToLate.reverse());
  });
});
