import { useEffect, useState } from "react";
import useScreenSize from "../../utils/useScreenSize";
import NavLinkItem from "../components/layout/navlink-item";
import { ReactComponent as MenuSvg } from "../../assets/icons/menu.svg";
const sideLinks = [
  {
    to: "home",
    title: "Home",
  },
  {
    to: "about",
    title: "about",
  },

  {
    to: "contact",
    title: "contact",
  },
];
const Nav = () => {
  const screenSize = useScreenSize();
  const [isMobileSize, setIsMobileSize] = useState(false);
  useEffect(() => {
    setIsMobileSize(screenSize.width <= 500);
  }, [screenSize]);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: isMobileSize ? "1fr" : "4fr 2fr",
        gridTemplateRows: isMobileSize ? "4fr 2fr" : "1fr",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "rgb(91,81,216)",
          margin: "0 20px",
          fontSize: isMobileSize ? "18px" : "24px",
        }}
      >
        FOLIO
      </h1>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgb(91, 81, 216)",
          color: "#fff",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div className="menu" onClick={() => setToggleMenu((e) => !e)}>
          <div></div>
          <div></div>
        </div>
        {toggleMenu && (
          <div
            className="drop-down-menu"
            onMouseLeave={() => setToggleMenu(false)}
          >
            <div onClick={() => scrollToSection("home")}>home</div>
            <div onClick={() => scrollToSection("about")}>about</div>
            <div onClick={() => scrollToSection("skill")}>skill</div>
            <div onClick={() => scrollToSection("contact")}>contact</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
