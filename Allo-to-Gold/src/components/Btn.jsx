import React from "react";
import { Upload, MousePointerClick } from "lucide-react";
const Button = ({ text }) => {
  return (
    <>
      <div className="cursor-pointer mt-2 bg-[#111] text-white py-3 rounded-md hover:bg-black/90 transtion-all shadow-md hover: duration-150 active:scale-98 hover:-translate-y-0.5  group group/arrow">
        <div className="relative overflow-hidden px-4">
          <p className="flex justify-center gap-2 group text-lg items-center group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {" "}
            {text}{" "}
            <span>
              {/* <Upload className=" transition ease-out" /> */}
            </span>
          </p>
          <p className="inset-0 absolute flex justify-center gap-2 group text-lg items-center  top-13 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/arrow:delay-200 ">
            {" "}
            Click Me{" "}
            <span>
              <MousePointerClick  />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Button;