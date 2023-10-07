"use client";
import React from "react";

const Test = () => {
  const testFunction = () => {
    console.log("THIS IS A TEST");
  };
  return (
    <div>
      <button type="button" onClick={testFunction}>
        Test
      </button>
    </div>
  );
};

export default Test;
