import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";


function GoToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const threshold = 300;
    const currentPosition = window.pageYOffset;
    setShowButton(currentPosition > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={handleClick}
      style={{ display: showButton ? "block" : "none" }}
      className="p-3 bg-green-primary rounded-full"
    >
        <FontAwesomeIcon icon={faAngleUp}  className="w-8 h-8 text-white"/>
    </button>
  );
}

export default GoToTopButton;
