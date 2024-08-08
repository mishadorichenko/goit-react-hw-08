import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';
import { logOut } from '../../redux/auth/operations';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
