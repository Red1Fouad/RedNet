import { LucideIcon } from "lucide-react";
import React from "react";

const Button = ({
  children,
  type,
  icon,
  onClick,
}: {
  onClick?: () => void;
  children?: string;
  icon: React.ReactNode;
  type?: string;
}) => {
  const className = type
    ? "flex items-center gap-2 p-1  hover:bg-accent rounded-full cursor-pointer"
    : "flex items-center gap-2 bg-primary py-1 px-4 font-semibold hover:bg-primary/80 rounded-full cursor-pointer";
  return (
    <button className={className} onClick={onClick}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
