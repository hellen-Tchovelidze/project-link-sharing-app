"use client";

import { BlockK, LinkK, MailK } from "@/app/Common/Images";
import ButtonK from "../__atoms/ButtonK";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import LogInK from "./LogInK";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required!")
    .email("Invalid email format!")
    .matches(
      /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
      "Invalid email format!"
    ),
  password: yup
    .string()
    .required("Password is required!")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "Password must contain uppercase, lowercase, number and be 8+ characters"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password!"),
});

const SignUpK = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const [showHome, setShowHome] = useState(false);

  const onSubmit = (data: FormValues) => {
    const newUser = {
      email: data.email,
      password: data.password,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const emailAlreadyExists = existingUsers.some(
      (user: any) => user.email === newUser.email
    );

    if (emailAlreadyExists) {
      alert("This email is already registered.");
      return;
    }

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    setShowHome(true);
  };

  return (
    <>
      {!showHome ? (
        <LogInK />
      ) : (
        <div className="w-[100%] h-[100vh] bg-[#F2F3F5] p-5 flex sm:items-center sm:justify-center">
          <div className="w-[390px] h-[515px] flex flex-col sm:items-center sm:justify-between bg-[#F2F3F5]">
            <div className="w-[100%] flex sm:items-center sm:justify-center gap-1">
              <LinkK />
              <h1 className="font-[inter] font-semibold text-3xl">devlinks</h1>
            </div>

            <div className="sm:w-[390px] h-[450px] flex flex-col justify-between sm:bg-amber-50 rounded-[10px] sm:p-6 mt-7">
              <div>
                <h1 className="font-[inter] font-extrabold text-[30px] mb-1">
                  Create account
                </h1>
                <p className="text-gray-400 text-[12px]">
                  Let’s get you started sharing your links!
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="h-[295px] flex flex-col justify-between mt-5"
              >
                <div className="flex flex-col relative">
                  <label
                    className="font-medium text-[12px] text-gray-500 mb-1"
                    htmlFor="email"
                  >
                    Email address:
                  </label>
                  <input
                    className={`w-[100%] h-[40px] text-[15px] border-1 rounded-[7px] pl-[30px] bg-white ${
                      errors.email
                        ? "outline-red-500 outline-[1.5px] border-red-500"
                        : "outline-gray-500 outline-[1.5px]"
                    }`}
                    type="text"
                    id="email"
                    placeholder="e.g. alex@email.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <span className="text-red-700 text-[10px] absolute top-[33px] right-2">
                      {errors.email.message}
                    </span>
                  )}
                  <MailK />
                </div>

                <div className="flex flex-col relative">
                  <label
                    className="font-medium text-[12px] text-gray-500 mb-1"
                    htmlFor="password"
                  >
                    Create password:
                  </label>
                  <input
                    className={`w-[100%] h-[40px] text-[15px] border-1 rounded-[7px] pl-[30px] bg-white ${
                      errors.password
                        ? "outline-red-500 outline-[1.5px] border-red-500"
                        : "outline-gray-500 outline-[1.5px]"
                    }`}
                    type="password"
                    id="password"
                    placeholder="At least 8 characters"
                    {...register("password")}
                  />
                  {errors.password && (
                    <span className="text-red-700 text-[10px] absolute top-[33px] right-2">
                      {errors.password.message}
                    </span>
                  )}
                  <BlockK />
                </div>

                <div className="flex flex-col relative">
                  <label
                    className="font-medium text-[12px] text-gray-500 mb-1"
                    htmlFor="confirmPassword"
                  >
                    Confirm password:
                  </label>
                  <input
                    className={`w-[100%] h-[40px] text-[15px] border-1 rounded-[7px] pl-[30px] bg-white ${
                      errors.confirmPassword
                        ? "outline-red-500 outline-[1.5px] border-red-500"
                        : "outline-gray-500 outline-[1.5px]"
                    }`}
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-700 text-[10px] absolute top-[33px] right-2">
                      {errors.confirmPassword.message}
                    </span>
                  )}
                  <BlockK />
                </div>

                <p className="text-gray-400 sm:text-[12px] text-[10px]">
                  Password must contain at least 8 characters
                </p>

                <ButtonK type="submit" button="Create new account" />
              </form>

              <p className="text-gray-400 text-[13px] sm:ml-16 text-center mt-3 cursor-pointer flex flex-col sm:flex-row ">
                Already have an account?
                <span className="text-purple-700"> Login</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpK;
