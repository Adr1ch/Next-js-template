"use client";

const setClassesUtils = (obj: Record<string, boolean>) => {
  return Object.entries(obj).reduce((accumulator, [key, value], index) => {
    if (Boolean(value)) return accumulator + " " + key;
    return accumulator;
  }, "");
};

export default function Button({
  children,
  theme = "default",
  onClick,
  type = "button",
  size = "md",
}: {
  children: React.ReactNode;
  type?: "submit" | "button";
  theme?: "default" | "deep" | "purple" | "potato" | "oceano" | "pearino";
  onClick?: () => void;
  size?: "md" | "lg";
}) {
  const btnClasses = {
    "bg-slate-200 hover:bg-slate-300 text-slate-950": theme === "default",
    "bg-slate-900 hover:bg-slate-700 text-white": theme === "deep",
    "bg-purple-700 hover:bg-purple-800 text-slate-50": theme === "purple",
    "bg-red-600 hover:bg-red-700 text-slate-50": theme === "potato",
    "bg-gradient-oceano": theme === "oceano",
    "bg-gradient-pearino": theme === "pearino",
    "h-[40px]": size === "md",
    "h-[45px]": size === "lg",
  };
  return (
    <button
      type={type}
      className={
        "inline-flex items-center px-[15px] py-[5px] font-semibold  transition ease-in-out rounded-lg " +
        setClassesUtils(btnClasses)
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
