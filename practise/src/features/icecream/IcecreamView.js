import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

function IcecreamView() {
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of Ice Creams - {numberOfIcecreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order Ice Creams</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock Ice Creams
      </button>
    </div>
  );
}

export default IcecreamView;
