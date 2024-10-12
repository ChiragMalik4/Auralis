import React from "react";

const VerticalWord = ({ word, classname, letterspace }) => {
  return (
    <div className={` ${classname} flex flex-col items-center`}>
      {word.split("").map((letter, index) => (
        <span key={index} className={`${letterspace || "my-1"}`}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default VerticalWord;
