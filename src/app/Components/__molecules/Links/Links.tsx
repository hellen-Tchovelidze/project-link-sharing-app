"use client";

import React, { useState } from "react";
import EmptyLinks from "../EmptyLinks/EmptyLinks";
import LinksArray from "../LinksArray/LinksArray";

const Links = () => {
  const [linksArr, setLinksArr] = useState([{ id: 1, platform: "", link: "" }]);

  const addNewLink = () => {
    if(linksArr.length >= 5) return console.log('u already got 5')
      const lastId = linksArr[linksArr.length - 1]?.id || 0;
    const newLink = { id: lastId + 1, platform: "", link: "" };
    setLinksArr([...linksArr, newLink]);
  };

//   console.log(linksArr.length, "asdcasc");

  return (
    <div className="p-[20px] bg-white flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[40px]">
        <div>
          <p className="text-[#333] text-[32px] font-bold">
            Customize your links
          </p>
          <p className="text-[#737373] text-[16px] font-normal">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>

        <button
          onClick={() => addNewLink()}
          className="text-[#633CFF] texxt-[16px] font-semibold w-[539px] px-[27px] py-[11px] flex items-center justify-center border border-[#633CFF] rounded-[8px] hover:bg-[#EFEBFF] cursor-pointer duration-300 "
        >
          + Add new link
        </button>
      </div>

      <div className="min-h-[385px]">
        {linksArr.length > 0 ? (
          <LinksArray linksArr={linksArr} setLinksArr={setLinksArr} />
        ) : (
          <EmptyLinks />
        )}
      </div>

      <div className="bg-white py-[24px] w-full flex justify-end border-t border-[#D9D9D9]">
        <div className="w-[91px] h-[46px] bg-[#633CFF] flex justify-center items-center rounded-[8px] cursor-pointer">
          <p className="text-[16px] font-semibold text-white">Save</p>
        </div>
      </div>
    </div>
  );
};

export default Links;
