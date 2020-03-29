import React from "react";
import { NavLink } from "react-router-dom";

export default function SignInLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating lightblue lighten-1">
          RAP
        </NavLink>
      </li>
    </ul>
  );
}
