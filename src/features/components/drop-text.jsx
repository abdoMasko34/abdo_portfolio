import React, { useEffect, useRef, useState } from "react";

const DropText = ({ translateDir = null, children }) => {
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
    <h2
      className={
        translateDir === "right"
          ? `drop-text-right ${isVisible ? "visible-right" : ""}`
          : translateDir === "left"
          ? `drop-text-left ${isVisible ? "visible-right" : ""}`
          : `drop-text ${isVisible ? "visible" : ""}`
      }
      ref={ref}
    >
      {children}
    </h2>
  );
};

export { DropText };
