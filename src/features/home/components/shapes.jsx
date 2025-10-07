import Cube from "../../components/cube";
import { DropText } from "../../components/drop-text";
import ShapeBall from "./shape-ball";
import ShapeCube from "./shape-cube";

const Shapes = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        zIndex: 10,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-183px",
          right: "35px",
          zIndex: 11,
        }}
      >
        <ShapeCube />
      </div>
      <div
        style={{
          position: "absolute",
          top: "-32px",
          left: "-36px",
          zIndex: 11,
        }}
      >
        <Cube
          sx={{
            "--width": "100px",
            "--height": "50px",
            "--depth": "50px",
            "--primaryColor": "#FA812F",
            "--secondaryColor": "#FAB12F",
            "--thirdlyColor": "#f5a875ff",
            "--borderColor": "#FA812F",
          }}
        />
      </div>
      <ShapeBall
        sx={{ position: "absolute", top: "-50%", right: "5%", zIndex: 11 }}
      />
      <ShapeBall
        sx={{
          position: "absolute",
          top: "10%",
          left: "20%",
          zIndex: 11,
          "--ball-width": "30px",
          "--ball-height": "30px",
          "--bgColor": "#bfc4dbff",
          "--circle-gradient": `radial-gradient(circle,rgba(246, 247, 247, 1) 21%, rgba(104, 104, 104, 1) 100%)`,
        }}
      />
      <Cube
        sx={{
          zIndex: 10,
          "--width": "250px",
          "--height": "50px",
          "--depth": "250px",
          "--primaryColor": "#1B3C53",
          "--secondaryColor": "#234C6A",
          "--thirdlyColor": "#456882",
          "--borderColor": "#234C6A",
          boxShadow: "-99px -113px 30px 14px rgb(0, -2, 0, 0.2)",
        }}
      />
      <div className="ball-shadow"></div>
    </div>
  );
};

export default Shapes;
