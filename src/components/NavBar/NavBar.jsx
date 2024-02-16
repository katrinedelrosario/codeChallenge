import { NavLink } from "react-router-dom";


export const NavBar = ({ backgroundColor }) => {
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
    <nav style={{ backgroundColor }}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
