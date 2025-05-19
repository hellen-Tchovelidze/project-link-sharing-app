import PhoneSimulatorPhoneSimulatorSVG from "@/app/Common/Images/PhoneSimulatorPhoneSimulatorSVG";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full h-[357px] bg-blue-500 absolute top-0 left-0 -z-10 rounded-b-[32px] max-[700px]:hidden"></div>
        <div className=" flex justify-center items-center">
          <PhoneSimulatorPhoneSimulatorSVG />
        </div>
    </>
  );
};

export default page;
