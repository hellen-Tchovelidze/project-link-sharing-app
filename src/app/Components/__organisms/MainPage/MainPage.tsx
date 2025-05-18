'use client'

import React, { useState } from "react";
import PhoneSimulator from "../../__molecules/PhoneSimulator/PhoneSimulator";
import Links from "../../__molecules/Links/Links";
import { LinkItem } from "@/app/Common/Types/types";

const MainPage = () => {
  const [linksArr, setLinksArr] = useState([
    { id: 1, platform: "GitHub", link: "",error: false  },
  ]);
  const [ShowLinks,setShowLinks] = useState<LinkItem[]>([])

  console.log(linksArr)
  return (
    <div className="flex justify-center">
      <PhoneSimulator ShowLinks={ShowLinks}/>
      <Links  linksArr={linksArr} setLinksArr ={setLinksArr} setShowLinks={setShowLinks}/>
    </div>
  );
};

export default MainPage;
