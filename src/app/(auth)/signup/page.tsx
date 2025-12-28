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
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("Personal");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const getRoleFromTab = (tab: string) => {
    if (tab === "Team") return "team";
    if (tab === "Organization") return "organization";
    return "personal";
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        phone: data.phone,
        email: data.email,
        password: data.password,

        teamName: activeTab === "Team" ? data.teamname : null,
        organizationName:
          activeTab === "Organization" ? data.organizationname : null,

        role: getRoleFromTab(activeTab),

        picture: data.picture?.[0]?.name || null,
      };

      console.log("Payload →", payload);

      const res = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Signup failed");
      }

      router.push("/signin");
    } catch (error: any) {
      console.error("Signup error:", error);
      alert(error.message);
    }
  };

  // const onSubmit: SubmitHandler<FieldValues> = (data) => {
  //   console.log(data);
  //   if (
  //     !methods.formState.errors == null ||
  //     Object.keys(methods.formState.errors).length === 0
  //   ) {
  //     router.push("/email");
  //   }
  // };
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab);
    methods.clearErrors();
  };
  const toggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full flex bg-[#FFFFFF]">
      {/*left section*/}
      <div className="flex-1 flex flex-col justify-start pl-6 pr-6 lg:pr-0 py-[1.375rem] w-full lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] ">
        {/* Logo */}
        <div className="items-center mb-10 cursor-pointer">
          <Image
            src="/assets/Homelogo.svg"
            alt="Kazentic Logo"
            className="w-[9rem]"
            width={144}
            height={48}
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
            {["Personal", "Team", "Organization"].map((t) => (
              <button
                key={t}
                onClick={() => handleTabSwitch(t)}
                className={`px-3 py-1 flex items-center  gap-[0.5rem] rounded-md border transition shadow-sm shadow-[#0000000D] 
                          ${
                            activeTab === t
                              ? "border-[#4157FE26]  bg-[#F2F9FE]"
                              : "border-[#EBEBEB] text-[#191F38]"
                          }
                        `}
              >
                <Image
                  src={`/assets/${activeTab === t ? `${t}B` : t}.svg`}
                  alt={`${t} icon`}
                  width={20}
                  height={20}
                  className="w-4 lg:w-5"
                />
                <span
                  className={`font-medium text-xs sm:text-sm   ${
                    activeTab === t ? "text-[#4157FE]" : "text-[#191F38]"
                  }`}
                >
                  {t}
                </span>
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="mt-4 transition-all duration-500 ease-in-out overflow-x-hidden overflow-y-auto hide-scrollbar max-h-[48rem]">
            <FormProvider {...methods}>
              <form
                className="mt-2 space-y-6"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                {/* Team Form */}
                {activeTab === "Team" && (
                  <div>
                    {/*Team Name*/}

                    <Label>Team Name</Label>
                    <Input
                      {...methods.register("teamname", {
                        required: "Team Name is required",
                      })}
                      placeholder="eg. XYZ Inc."
                    />
                    {methods.formState.errors.teamname && (
                      <p className="text-red-500">
                        {String(methods.formState.errors.teamname.message)}
                      </p>
                    )}
                  </div>
                )}
                {/* Organization Form */}
                {activeTab === "Organization" && (
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
                      <Image
                        className=" flex justify-center"
                        src="/assets/frame.png"
                        alt="Claim Ownership"
                        width={20}
                        height={20}
                      />
                    </button>
                    {/* Floating Form*/}
                    {isFormVisible && <FloatingForm onClose={toggleForm} />}
                    {/*Organization Name*/}
                    <div className="mt-4">
                      <Label>Organization Name</Label>
                      <Input
                        {...methods.register("organizationname", {
                          required: "Organization Name is required",
                        })}
                        placeholder="eg. XYZ Inc."
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
                    <Label>First Name</Label>
                    <Input
                      {...methods.register("firstName", {
                        required: "First name is required",
                      })}
                      placeholder="John"
                    />
                    {methods.formState.errors.firstName && (
                      <p className="text-red-500">
                        {String(methods.formState.errors.firstName.message)}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input
                      {...methods.register("lastName", {
                        required: "Last name is required",
                      })}
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
                  <Label>Email</Label>
                  <Input
                    {...methods.register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                        message: "Invalid email format",
                      },
                    })}
                    placeholder="eg. xyz@gmail.com "
                  />
                  {methods.formState.errors.email && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.email.message)}
                    </p>
                  )}
                </div>

                {/* Username */}
                <div>
                  <Label>UserName</Label>
                  <Input
                    {...methods.register("username", {
                      required: "Username is required",
                    })}
                    placeholder="John"
                  />
                  {methods.formState.errors.username && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.username.message)}
                    </p>
                  )}
                </div>

                {/* Mobile number */}
                <div>
                  <Label>Mobail No.</Label>
                  <div className="flex gap-3">
                    <div
                      {...methods.register("code")}
                      className="h-[2.516rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 hover:bg-gray-100 flex flex-row gap-1 items-center"
                    >
                      <Image
                        width={18}
                        height={18}
                        alt="icon"
                        src="/assets/bd.svg"
                      />
                      <span className="text-xs font-medium leading-5 tracking-tighter">
                        +880
                      </span>
                      <ChevronDown className="w-6 h-6 text-[#191F38] flex shrink-0 pr-2" />
                    </div>

                    <Input
                      {...methods.register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      placeholder="1757778981"
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
                  <Label>Password</Label>
                  <Input
                    type="password"
                    {...methods.register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    placeholder="Must be of at least 8 characters"
                  />
                  {methods.formState.errors.password && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.password.message)}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <Label>Confirm Password</Label>
                  <Input
                    type="password"
                    {...methods.register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value: any) =>
                        value === watch("password") || "Passwords don't match",
                    })}
                    placeholder="Re-enter your password"
                  />
                  {methods.formState.errors.confirmPassword && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.confirmPassword.message)}
                    </p>
                  )}
                </div>

                {/* Upload picture */}
                <div className="">
                  <Label>Upload a picture</Label>
                  <div className="flex flex-row items-center  gap-2 mb-3 mt-3">
                    <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#F2F9FE]">
                      <Image
                        src="/assets/upload.svg"
                        alt="icon"
                        width={20}
                        height={20}
                      />
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
                        className="bg-[#F2F9FE] text-[#4157FE] font-medium text-[0.75rem] border border-[#DBE9FF]  py-1 px-3 rounded-md cursor-pointer hover:bg-blue-300 transition duration-300 shadow-sm shadow-[#1E293B1F]"
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
                <div className="space-y-2">
                  {/* Checkbox */}
                  <label className="flex items-center gap-2 text-gray-800 text-[0.875rem] font-medium tracking-tighter">
                    <input
                      type="checkbox"
                      {...methods.register("terms", {
                        required:
                          "You must agree to the terms and privacy policy",
                      })}
                      className="w-4 h-4 cursor-pointer outline-none"
                    />
                    I agree to the{" "}
                    <span className="text-[#4157FE] cursor-pointer">
                      Terms & Privacy
                    </span>
                  </label>
                  {methods.formState.errors.terms && (
                    <p className="text-red-500">
                      {String(methods.formState.errors.terms.message)}
                    </p>
                  )}

                  {/* Submit Button */}
                  <Button type="submit" variant="private">
                    Join Space
                  </Button>
                  {/* Footer */}
                  <p className=" flex text-center font-medium text-[0.875rem] text-[#191F38]">
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
              </form>
            </FormProvider>
          </div>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="hidden lg:flex lg:flex-1  justify-start py-[1.375rem] px-6 ">
        <div>
          {/* Dashboard Image Placeholder */}
          <div className="rounded-xl overflow-hidden ">
            <Image
              src="/assets/dashboard.svg"
              alt="Dashboard Preview"
              className="rounded-xl"
              width={1000}
              height={946}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
