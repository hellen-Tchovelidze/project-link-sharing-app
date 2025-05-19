"use client";

import { UseLinkStore, UseProfileStore } from "@/app/Common/Store/store";
import PhoneSimulator from "@/app/Components/__molecules/PhoneSimulator/PhoneSimulator";
import React from "react";

const page = () => {
  const { firstName, lastName, email, photo } = UseProfileStore();
  const { showLinks } = UseLinkStore();

  
  return (
    <>
      <div className="w-full h-[357px] bg-[#633CFF] absolute top-0 left-0 -z-10 rounded-b-[32px] max-[700px]:hidden"></div>
      <div className=" flex justify-center items-center ">
        <PhoneSimulator
          email={email}
          firstName={firstName}
          lastName={lastName}
          photo={photo}
          ShowLinks={showLinks}
        />
      </div>
    </>
  );
};

export default page;
