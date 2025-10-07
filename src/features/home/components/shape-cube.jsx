import Cube from "../../components/cube";
import { DropText } from "../../components/drop-text";

const ShapeCube = () => {
  return (
    <div className="shape">
      <div
        className="top"
        style={{
          position: "absolute",
          top: "13%",
          left: "58%",
        }}
      >
        <DropText>
          <Cube
            sx={{
              "--width": "60px",
              "--height": "60px",
              "--depth": "60px",
            }}
          />
        </DropText>
      </div>
      <div className="bottom">
        <div
          className="left"
          style={{
            position: "absolute",
            top: "50%",
            left: "34%",
          }}
        >
          <DropText translateDir="left">
            <Cube
              sx={{
                "--width": "60px",
                "--height": "60px",
                "--depth": "60px",
              }}
            />
          </DropText>
        </div>
        <div
          className="right"
          style={{
            position: "absolute",
            top: "52%",
            left: "78%",
          }}
        >
          <DropText translateDir={"right"}>
            <Cube
              sx={{
                "--width": "60px",
                "--height": "60px",
                "--depth": "60px",
              }}
            />
          </DropText>
        </div>
      </div>
    </div>
  );
};

export default ShapeCube;
