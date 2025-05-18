"use client";

import EyeSvg from "@/app/Common/Images/eyeSvg";
import LinksSvg from "@/app/Common/Images/LinksSvg";
import NavbarMainImg from "@/app/Common/Images/NavbarMainImg";
import ProfileSvg from "@/app/Common/Images/ProfileSvg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const path = usePathname();
    const router = useRouter()
  const [indicatorX, setIndicatorX] = useState(0);

  useEffect(() => {
    if (path === "/main") setIndicatorX(0);
    if (path === "/profile") setIndicatorX(1);
  }, [path]);

  return (
    <>
      <div
        className={`w-full p-6 ${
          path === "/" || path === "/preview" ? "hidden" : ""
        }`}
      >
        <div className="w-full pl-[24px] pr-[16px] py-4 bg-white max-[500px]:px-0">
          <div className="flex items-center justify-between">
            <Link href={"/main"}>
              <NavbarMainImg />
            </Link>

            <div className="relative flex items-center">
              <div
                className="absolute top-0 left-0 h-full w-1/2 bg-[#EFEBFF] rounded-[8px] transition-transform duration-500 ease-in-out z-0"
                style={{ transform: `translateX(${indicatorX * 100}%)` }}
              />

              <Link href="/main">
                <div className="group relative z-10 w-[200px] flex items-center justify-center px-[20px] py-[22px] gap-[8px] cursor-pointer max-[900px]:w-[74px]">
                  <LinksSvg
                    className={`group-hover:fill-[#633CFF]`}
                    fill={path === "/main" ? "#633CFF" : "#737373"}
                  />
                  <p
                    className={`text-[16px] font-semibold group-hover:text-[#633CFF] max-[900px]:hidden ${
                      path === "/main" ? "text-[#633CFF]" : "text-[#737373]"
                    }`}
                  >
                    Links
                  </p>
                </div>
              </Link>

              <Link href="/profile">
                <div className="group relative z-10 w-[200px] flex items-center justify-center px-[20px] py-[22px] gap-[8px] cursor-pointer max-[900px]:w-[74px]">
                  <ProfileSvg
                    className={`group-hover:fill-[#633CFF]`}
                    fill={path === "/profile" ? "#633CFF" : "#737373"}
                  />
                  <p
                    className={`text-[16px] font-semibold group-hover:text-[#633CFF] max-[900px]:hidden ${
                      path === "/profile" ? "text-[#633CFF]" : "text-[#737373]"
                    }`}
                  >
                    Profile Details
                  </p>
                </div>
              </Link>
            </div>

            <Link href={"/preview"}>
              <div className="px-[54px] py-[22px] border border-[#633CFF] rounded-[8px] cursor-pointer hover:bg-[#EFEBFF] duration-500 max-[900px]:px-[32px]">
                <p className="text-[#633CFF] text-[16px] font-semibold max-[900px]:hidden">
                  Preview
                </p>

                <EyeSvg/>
              </div>
            </Link>
          </div>
        </div>
      </div>

        {path === '/preview' &&
        <div className="w-full p-6 max-[700px]:p-0">
            <div className="w-full pl-[24px] pr-[16px] py-4 bg-white flex items-center justify-between rounded-[12px]">
                <div onClick={()=> router.back()} className="border border-[#633CFF] rounded-[8px] px-[54px] py-[22px] cursor-pointer max-[700px]:px-[27px] max-[700px]:py-[11px]">
                    <p className="text-[16px] text-[#633CFF] font-semibold">Back to Editor</p>
                </div>


                <div className="bg-[#633CFF] rounded-[8px] px-[54px] py-[22px] cursor-pointer max-[700px]:px-[27px] max-[700px]:py-[11px]">
                    <p className="text-[16px] text-white font-semibold">Share Link</p>
                </div>
            </div>
        </div>
        }
    </>
  );
};

export default Navbar;
