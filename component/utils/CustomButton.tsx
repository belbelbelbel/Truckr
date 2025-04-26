import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4  rounded-md   transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
