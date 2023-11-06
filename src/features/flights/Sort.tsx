import { State } from "@app/State";
import { useContext } from "react";
import { ActionType, SortingType } from "types";
import styles from "./Sort.module.css";

function Sort() {
  const { state, dispatch } = useContext(State);

  return (
    <div className={styles.sortForm}>
      Sorteer op:
      <select
        className={styles.selectBox}
        name="sortOption"
        value={state.sorting}
        onChange={(event) => dispatch({ type: ActionType.SET_SORTING, payload: event.target.value as SortingType })}
      >
        <option value={SortingType.EARLY_TO_LATE}>Early to late</option>
        <option value={SortingType.LATE_TO_EARLY}>Late to early</option>
      </select>
    </div>
  );
}

export default Sort;
