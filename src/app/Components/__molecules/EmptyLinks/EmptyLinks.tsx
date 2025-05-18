import EmptyLinkSVG from "@/app/Common/Images/EmptyLinkSVG";
import React from "react";

const EmptyLinks = () => {
  return (
      <div className="p-[20px] flex flex-col items-center justify-between bg-[#FAFAFA] rounded-[12px]">
        <div className="flex flex-col justify-between items-center gap-[40px]">
          <EmptyLinkSVG />

          <div className="flex flex-col max-w-[488px] gap-[24px] items-center justify-center">
            <p className="text-[32px] text-[#333] max-[425px]:text-[24px]">Let’s get you started</p>
            <p className="text-[16px] text-[#737373] text-center">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
      </div>
  );
};

export default EmptyLinks;
