import styled from "styled-components";
import { useEffect, useState } from "react";
import useScreenSize from "../../utils/useScreenSize";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow_forward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import Cube from "../components/cube";
import ShapeBall from "../home/components/shape-ball";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow_upward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 (1).svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_downward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
import { DropText } from "../components/drop-text";
const StyledButton = styled.button`
  border: none;
  outline: none;
  height: 40px;
  width: 160px;
  padding: 12px 14px;
  background-color: rgb(91, 81, 216);
  color: #fff;
  font-size: 0.8rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 15px;
    fill: #fff;
  }
`;
const About = () => {
  const screenSize = useScreenSize();
  const [isMobileSize, setIsMobileSize] = useState(false);
  useEffect(() => {
    setIsMobileSize(screenSize.width <= 767);
  }, [screenSize]);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="about"
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          marginLeft: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-around",
        }}
      >
        <div className="head">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "15px 0",
            }}
          >
            <div style={{ marginRight: "10px" }} className="name_shape"></div>
            <h5 style={{ color: "rgb(91,81,216)" }}>WHAT I DO</h5>
          </div>
          <DropText
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              marginBottom: "20px",
            }}
            // className="animate_header"
          >
            <p>I enjoy making better,</p>
            <p>human experience web pages</p>
          </DropText>
        </div>
        <div className="body" style={{ marginBottom: "40px" }}>
          <DropText>
            <p
              style={{
                fontSize: "3.8rem",
                fontWeight: "600",
                lineHeight: "6rem",
                margin: "20px 0",
              }}
            >
              Think. Make.
              <br />
              Develop.
              <br />
            </p>
            <StyledButton>
              Contact me{" "}
              <ArrowIcon style={{ color: "#fff", margin: "0 5px" }} />
            </StyledButton>
          </DropText>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-10%",
        }}
      >
        <DropText right={true}>
          <Cube
            sx={{
              zIndex: 10,
              "--width": "300px",
              "--height": "300px",
              "--depth": "300px",
              "--primaryColor": "#e3ffe7",
              "--secondaryColor": "#d9e7ff",
              "--thirdlyColor": "#ccd5e2ff",
              "--borderColor": "#d9e7ff",
              boxShadow: "rgba(0, 0, 0, 0.2) -99px -113px 74px -2px",
            }}
          />
        </DropText>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "40%",
          background: `linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)`,
        }}
      >
        <DropText right={true}>
          <Cube
            sx={{
              zIndex: 10,
              "--width": "40px",
              "--height": "40px",
              "--depth": "40px",
              "--primaryColor": "#f4fcf5ff",
              "--secondaryColor": "#d9e7ff",
              "--thirdlyColor": "#d9dde4ff",
              "--borderColor": "#d9e7ff",
              boxShadow: "rgba(0, 0, 0, 0.2) -99px -113px 74px -2px",
            }}
          />
        </DropText>
      </div>
      {/* <DropText right={true}> */}
      <ShapeBall
        sx={{
          position: "absolute",
          top: "30%",
          right: "40%",
          zIndex: 11,
          "--ball-width": "50px",
          "--ball-height": "50px",
          "--bgColor": "#d8deffff",
          "--circle-gradient": `radial-gradient(circle,rgba(217, 222, 250, 1) 21%, rgba(181, 192, 255, 1) 100%)`,
        }}
      />
      {/* </DropText> */}
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
        <ArrowUp
          style={{
            padding: "5px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          className="arrow"
          onClick={() => scrollToSection("home")}
        />

        <ArrowDown
          style={{
            padding: "5px",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
          className="arrow"
          onClick={() => scrollToSection("skill")}
        />
      </div>
    </div>
  );
};

export default About;
