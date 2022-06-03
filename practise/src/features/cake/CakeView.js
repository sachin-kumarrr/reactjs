import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; //.to read data from react store in a react component
import IcecreamView from "../icecream/IcecreamView";
import UserView from "../user/UserView";
import { ordered, restocked } from "./cakeSlice";

function CakeView() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cakes</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default CakeView;
