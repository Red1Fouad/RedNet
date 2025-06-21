import { LucideIcon } from "lucide-react";
import React from "react";

const Button = ({
  children,
  icon,
  onClick,
}: {
  onClick?: () => void;
  children: string;
  icon: React.ReactNode;
}) => {
  return (
    <button
      className="flex items-center gap-2 bg-primary py-1 px-4 font-semibold hover:bg-primary/80 rounded-full cursor-pointer"
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
