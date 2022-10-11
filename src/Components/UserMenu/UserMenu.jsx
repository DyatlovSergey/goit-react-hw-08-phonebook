import { useDispatch } from 'react-redux';
import s from './UserMenu.module.css';
import { logout } from '../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import b from "../Phonebook.module.css"

export default function UserMenu() {
  const dispatch = useDispatch();
  const login = useSelector(getUserName);

  return (
    <div className={s.userMenuBox}>
      <h2 className={s.welcomeUser}>Welcome, {login}</h2>
      <button type="button" className={b.red_button} onClick={() => dispatch(logout())}>
        <span>Logout</span>
      </button>
    </div>
  );
}