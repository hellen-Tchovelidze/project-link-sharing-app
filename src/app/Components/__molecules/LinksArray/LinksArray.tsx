"use client";

import React, { useEffect, useRef, useState } from "react";
import ArrowDown from "@/app/Common/Images/ArrowDown";
import CodeWarsIcon from "@/app/Common/Images/CodeWarsIcon";
import DevIcon from "@/app/Common/Images/DevIcon";
import FaceBookIcon from "@/app/Common/Images/FaceBookIcon";
import FreeCodeCampIcon from "@/app/Common/Images/FreeCodeCampIcon";
import FrontEndMentorIcon from "@/app/Common/Images/FrontEndMentorIcon";
import GithubIcon from "@/app/Common/Images/GithubIcon";
import LinkedinIcon from "@/app/Common/Images/LinkedinIcon";
import LinksIcon from "@/app/Common/Images/LinksIcon";
import LinksSvg from "@/app/Common/Images/LinksSvg";
import YoutubeIcon from "@/app/Common/Images/YoutubeIcon";
import { UseLinkStore } from "@/app/Common/Store/store";

const LinksArray = () => {
  const { linksArr, updateLink, deleteLink } = UseLinkStore();
  const [showModal, setShowModal] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const modalPlatforms = [
    { icon: <GithubIcon />, text: "GitHub" },
    { icon: <YoutubeIcon />, text: "YouTube" },
    { icon: <LinkedinIcon />, text: "LinkedIn" },
    { icon: <FaceBookIcon />, text: "Facebook" },
    { icon: <FrontEndMentorIcon />, text: "Frontend Mentor" },
    { icon: <DevIcon />, text: "Dev.to" },
    { icon: <CodeWarsIcon />, text: "Codewars" },
    { icon: <FreeCodeCampIcon />, text: "freeCodeCamp" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowModal(null);
      }
    };

    if (showModal !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  const openModal = (id: number) => {
    setShowModal((prev) => (prev === id ? null : id));
  };

  const handleInputChange = (id: number, value: string) => {
    const updated = linksArr.find((item) => item.id === id);
    if (updated) updateLink({ ...updated, link: value });
  };

  const handlePlatformSelect = (id: number, platform: string) => {
    const updated = linksArr.find((item) => item.id === id);
    if (updated) updateLink({ ...updated, platform });
    setShowModal(null);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return <GithubIcon />;
      case "YouTube":
        return <YoutubeIcon />;
      case "LinkedIn":
        return <LinkedinIcon />;
      case "Facebook":
        return <FaceBookIcon />;
      case "Frontend Mentor":
        return <FrontEndMentorIcon />;
      case "Dev.to":
        return <DevIcon />;
      case "Codewars":
        return <CodeWarsIcon />;
      case "freeCodeCamp":
        return <FreeCodeCampIcon />;
      default:
        return null;
    }
  };

  return (
    <div>
      {linksArr.map((item) => (
        <div
          key={item.id}
          className="p-[20px] flex flex-col cursor-pointer gap-[12px]"
        >
          <div className="flex justify-between">
            <div className="flex gap-[8px] items-center">
              <LinksIcon />
              <p className="text-[16px] text-[#737373] font-bold">
                Link #{item.id}
              </p>
            </div>
            <p
              onClick={() => deleteLink(item.id)}
              className="text-[16px] text-[#737373] cursor-pointer"
            >
              Remove
            </p>
          </div>

          <div className="flex flex-col text-[#333]">
            <p className="text-[12px] mb-1">Platform</p>
            <div
              onClick={() => openModal(item.id)}
              className="py-[12px] px-[16px] border rounded-[8px] border-[#D9D9D9] bg-[#FFF] flex justify-between items-center relative"
            >
              <div className="flex gap-[8px] items-center">
                {getPlatformIcon(item.platform)}
                <p className="text-[16px] text-[#333]">{item.platform}</p>
              </div>
              <div
                className={`transition-transform duration-500 ${
                  showModal === item.id ? "-rotate-180" : "rotate-0"
                }`}
              >
                <ArrowDown />
              </div>

              {showModal === item.id && (
                <div
                  ref={modalRef}
                  className="py-[12px] px-[16px] border border-[#D9D9D9] rounded-[8px] flex flex-col absolute top-[60px] left-0 w-full z-50 bg-white max-h-[300px] overflow-y-auto"
                >
                  {modalPlatforms.map((p, i) => (
                    <div
                      key={i}
                      onClick={() => handlePlatformSelect(item.id, p.text)}
                      className={`border-b border-[#D9D9D9] pb-[12px] mt-[12px] flex gap-[8px] items-center cursor-pointer ${
                        p.text === "freeCodeCamp" ? "!border-0 !pb-0" : ""
                      } ${p.text === "GitHub" ? "!mt-0" : ""}`}
                    >
                      {p.icon}
                      <p className="text-[16px] text-[#333]">{p.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[12px] mb-1">Link</p>
            <div className="py-[12px] px-[16px] border rounded-[8px] border-[#D9D9D9] bg-[#FFF] flex items-center gap-[8px]">
              <LinksSvg fill="#737373" className="w-[16px] h-[16px]" />
              <input
                value={item.link}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
                type="text"
                className="text-[16px] text-[#333] outline-0 w-full"
                placeholder="e.g. https://www.github.com/johnappleseed"
              />
              {item.error && (
                <p className="text-[12px] text-[#FF3939] w-[110px] max-[595px]:w-[115px] max-[550px]:w-[120px] max-[515px]:w-[130px] max-[451px]:w-[150px] max-[396px]:w-[170px]">
                  Can’t be empty
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksArray;
