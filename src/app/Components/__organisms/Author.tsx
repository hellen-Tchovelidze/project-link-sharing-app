"use client";

import React, { useState } from "react";
import SignUpK from "../__molecules/SignUpK";
import LogInK from "../__molecules/LogInK";

const Author = () => {
  const [show, setShow] = useState(false);
  return (
    <>{show ? <SignUpK setShow={setShow} /> : <LogInK setShow={setShow} />}</>
  );
};

export default Author;
