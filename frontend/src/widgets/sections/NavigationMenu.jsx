import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../buttons/LogOutButton";

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Write an Article</Link>
        </li>
        <li>
          <Link to="/article_list">Article List</Link>
        </li>
        <LogOutButton />
      </ul>
    </nav>
  );
};

export default NavigationMenu;
