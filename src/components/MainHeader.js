import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1 className="titles">ROSAY</h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to='/home'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to='/gallery'>
              Work
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
