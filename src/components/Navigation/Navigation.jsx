import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.container}>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkClass} to="/contacts">
          Contacs
        </NavLink>
      )}
    </nav>
  );
}
export default Navigation;
