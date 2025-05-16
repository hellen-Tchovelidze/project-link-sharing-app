import React, { MouseEventHandler } from "react";

type Props = {
  button: string;
  type?: "button" | "submit" | "reset";
};

const ButtonK = ({ button, type }: Props) => {
  return (
    <>
      <button
        className="w-[100%] h-[40px] bg-[#633CFF] rounded-[7px] hover:shadow-[#633CFF40] shadow-2xl text-white cursor-pointer hover:bg-[#BEADFF] "
        type={type}
      >
        {button}
      </button>
    </>
  );
};

export default ButtonK;
