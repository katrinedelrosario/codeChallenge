import { NavLink } from "react-router-dom";

// https://dev.to/mrpbennett/rendering-nav-links-with-map-in-react-51l5
export const NavBar = () => {
  const style = {
    backgroundColor: "pink",
  };
  const links = [
    {
      backgroundColor: style.backgroundColor,
      to: "/",
      name: "Forside",
    },
    {
      backgroundColor: style.backgroundColor,
      to: "/login",
      name: "Login",
    },
  ];

  return (
    <nav style={{ backgroundColor: style.backgroundColor }}>
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
