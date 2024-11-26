"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const errorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      {" "}
      <div>The error is </div>
      <button className="btn btn-primary" onClick={() => reset()}>
        Reset
      </button>
    </>
  );
};

export default errorPage;
