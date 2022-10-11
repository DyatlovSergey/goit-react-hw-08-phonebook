import s from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  const activeLink = ({ isActive }) => (isActive ? `${s.link} ${s.activeLink}` : s.link);
  return (
    <div className={s.authNavBox}>
      <NavLink to="/login" className={activeLink}>
        Log In
      </NavLink>
      <NavLink to="/register" className={activeLink}>
        Register
      </NavLink>
    </div>
  );
}