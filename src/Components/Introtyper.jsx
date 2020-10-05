import React from "react";
import Typewriter from "typewriter-effect";
export default function Introtyper() {
  return (
    <Typewriter
      options={{
        strings: ["I love to code", "I love to write", "I love to dream"],
        autoStart: true,
        loop: true
      }}
    />
  );
}
