import React, { useState } from "react";
import "./Search.css";
import { Users } from "../Users";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  return (
    <div className="search">
      <Link to="/">Home</Link>
      <input
        className="searchText"
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)} // it will set the input value in query
      />
      <ul className="searchData">
        {Users.filter(
          (user) => user.first_name.toLowerCase().includes(query) // it will filter out the name matches
        ).map((user) => (
          <li key={user.id}>{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
