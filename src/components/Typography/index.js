import React, { useEffect, useState } from "react";
import "../../style/Typography/style.css"; // Import the separate CSS file for styling

const CharAnimation = () => {
  // Define an array of messages to display in the animation
  const messages = ["Welcome To Our ", "E-Store"];

  // Initialize state variables
  const [displayedText, setDisplayedText] = useState("");
  const [animationIndex, setAnimationIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  // Use useEffect to control the character animation
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setDisplayedText((prevText) => {
        if (animationIndex >= messages[messageIndex].length) {
          setAnimationIndex(0);
          if (messageIndex === messages.length - 1) {
            setMessageIndex(0);
          } else {
            setMessageIndex(messageIndex + 1);
          }
          return "";
        }
        const nextChar = messages[messageIndex].charAt(animationIndex);
        setAnimationIndex(animationIndex + 1);
        return prevText + nextChar;
      });
    }, 200); // Adjust the interval as needed for a slower animation

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(animationInterval);
    };
  }, [animationIndex, messageIndex, messages]);

  // JSX for rendering the character animation
  return (
    <div className="char-animation">
      <div className="message-container">
        {displayedText.split("").map((char, index) => (
          <span
            key={index}
            className={char === "E" ? "color-change" : "message-text"}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CharAnimation;
