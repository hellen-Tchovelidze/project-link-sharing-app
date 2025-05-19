"use client";

import { useEffect } from "react";
import { UseLinkStore, UseProfileStore } from "../../Common/Store/store";
import Input from "../__atoms/Input";
import Label from "../__atoms/Label";
import PhotoUpload from "../__molecules/PhotoUpload";
import PhoneSimulator from "../__molecules/PhoneSimulator/PhoneSimulator";

export default function ProfileForm() {
  const { firstName, lastName, email, photo, setField, setPhoto } =
    UseProfileStore();

  const { showLinks } = UseLinkStore();

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
    <div className="flex justify-evenly w-full gap-2">
      <PhoneSimulator
        firstName={firstName}
        lastName={lastName}
        photo={photo}
        email={email}
        ShowLinks={showLinks}
      />
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

        <div className="space-y-5 bg-[#FAFAFA] p-6 rounded-xl">
          <div className=" flex justify-between items-center max-[660px]:flex-col max-[660px]:items-start">
            <Label>First name*</Label>
            <Input
              type="text"
              value={firstName}
              maxLength={10}
              onChange={(e) => setField("firstName", e.target.value)}
              placeholder="e.g. John"
              required
            />
          </div>

          <div className=" flex justify-between items-center max-[660px]:flex-col max-[660px]:items-start">
            <Label>Last name*</Label>
            <Input
              type="text"
              maxLength={10}
              value={lastName}
              onChange={(e) => setField("lastName", e.target.value)}
              placeholder="e.g. Appleseed"
              required
            />
          </div>

          <div className=" flex justify-between items-center max-[660px]:flex-col max-[660px]:items-start">
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              maxLength={25}
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
    </div>
  );
}
