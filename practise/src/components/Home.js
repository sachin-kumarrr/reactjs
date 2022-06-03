import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const arr = [3, 2, 4, 9, 8];
  //MAP
  const output = arr.map((x) => {
    return x;
  });

  //filter
  const filterr = arr.filter((x) => x > 3);

  //reduce

  function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }

  //the above fundtion can also be written with the help of reduce

  const reducee = arr.reduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0); // 0 is the initial value of acc // reduce takes 2 arguments 1. (arr,curr) 2. 0

  const maxElement = arr.reduce((acc, curr) => {
    if (acc < curr) {
      acc = curr;
    }
    return acc;
  }, 0);

  // array of objects

  const users = [
    { name: "sachin", age: 23 },
    { name: "okyichi", age: 24 },
    { name: "rip", age: 22 },
    { name: "infinity", age: 100 },
  ];

  const obj = users.map((x) => x.name);
  const obj2 = users.filter((x) => {
    return x.age >= 24;
  });
  const obj3 = users.filter((x) => x.age >= 24).map((x) => x.name); // chaining

  return (
    <div>
      Home <br />
      {console.log(output)}
      {console.log(filterr)}
      {console.log(findSum(arr))}
      {console.log(reducee)}
      {console.log(maxElement)}
      {console.log(obj)}
      {console.log(obj2)}
      {console.log(obj3)}
      <Link to="search">Search </Link>
      <br />
      <Link to="instagram">Instagram </Link>
      <br />
      <Link to="redux">Practise Redux </Link>
    </div>
  );
}

export default Home;
