import { useState, useEffect } from "react";
import { Text } from "@chakra-ui/react";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, currentIndex));
      currentIndex++;
      if (currentIndex > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <Text
      fontSize={{ base: "lg", md: "4xl" }}
      top={{ base: "auto", md: "50%" }}
      fontWeight={{ base: "bold", md: "bold" }}
      paddingLeft={{ base: '0', md:'0'}}
      textAlign="center"
      whiteSpace="nowrap"
      // make excess text to go to next line
      overflow={{ base: "visible", md: "visible" }}
      display={{ base: "block", md: "block" }}
      verticalAlign="bottom"
      _after={{
        content: "'|'",
        marginLeft: "-0.1em",
        marginRight: "0.5em",
        animation: "typing 1s steps(1) infinite",
      }}
    >
      {displayedText}
   
    </Text>
  );
};

export default TypingEffect;
