import Card from "../components/cards/card-component";
import handImg from "../../assets/img/192610858-3d-hand-pointing.png";
import PointerImg from "../../assets/img/pointer&nav2.png";
import PerformanceImg from "../../assets/img/performance_wheel2.png";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow_upward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 (1).svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_downward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";
const cards = [
  {
    imgSrc: handImg,
    title: "Responsive",
    text: "I emphasize my ability to create responsive designs that adapt seamlessly across various devices and screen sizes.",
    imgBackground: "#ffc400ff",
  },
  {
    imgSrc: PointerImg,
    title: "User interface",
    text: "design focuses on creating visually appealing and intuitive layouts that enhance user interactions.",
    imgBackground: "rgb(91, 81, 216)",
  },
  {
    imgSrc: PerformanceImg,
    title: "Performance",
    text: "Improving website loading speed and efficiency through best coding practices.",
    imgBackground: "#22c48a",
  },
];
const Skills = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="skill"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div
        className="cards"
        style={{
          margin: "40px 80px",
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "repeat(3 , 300px)",
          gridTemplateRows: "1fr",
          gridGap: "20px",
        }}
      >
        {cards.map(({ imgSrc, title, imgBackground, text }) => (
          <Card
            key={title}
            imgSrc={imgSrc}
            header={title}
            imgBackground={imgBackground}
          >
            <p>{text}</p>
          </Card>
        ))}
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
          onClick={() => scrollToSection("about")}
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
          onClick={() => scrollToSection("contact")}
        />
      </div>
    </div>
  );
};

export default Skills;
