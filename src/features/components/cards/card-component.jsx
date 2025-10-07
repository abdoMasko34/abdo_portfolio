import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow_forward_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg";

const StyledHeading = styled.h1`
  font-size: 1.5rem;
  color: #222;
  font-weight: 700;
`;

const StyledPaper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 78vh;
  color: #000;
  padding: 10px 8px;
  transition: transform 0.5s ease-in-out 0.1s;
  &:hover {
    transform: scale(1.05);
    border-radius: 10px;
    box-shadow: 1px 1px 4px 10px rgb(91, 81, 216, 0.03);
    background-color: #f8f8f8ff;
  }
`;
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
const DropCard = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility for re-triggering
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`drop-card ${isVisible ? "visible-card" : ""}`} ref={ref}>
      {children}
    </div>
  );
};

const Card = ({ header, imgSrc, imgBackground, children }) => {
  return (
    <StyledPaper>
      <DropCard>
        <div
          style={{
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            backgroundColor: imgBackground ? imgBackground : "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={imgSrc} width="100%" height="100%" alt="cards" />
        </div>
      </DropCard>
      <StyledHeading>{header}</StyledHeading>
      <div
        style={{
          margin: "1rem",
          opacity: "0.6",
        }}
      >
        {children}
      </div>
      <StyledButton>
        Read More <ArrowIcon style={{ color: "#fff", margin: "0 5px" }} />
      </StyledButton>
    </StyledPaper>
  );
};
export default Card;
