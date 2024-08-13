import clsx from 'clsx';
import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function AuthNav() {
  return (
    <div>
      <NavLink className={getLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={getLinkClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
}

export default AuthNav;
