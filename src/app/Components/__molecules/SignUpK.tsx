"use client";

import ButtonK from "../__atoms/ButtonK";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { BlockK, LinkK, MailK } from "@/app/Common/Images/Auth";
import { useRouter } from "next/navigation";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

type LogInKProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
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

const SignUpK = ({ setShow }: LogInKProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const router = useRouter()

  const onSubmit = async(data: FormValues) => {
    const email = data.email
    const password = data.password
    const confirmPassword = data.confirmPassword
    if(!email || !password || !confirmPassword) return console.log('fields are required')

      const res = await fetch('http://localhost:4000/auth/sign-up' , {
        method:"POST",
        headers: {'Content-Type':"Application/json"},
        body: JSON.stringify({email,password,confirmPassword})
      })
      const Data = res.json()
      if(res.status === 201) {
        router.push('/')
      }
  };

  return (
    <>
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

            <p
              onClick={() => setShow(false)}
              className="text-gray-400 text-[13px] sm:ml-16 text-center mt-3 cursor-pointer flex flex-col sm:flex-row "
            >
              Already have an account?
              <span className="text-purple-700"> Login</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpK;
