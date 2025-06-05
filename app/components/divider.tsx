import React from "react";

type DividerProps = {
  orientacion: string;
  width: string;
  height: string;
};

export default function Divider({ orientacion, width, height }: DividerProps) {
  const widthClass =
    {
      "1px": "w-[1px]",
      full: "w-full",
      "1/2": "w-1/2",
    }[width] || "";

  const heightClass =
    {
      "1px": "h-[1px]",
      full: "h-full",
      "24": "h-24",
    }[height] || "";

  return (
    <div
      className={`bg-black ${
        orientacion === "vertical"
          ? `${widthClass} ${heightClass}`
          : `${heightClass} ${widthClass}`
      }`}
    ></div>
  );
}
