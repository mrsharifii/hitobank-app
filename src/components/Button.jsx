import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`mt-5 py-4 px-6 bg-blue-gradient font-poppins rounded-full font-medium text-[18px] text-primary hover:shadow-lg hover:shadow-cyan-300/50 outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
