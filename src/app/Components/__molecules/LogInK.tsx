"use client";

import React, { useEffect, useState } from "react";
import ButtonK from "../__atoms/ButtonK";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import SignUpK from "./SignUpK";
import { BlockK, LinkK, MailK } from "@/app/Common/Images/Auth";

type FormValues = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().required("can't be empty!").email("doesn't match"),
  password: yup
    .string()
    .required("Please enter your password.")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "doesn't match"
    ),
});

const LogInK = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
  }, []);

  const onSubmit = (data: FormValues) => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      alert("ანგარიში არ არსებობს!");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (
      data.email === parsedUser.email &&
      data.password === parsedUser.password
    ) {
      alert("თქვენ წარმატებით გაიარეთ რეგისტრაცია!");
      localStorage.setItem("loggedIn", "true");
    } else {
      alert("სცადეთ ხელახლა!");
    }
  };

  if (showSignUp) {
    return <SignUpK />;
  }

  return (
    <div className="sm:w-[100%] sm:h-[100vh] bg-[#F2F3F5] flex sm:items-center p-5 sm:justify-center w-[100%] h-[100vh]">
      <div className="w-[390px] sm:h-[440px]  sm:mt-[-40px] flex flex-col items-center sm:justify-between bg-[#F2F3F5]">
        <div className="w-[100%] pl-1 flex sm:items-center sm:justify-center gap-1 mb-12">
          <LinkK />
          <h1 className="font-[inter] font-semibold text-3xl">devlinks</h1>
        </div>

        <div className="sm:w-[390px] w-[100%] sm:h-[380px] h-[350px] flex flex-col justify-between sm:bg-amber-50 rounded-[10px] sm:p-6">
          <div>
            <h1 className="font-[inter] font-extrabold text-[30px] mb-1">
              Login
            </h1>
            <p className="text-gray-400 text-[12px]">
              Add your details below to get back into the app
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-[205px] flex flex-col justify-between mt-5"
          >
            <div className="flex flex-col relative">
              <label
                className="font-medium text-[12px] text-gray-500 cursor-pointer mb-1"
                htmlFor="email"
              >
                Email address:
              </label>
              <input
                className={`w-[100%] h-[40px] text-[15px] border-1 border-gray-200 rounded-[7px] pl-[30px] ${
                  errors.email
                    ? "outline-red-500 outline-[1.5px] bg-white"
                    : "outline-gray-500 outline-[1.5px]"
                }`}
                type="text"
                id="email"
                placeholder="e.g. alex@email.com"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-700 text-[10px] font-[inter] absolute top-[33px] right-2">
                  {errors.email.message}
                </span>
              )}
              <MailK />
            </div>

            <div className="flex flex-col relative">
              <label
                className="font-medium text-[12px] text-gray-500 cursor-pointer mb-1"
                htmlFor="password"
              >
                Create password:
              </label>
              <input
                className={`w-[100%] h-[40px] text-[15px] border-1 border-gray-200 rounded-[7px] pl-[30px] ${
                  errors.password
                    ? "outline-red-500 outline-[1.5px] bg-white"
                    : "outline-gray-500 outline-[1.5px]"
                }`}
                type="password"
                id="password"
                placeholder="At least 8 characters"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-700 text-[10px] font-[inter] absolute top-[33px] right-2">
                  {errors.password.message}
                </span>
              )}
              <BlockK />
            </div>

            <ButtonK type="submit" button="Login" />
          </form>

          <p className="text-gray-400 w-[100%] text-[13px] cursor-pointer sm:gap-2 sm:ml-14 text-center mt-4 flex flex-col sm:flex-row">
            Don’t have an account?
            <span
              onClick={(console.log("done"), () => setShowSignUp(true))}
              className="text-purple-700 text-center font-semibold"
            >
              Create account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInK;
