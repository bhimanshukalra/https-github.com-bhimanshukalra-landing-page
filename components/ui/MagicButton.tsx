import React from "react";

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  onTap?: () => void;
  className?: string;
};

const MagicButton = ({
  title,
  icon,
  position,
  onTap,
  className,
}: MagicButtonProps) => {
  return (
    <button
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10"
      onClick={onTap}
      name={title || ""}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-yellow-300 px-7 text-sm font-medium backdrop-blur-3xl gap-2 ${className}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
