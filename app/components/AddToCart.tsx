"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => {
          console.log("Clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default AddToCart;