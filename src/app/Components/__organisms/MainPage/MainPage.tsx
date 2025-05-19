"use client";
import React from "react";
import PhoneSimulator from "../../__molecules/PhoneSimulator/PhoneSimulator";
import Links from "../../__molecules/Links/Links";
import { UseProfileStore } from "@/app/Common/Store/store";
import { UseLinkStore } from "@/app/Common/Store/store";

const MainPage = () => {
  const { firstName, lastName, email, photo } = UseProfileStore();
  const { showLinks } = UseLinkStore();

  return (
    <div className="flex justify-center">
      <PhoneSimulator
        ShowLinks={showLinks}
        firstName={firstName}
        lastName={lastName}
        photo={photo}
        email={email}
      />
      <Links />
    </div>
  );
};

export default MainPage;
