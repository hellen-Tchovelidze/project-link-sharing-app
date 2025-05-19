import ArrowRight from "@/app/Common/Images/ArrowRight";
import CodeWarsIcon from "@/app/Common/Images/CodeWarsIcon";
import DevIcon from "@/app/Common/Images/DevIcon";
import FaceBookIcon from "@/app/Common/Images/FaceBookIcon";
import FreeCodeCampIcon from "@/app/Common/Images/FreeCodeCampIcon";
import FrontEndMentorIcon from "@/app/Common/Images/FrontEndMentorIcon";
import GithubIcon from "@/app/Common/Images/GithubIcon";
import LinkedinIcon from "@/app/Common/Images/LinkedinIcon";
import PhoneSimulatorPhoneSimulatorSVG from "@/app/Common/Images/PhoneSimulatorPhoneSimulatorSVG";
import YoutubeIcon from "@/app/Common/Images/YoutubeIcon";
import { PhoneSimulatorProps } from "@/app/Common/Types/types";
import React from "react";
import Image from "next/image";

const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({ ShowLinks, firstName, lastName, photo, email }) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return <GithubIcon fill={"#FFF"} />;
      case "YouTube":
        return <YoutubeIcon fill={"#FFF"} />;
      case "LinkedIn":
        return <LinkedinIcon fill={"#FFF"} />;
      case "Facebook":
        return <FaceBookIcon fill={"#FFF"} />;
      case "Frontend Mentor":
        return <FrontEndMentorIcon fill={"#FFF"} />;
      case "Dev.to":
        return <DevIcon fill={"#FFF"} />;
      case "Codewars":
        return <CodeWarsIcon fill={"#FFF"} />;
      case "freeCodeCamp":
        return <FreeCodeCampIcon fill={"#FFF"} />;
      default:
        return null;
    }
  };

  const getPlatformBgColor = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return "bg-[#1A1A1A] text-white";
      case "YouTube":
        return "bg-[#EE3939] text-white";
      case "LinkedIn":
        return "bg-[#2D68FF] text-white";
      case "Facebook":
        return "bg-[#2D68FF] text-white";
      case "Frontend Mentor":
        return "bg-[#1A1A1A] text-white";
      case "Dev.to":
        return "bg-[#333] text-white";
      case "Codewars":
        return "bg-[#8A1A50] text-white";
      case "freeCodeCamp":
        return "bg-[#302267] text-white";
    }
  };

  return (
    <div className="w-[560px] p-[24px] flex items-start justify-start bg-white rounded-[12px] relative mt-[40px] max-[950px]:hidden">
      <PhoneSimulatorPhoneSimulatorSVG />
     
      <div className="absolute top-[100px] left-[50px] flex flex-col items-center gap-4">
        {photo && (
          <Image
            src={photo}
            alt="Profile"
            width={80}
            height={80}
            className="w-[100px] h-[100px] rounded-full object-cover absolute top-[-20px] left-19 "
          />
        )}
        <p className="text-black font-semibold text-[16px]  absolute top-[100px]">{firstName} {lastName}</p>
        <p  className="text-black  "> {email} </p>
      </div>

      <div className="absolute flex flex-col w-[237px] left-[59px] top-[304px] gap-[24px]">
        {ShowLinks.map((item, i) => (
          <div
            key={i}
            className={`rounded-[8px] flex px-[16px] py-[11px] justify-between items-center ${getPlatformBgColor(item.platform)}`}
          >
            <div className="flex gap-[8px]">
              {getPlatformIcon(item.platform)}
              <p className="text-[12px] text-[#FFF]">{item.platform}</p>
            </div>
            <ArrowRight />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneSimulator;
