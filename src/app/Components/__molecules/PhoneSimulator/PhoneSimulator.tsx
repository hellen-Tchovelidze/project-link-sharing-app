"use client";

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
import { PhoneSimulatorProps, User } from "@/app/Common/Types/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UseLinkStore } from "@/app/Common/Store/store";

const PhoneSimulator: React.FC<PhoneSimulatorProps> = ({
  firstName,
  lastName,
  photo,
  email,
}) => {
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

  const getLink = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return "https://github.com";
      case "YouTube":
        return "https://www.youtube.com/";
      case "LinkedIn":
        return "https://www.linkedin.com/";
      case "Facebook":
        return "https://www.facebook.com/";
      case "Frontend Mentor":
        return "https://www.frontendmentor.io/";
      case "Dev.to":
        return "https://dev.to/";
      case "Codewars":
        return "https://www.codewars.com/";
      case "freeCodeCamp":
        return "https://www.freecodecamp.org/";
    }
  };

  const params = usePathname();
  const { showLinks } = UseLinkStore();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div
      className={`flex ${
        params === `/preview/${user?.id}`
          ? "w-[300px] p-0 rounded-[55px]"
          : "w-[560px] p-[24px]"
      } ${
        params === "/profile" ? "justify-end max-[1010px]:hidden" : "justify-start"
      } items-start bg-white rounded-[12px] relative mt-[40px] ${
        params === `/preview/${user?.id}` ? "block" : "max-[950px]:hidden"
      } `}
    >
      <PhoneSimulatorPhoneSimulatorSVG />

      <div
        className={`absolute ${
          params === `/preview/${user?.id}` && "right-[0px] !left-0 top-[100px]"
        } ${params === "/profile" && "top-[103px] right-[180px]"} ${
          params === "/main" && "top-[103px] left-[180px]"
        } flex flex-col items-center gap-4`}
      >
        {photo && (
          <Image
            src={photo}
            alt="Profile"
            width={200}
            height={100}
            className={`!max-w-[100px] !h-[100px] rounded-full object-cover absolute left-[] ${
              params === `/preview/${user?.id}` ? "-top-[40px]" : "top-[-20px]"
            } `}
          />
        )}
        <div
          className={`absolute flex gap-2 ${
            params === `/preview/${user?.id}` ? "top-[74px]" : "top-[100px]"
          }`}
        >
          <p className="text-black font-semibold text-[16px]">{firstName}</p>
          <p className="text-black font-semibold text-[16px]">{lastName}</p>
        </div>
        <p
          className={`text-black absolute  ${
            params === `/preview/${user?.id}` ? "top-[100px]" : "top-[130px]"
          }`}
        >
          {" "}
          {email}{" "}
        </p>
      </div>

      <div
        className={`absolute flex flex-col w-[237px] top-[304px] gap-[24px] ${
          params === `/preview/${user?.id}` && "!left-[30px] !top-[272px]"
        } ${params === "/profile" && "right-[59px]"} ${
          params === "/main" && "left-[59px]"
        }`}
      >
        {showLinks.map((item, i) => (
          <Link key={i} href={`${getLink(item.platform)}`} target="_blank">
            <div
              key={i}
              className={`rounded-[8px] flex px-[16px] py-[11px] justify-between items-center cursor-pointer ${getPlatformBgColor(
                item.platform
              )}`}
            >
              <div className="flex gap-[8px]">
                {getPlatformIcon(item.platform)}
                <p className="text-[12px] text-[#FFF]">{item.platform}</p>
              </div>
              <ArrowRight />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhoneSimulator;
