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
}: {
  children: React.ReactNode;
  theme?: "default" | "purple" | "potato";
  onClick?: () => void;
}) {
  const btnClasses = {
    "bg-slate-200 hover:bg-slate-300 text-slate-950": theme === "default",
    "bg-purple-700 hover:bg-purple-800 text-slate-50": theme === "purple",
    "bg-red-600 hover:bg-red-700 text-slate-50": theme === "potato",
  };
  return (
    <button
      className={
        "inline-flex px-[25px] py-[10px] font-semibold  transition ease-in-out rounded-lg " +
        setClassesUtils(btnClasses)
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
