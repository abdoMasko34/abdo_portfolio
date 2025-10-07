import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google-svgrepo-com (1).svg";
import Cube from "../components/cube";
import ShapeBall from "../home/components/shape-ball";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow_upward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 (1).svg";
import { DropText } from "../components/drop-text";
const Contact = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="contact"
      style={{
        background:
          " radial-gradient(circle,rgba(91, 81, 216, 1) 0%, rgba(15, 0, 224, 1) 100%)",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        color: "#fff",
      }}
      className="aboutPage"
    >
      <div style={{ margin: "60px 80px" }}>
        <div
          style={{
            margin: "10px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              marginRight: "10px",
              height: "1px",
              width: "30px",
              border: "1px solid #fff",
              backgroundColor: "#fff",
            }}
          ></div>
          <div>
            <h5 style={{ color: "#fff" }}>How to contact me</h5>
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
            My Contacts <br />
          </p>
        </DropText>
        <DropText>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <LinkedInIcon
              style={{
                width: "40px",
                height: "40px",
                margin: "15px 0",
              }}
              className="svgColorWhite"
            />
            <p style={{ margin: "0 10px", fontSize: "1.2rem" }}>Abdo Masko</p>
          </div>
        </DropText>
        <DropText>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "15px 0",
            }}
          >
            <GithubIcon
              style={{
                width: "40px",
                height: "40px",
              }}
              className="svgColorWhite"
            />
            <p style={{ margin: "0 10px", fontSize: "1.2rem" }}>@AbdoMasko34</p>
          </div>
        </DropText>
        <DropText>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "15px 0",
            }}
          >
            <GoogleIcon
              style={{
                width: "40px",
                height: "40px",
              }}
              className="svgColorWhite"
            />{" "}
            <p style={{ margin: "0 10px", fontSize: "1.2rem" }}>
              abdo99mesko@gmail.com
            </p>
          </div>
        </DropText>
        <DropText>
          <div
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              margin: "20px 0",
            }}
          >
            <p>I create and Develop ideas,</p>
            <p>Web pages , designs, experience</p>
          </div>
        </DropText>
      </div>
      <div
        style={{
          position: "absolute",
          top: "45%",
          right: "12%",
        }}
      >
        <DropText translateDir="right">
          <Cube
            sx={{
              // opacity: "0.8",
              zIndex: 12,
              "--width": "80px",
              "--height": "80px",
              "--depth": "80px",
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
          right: "30%",
        }}
      >
        <DropText translateDir="left">
          <Cube
            sx={{
              zIndex: 10,
              "--width": "80px",
              "--height": "80px",
              "--depth": "80px",
              "--primaryColor": "#f4fcf5ff",
              "--secondaryColor": "#d9e7ff",
              "--thirdlyColor": "#d9dde4ff",
              "--borderColor": "#d9e7ff",
              boxShadow: "rgba(0, 0, 0, 0.2) -99px -113px 74px -2px",
            }}
          />
        </DropText>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "55%",
          right: "25%",
        }}
      >
        <DropText translateDir>
          <Cube
            sx={{
              zIndex: 10,
              "--width": "80px",
              "--height": "80px",
              "--depth": "80px",
              "--primaryColor": "#fab2dcff",
              "--secondaryColor": "#f89cd2ff",
              "--thirdlyColor": "#cf82afff",
              "--borderColor": "#e2a3c9ff",
              boxShadow: "rgba(0, 0, 0, 0.2) -99px -113px 74px -2px",
            }}
          />
        </DropText>
      </div>
      <ShapeBall
        sx={{
          position: "absolute",
          top: "50%",
          right: "23%",
          zIndex: 11,
          "--ball-width": "50px",
          "--ball-height": "50px",
          "--bgColor": "#d8deffff",
          "--circle-gradient": `radial-gradient(circle,rgba(217, 222, 250, 1) 21%, rgba(181, 192, 255, 1) 100%)`,
        }}
      />
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
          zIndex: 12,
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
          onClick={() => scrollToSection("skill")}
        />
      </div>
    </div>
  );
};

export default Contact;
