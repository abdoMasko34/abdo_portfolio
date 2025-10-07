import { NavLink } from "react-router-dom";

interface navProps {
  to: string;
  title: string;
}

const NavLinkItem = ({ to, title }: navProps) => {
  return (
    <NavLink
      to={to}
      style={({ isActive, isPending, isTransitioning }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isPending ? "red" : "#444",
          borderBottom: isActive ? "2px solid rgb(91,81,216)" : "",
          viewTransitionName: isTransitioning ? "slide" : "",
          textDecoration: "none",
          margin: "8px 10px",
          padding: "8px",
          transition: "fontWeight borderBottom linear 1s",
        };
      }}
    >
      {title}
    </NavLink>
  );
};
export default NavLinkItem;
