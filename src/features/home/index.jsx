import { useEffect, useState } from "react";
import PersonalImage from "../../assets/img/my_profile_pic3.png";
import useScreenSize from "../../utils/useScreenSize";
import Shapes from "./components/shapes";
import ShapeBall from "./components/shape-ball";
import Cube from "../components/cube";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_downward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import Nav from "../layout/nav";
import { DropText } from "../components/drop-text";
function Home() {
  const [isScrolling, setIsScrolling] = useState(false);
  const screenSize = useScreenSize();
  const [isMobileSize, setIsMobileSize] = useState(false);
  useEffect(() => {
    setIsMobileSize(screenSize.width <= 767);
  }, [screenSize]);

  const goToContact = () => {
    // navigate("/contact");
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "60px 1fr",
        position: "relative",
      }}
      id="home"
      onScroll={() => setIsScrolling(true)}
    >
      <Nav />
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          display: "grid",
          gridTemplateColumns: isMobileSize ? "1fr" : "4fr 2fr",
          gridTemplateRows: isMobileSize ? "4fr 2fr" : "1fr",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            className="card-container homePageLeftSide"
            style={{
              margin: "auto 4rem",
            }}
          >
            <div
              style={{
                margin: "10px 0",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{ position: "relative", marginRight: "10px" }}
                className="name_shape"
              ></div>
              <div>
                <h5 style={{ color: "rgb(91,81,216)" }}>Abdo Masko</h5>
              </div>
            </div>
            <DropText>
              <p
                style={{
                  fontSize: "3.8rem",
                  fontWeight: "600",
                  lineHeight: "6rem",
                  marginBottom: "15px",
                }}
              >
                Hello, my <br />
                name's <span>abdo</span> <br />
                I'm frontend <br /> developer
              </p>
            </DropText>
            <div
              style={{
                position: "absolute",
                right: "-20%",
                bottom: "-2%",
              }}
            >
              <Shapes />
            </div>
            {/* that cube */}
            <div
              style={{
                position: "absolute",
                bottom: "30%",
                right: "30%",
                background: `linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)`,
              }}
            >
              <Cube
                sx={{
                  zIndex: 12,
                  "--width": "40px",
                  "--height": "40px",
                  "--depth": "40px",
                  "--primaryColor": "#f4fcf5ff",
                  "--secondaryColor": "#d9e7ff",
                  "--thirdlyColor": "#d9dde4ff",
                  "--borderColor": "#d9e7ff",
                  boxShadow: "rgba(0, 0, 0, 1) -35px -21px 38px -11px",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "55%",
                right: "25%",
                background: `linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)`,
              }}
            >
              <Cube
                sx={{
                  zIndex: 12,
                  "--width": "40px",
                  "--height": "40px",
                  "--depth": "40px",
                  "--primaryColor": "#f4fcf5ff",
                  "--secondaryColor": "#d9e7ff",
                  "--thirdlyColor": "#d9dde4ff",
                  "--borderColor": "#d9e7ff",
                  boxShadow: "rgba(0, 0, 0, 1) -35px -21px 38px -11px",
                }}
              />
            </div>
          </div>
        </div>
        {/* right side */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "rgb(91,81,216)",
          }}
        >
          <div
            className="homePageRightSide"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              height: "40vh",
              width: "100%",
            }}
          >
            {/* <img
              src={PersonalImage}
              alt="my personal"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                outline: "none",
                border: "20px solid #eaeaea",
                borderBottomColor: "transparent",
              }}
            /> */}
            <ShapeBall
              sx={{
                position: "absolute",
                bottom: "20%",
                right: "17%",
                zIndex: 12,
                boxShadow: "-7px 7px 7px -5px rgb(0 0 0 / 30%)",
                "--ball-width": "30px",
                "--ball-height": "30px",
                "--bgColor": "#fff",
                "--circle-gradient": `radial-gradient(circle,rgba(255, 255, 255, 1) 0%, rgba(189, 189, 189, 1) 100%)`,
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <ArrowDown
            style={{
              padding: "5px",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            className="arrow"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
