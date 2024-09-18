import React, { useEffect, useState } from "react";
import "../../style/Typography/style.css"; // Import the separate CSS file for styling

// Define the messages array outside the component
const messages = ["Welcome To Our ", "E-Store"];

const CharAnimation = () => {
  // Initialize state variables
  const [displayedText, setDisplayedText] = useState("");
  const [animationIndex, setAnimationIndex] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  // Use useEffect to control the character animation
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setDisplayedText((prevText) => {
        if (animationIndex >= messages[messageIndex].length) {
          // Reset animationIndex and move to the next message
          setAnimationIndex(0);
          setMessageIndex((prevMessageIndex) =>
            prevMessageIndex === messages.length - 1 ? 0 : prevMessageIndex + 1
          );
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
  }, [animationIndex, messageIndex]); // Only include dynamic dependencies

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
