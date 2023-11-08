import { State } from "@app/State";
import * as useFlightsHookMethods from "@hooks/useFlights";
import { cleanup, render } from "@testing-library/react";
import { SortingType } from "types";
import { afterEach, describe, expect, test, vi } from "vitest";
import FlightList from "../src/features/flights/FlightList";
import flightListTestData from "./data/flightListTestData";

describe("FlightList", () => {
  const useFlightsSpy = vi.spyOn(useFlightsHookMethods, "default");
  useFlightsSpy.mockReturnValue({ data: flightListTestData, isLoading: false, isError: false });

  const dispatch = () => null;

  test("FlightList should render nothing when input is empty", () => {
    const state = {
      inputValue: "",
      inputHasChanged: false,
      data: flightListTestData,
      isLoading: false,
      isError: false,
      sorting: SortingType.EARLY_TO_LATE
    };

    const { asFragment } = render(
      <State.Provider value={{ state, dispatch }}>
        <FlightList />
      </State.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("FlightList should render 5 london items in order when input is 'Lon' and sorting is 'Early to late'", () => {
    const state = {
      inputValue: "lon",
      inputHasChanged: true,
      data: flightListTestData,
      isLoading: false,
      isError: false,
      sorting: SortingType.EARLY_TO_LATE
    };

    const { asFragment } = render(
      <State.Provider value={{ state, dispatch }}>
        <FlightList />
      </State.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("FlightList should render 5 london items in order when input is 'Lon' and sorting is 'Late to early'", () => {
    const state = {
      inputValue: "lon",
      inputHasChanged: true,
      data: flightListTestData,
      isLoading: false,
      isError: false,
      sorting: SortingType.LATE_TO_EARLY
    };

    const { asFragment } = render(
      <State.Provider value={{ state, dispatch }}>
        <FlightList />
      </State.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  afterEach(() => {
    useFlightsSpy.mockRestore();
    cleanup();
  });
});
