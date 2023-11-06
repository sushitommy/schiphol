import { State } from "@app/State";
import { useContext } from "react";
import { ActionType } from "types";
import styles from "./SearchBox.module.css";

function SearchBox() {
  const { state, dispatch } = useContext(State);

  return (
    <div className={styles.searchBox}>
      <h1>Find flights</h1>
      <input
        type="text"
        className={styles.input}
        value={state.inputValue}
        onChange={(event) => dispatch({ type: ActionType.SET_INPUT_VALUE, payload: event.target.value })}
      />
    </div>
  );
}

export default SearchBox;
