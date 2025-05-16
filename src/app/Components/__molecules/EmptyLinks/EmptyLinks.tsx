import EmptyLinkSVG from "@/app/Common/Images/EmptyLinkSVG";
import React from "react";

const EmptyLinks = () => {
  return (
    <div className="p-[20px] bg-white">
      <div>
        <p className="text-[#333] text-[32px] font-bold">
          Customize your links
        </p>
        <p className="text-[#737373] text-[16px] font-normal">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      <button className="text-[#633CFF] texxt-[16px] font-semibold w-[539px] px-[27px] py-[11px] flex items-center justify-center border border-[#633CFF] rounded-[8px] hover:bg-[#EFEBFF] cursor-pointer duration-300 ">
        + Add new link
      </button>

      <div className="p-[20px] flex flex-col items-center justify-between bg-[#FAFAFA] rounded-[12px]">
        <div className="flex flex-col justify-between items-center gap-[40px] w-full">
          <EmptyLinkSVG />

          <div className="flex flex-col w-[488px] gap-[24px] items-center justify-center">
            <p className="text-[32px] text-[#333] ">Let’s get you started</p>
            <p className="text-[16px] text-[#737373] text-center">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-[11px] w-full flex justify-end border-t border-[#D9D9D9]">
        <div className="w-[91px] h-[46px] bg-[#633CFF] flex justify-center items-center rounded-[8px]">
            <p className="text-[16px] font-semibold text-white">Save</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyLinks;
