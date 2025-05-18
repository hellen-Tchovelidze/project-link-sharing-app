"use client";

import { useEffect } from "react";
import { useProfileStore } from "../../Common/Store/store";
import Input from "../__atoms/Input";
import Label from "../__atoms/Label";
import PhotoUpload from "../__molecules/PhotoUpload";

export default function profileForm() {
  const { firstName, lastName, email, photo, setField, setPhoto } =
    useProfileStore();

  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");
    const storedEmail = localStorage.getItem("email");
    const storedPhoto = localStorage.getItem("photo");

    if (storedFirstName) setField("firstName", storedFirstName);
    if (storedLastName) setField("lastName", storedLastName);
    if (storedEmail) setField("email", storedEmail);
    if (storedPhoto) setPhoto(storedPhoto);
  }, [setField, setPhoto]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    if (photo) localStorage.setItem("photo", photo);
    alert("information saved!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[808px]  w-full mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl space-y-8 "
    >
      <div>
        <h2 className="text-3xl font-bold text-start text-gray-900">
          Profile Details
        </h2>
        <p className="text-[#737373] text-[16px] mt-0.5">
          Add your details to create a personal touch to your profile.
        </p>
      </div>

      <PhotoUpload />

      <div className="space-y-5 bg-[#FAFAFA] p-6 rounded-xl ">
        <div className=" flex justify-between items-center ">
          <Label>First name*</Label>
          <Input
            type="text"
            value={firstName}
            onChange={(e) => setField("firstName", e.target.value)}
            placeholder="e.g. John"
            required
          />
        </div>

        <div className=" flex justify-between items-center ">
          <Label>Last name*</Label>
          <Input
            type="text"
            value={lastName}
            onChange={(e) => setField("lastName", e.target.value)}
            placeholder="e.g. Appleseed"
            required
          />
        </div>

        <div className=" flex justify-between items-center ">
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setField("email", e.target.value)}
            placeholder="e.g. email@example.com"
            required
          />
        </div>
      </div>

      <div className=" flex justify-end items-end">
        <button
          type="submit"
          className="w-[50px]  bg-[#633CFF] hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 shadow-md flex justify-center items-center "
        >
          save
        </button>
      </div>
    </form>
  );
}
