"use client";

import React, { useState } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import FloatingForm from "@/components/Signup/FloatingForm";

export default function Signup() {
  const methods = useForm<FieldValues>({
    mode: "onBlur",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;
  const [activeTab, setActiveTab] = useState("personal");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    if (
      !methods.formState.errors == null ||
      Object.keys(methods.formState.errors).length === 0
    ) {
      router.push('/email')
    }
  };
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
    methods.clearErrors();
  };
  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex bg-[#FFFFFF] ">
      {/*left section*/}
      <div className="lg:w-1/2 flex flex-col justify-start px-8 lg:px-8 py-8 w-full">
        {/* Logo */}
        <div className="items-center mb-10 cursor-pointer">
          <img
            src="/assets/logo.svg"
            alt="Kazentic Logo"
            className="w-[9rem]"
          />
        </div>

        <div className="">
          {/* Title */}
          <h2 className="text-[1.5rem] font-bold text-[#191F38] tracking-tighter leading-[1.5rem]">
            Join Kazentic
          </h2>
          <p className="mt-4 text-[0.875rem] font-medium text-[#6F6F6F]">
            Sign up and unlock the power of AI-driven productivity with Kazentic
          </p>

          <h4 className="text-[1rem] leading-[1.5rem] font-semibold text-[#191F38] mt-5">
            Your area of usage
          </h4>

          {/* Tabs */}
          <div className="flex gap-3 mt-5">
            {["personal", "team", "organization"].map((t) => (
              <button
                key={t}
                onClick={() => handleTabSwitch(t)}
                className={`px-3 py-1 flex items-center gap-[0.5rem] rounded-md border transition
                            shadow-sm 
                          ${
                            activeTab === t
                              ? "border-[#4157FE26]  bg-[#F2F9FE]"
                              : "border-[#EBEBEB] text-[#191F38]"
                          }
                        `}
              >
                <img
                  src={`/assets/${activeTab === t ? `${t}B` : t}.svg`}
                  alt={`${t} icon`}
                  className="w-5 h-5"
                />
                <span
                  className={`font-medium ${
                    activeTab === t ? "text-[#4157FE]" : "text-[#191F38]"
                  }`}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="mt-4 transition-all duration-500 ease-in-out overflow-x-hidden overflow-y-auto hide-scrollbar max-h-[29rem]">
            <FormProvider {...methods}>
              <form
                className="mt-2 space-y-6"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                {/* Team Form */}
                {activeTab === "team" && (
                  <div>
                    {/*Team Name*/}

                    <label className="font-medium text-[#191F38] text-[0.881]">
                      Team Name
                    </label>
                    <input
                      {...methods.register("teamname", {
                        required: "Team Name is required",
                      })}
                      placeholder="eg. XYZ Inc."
                      className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2  outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100 "
                    />
                    {methods.formState.errors.teamname && (
                      <p className="text-red-500">
                        {String(methods.formState.errors.teamname.message)}
                      </p>
                    )}
                  </div>
                )}
                {/* Organization Form */}
                {activeTab === "organization" && (
                  <div>
                    {/*Claim Ownership*/}
                    <button
                      type="button"
                      onClick={(e) => {
                        toggleForm();
                      }}
                      className="w-full flex justify-center items-center gap-2  bg-[#F8FAFC] border border-[#EBEBEB] text-[#4157FE] text-[0.875rem] leading-[1.25rem] font-medium rounded-lg px-2 py-2 mt-1 cursor-pointer "
                    >
                      <span>Claim Ownership</span>
                      <img
                        className=" flex justify-center w-5 h-5"
                        src="assets/frame.png"
                      ></img>
                    </button>
                    {/* Floating Form*/}
                    {isFormVisible && <FloatingForm onClose={toggleForm} />}
                    {/*Organization Name*/}
                    <div className="mt-4">
                      <label className="font-medium text-[#191F38] text-[0.881]">
                        Organization Name
                      </label>
                      <input
                        {...methods.register("organizationname", {
                          required: "Organization Name is required",
                        })}
                        placeholder="eg. XYZ Inc."
                        className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2  outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100 "
                      />
                      {methods.formState.errors.organizationname && (
                        <p className="text-red-500">
                          {String(
                            methods.formState.errors.organizationname.message
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                {/*Personal Form*/}
                {/* First / Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium text-[#191F38] text-[0.881]">
                      First Name
                    </label>
                    <input
                      {...methods.register("firstName", {
                        required: "First name is required",
                      })}
                      placeholder="John"
                      className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2  outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100 "
                    />
                    {methods.formState.errors.firstName && (
                      <p className="text-red-500">
                        {String(methods.formState.errors.firstName.message)}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="font-medium text-[#191F38] text-[0.881]">
                      Last Name
                    </label>
                    <input
                      {...methods.register("lastName", {
                        required: "Last name is required",
                      })}
                      className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100 "
                    />
                    {methods.formState.errors.lastName && (
                      <p className="text-red-500">
                        {String(methods.formState.errors.lastName.message)}
                      </p>
                    )}
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label className="font-medium text-[#191F38] text-[0.881]">
                    Email
                  </label>
                  <input
                    {...methods.register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                    placeholder="eg. xyz@gmail.com "
                    className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 pb-3 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100 "
                  />
                  {methods.formState.errors.email && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.email.message)}
                    </p>
                  )}
                </div>

                {/* Username */}
                <div>
                  <label className="font-medium text-[#191F38] text-[0.881]">
                    UserName
                  </label>
                  <input
                    {...methods.register("username", {
                      required: "Username is required",
                    })}
                    placeholder="John"
                    className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2  outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100 "
                  />
                  {methods.formState.errors.username && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.username.message)}
                    </p>
                  )}
                </div>

                {/* Mobile number */}
                <div>
                  <label className="font-medium text-[#191F38] text-[0.881]">
                    Mobail No.
                  </label>
                  <div className="flex gap-3">
                    <select
                      {...methods.register("code")}
                      className="h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100 pr-1"
                    >
                      <option
                        value="+880"
                        className="font-medium text-[0.75rem] leading-[1.25rem] "
                      >
                        +880
                      </option>
                    </select>

                    <input
                      {...methods.register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      placeholder="1757778981"
                      className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
                    />
                  </div>
                  {methods.formState.errors.phone && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.phone.message)}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="font-medium text-[#191F38] text-[0.881]">
                    Password
                  </label>
                  <input
                    type="password"
                    {...methods.register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    placeholder="Must be of at least 8 characters"
                    className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
                  />
                  {methods.formState.errors.password && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.password.message)}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="font-medium text-[#191F38] text-[0.881]">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    {...methods.register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value: any) =>
                        value === watch("password") || "Passwords don't match",
                    })}
                    placeholder="Re-enter your password"
                    className="w-full h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
                  />
                  {methods.formState.errors.confirmPassword && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.confirmPassword.message)}
                    </p>
                  )}
                </div>

                {/* Upload picture */}
                <div className="">
                  <label className="font-medium text-[#191F38] text-[0.881]">
                    Upload a picture
                  </label>
                  <div className="flex flex-row items-center  gap-2 mb-3 mt-3">
                    <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#F2F9FE]">
                      <img src="/assets/upload.svg" className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-[#191F38] text-[0.75rem] leading-[1.25rem] ">
                        Drag or{" "}
                        <span className="text-[#4157FE] cursor-pointer">
                          upload
                        </span>{" "}
                        the picture here
                      </p>
                      <p className="text-[#6F6F6F] text-[0.75rem] leading-[1.25rem]  ">
                        Max. 5MB | JPG, PNG
                      </p>
                    </div>
                    <div className="ml-auto">
                      <label
                        htmlFor="file-upload"
                        className="bg-[#F2F9FE] text-[#4157FE] font-medium text-[0.75rem] border border-[#DBE9FF]  py-1 px-3 rounded-lg cursor-pointer hover:bg-blue-300 transition duration-300 shadow-sm shadow-[#1E293B1F]"
                      >
                        Browse
                      </label>
                      <input
                        type="file"
                        id="file-upload"
                        {...methods.register("picture", {
                          required: "Picture is required",
                        })}
                        className="hidden"
                      />
                    </div>
                  </div>
                  {methods.formState.errors.picture && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.picture.message)}
                    </p>
                  )}
                </div>
              </form>
            </FormProvider>
          </div>

          {/* Checkbox */}
          <label className="flex items-center gap-2 mt-2 text-gray-800 text-[0.875rem] font-medium tracking-tighter">
            <input
              type="checkbox"
              {...methods.register("terms", {
                required: "You must agree to the terms and privacy policy",
              })}
              className="w-4 h-4 cursor-pointer outline-none"
            />
            I agree to the{" "}
            <span className="text-[#4157FE] cursor-pointer">
              Terms & Privacy
            </span>
            {methods.formState.errors.terms && (
              <p className="text-red-500">
                {String(methods.formState.errors.terms.message)}
              </p>
            )}
          </label>

          {/* Submit Button */}
          <button
            className="w-full bg-[#4157FE] hover:bg-blue-800 text-white font-medium py-2 rounded-lg translation duration-300 mt-3"
            type="submit"
            onClick={methods.handleSubmit(onSubmit)}
          >
            Join Space
          </button>

          {/* Footer */}
          <p className=" flex text-center font-medium text-[0.875rem] mt-2 text-[#191F38]">
            Already have an account?{" "}
            <span
              className="text-[#4157FE] cursor-pointer"
              onClick={() => {
                router.push("/signin");
              }}
            >
              Sign in
            </span>
          </p>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="hidden lg:flex w-1/2  items-center justify-center px-8 py-8">
        <div>
          {/* Dashboard Image Placeholder */}
          <div className="rounded-xl overflow-hidden ">
            <img
              src="/assets/dashboard.svg"
              alt="Dashboard Preview"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
