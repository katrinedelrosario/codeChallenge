import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss'

export const NavBar = ({ backgroundColor }) => {
  const activeStyle = ({ isActive }) => {
    return{
      color: isActive ? 'red' : 'black'
    }
  }
  const links = [
    {
      to: "/",
      name: "Forside",
    },
    {
      to: "/login",
      name: "Login",
    },
  ];

  return (
    <nav className={styles.nav} style={{ backgroundColor }}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink style={activeStyle} to={link.to}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
