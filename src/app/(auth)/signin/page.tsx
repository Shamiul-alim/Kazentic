"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Image from "next/image";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    router.push("/email");
  };

  return (
    <div className="min-h-screen flex bg-[#FFFFFF]">
      {/*left section*/}
      <div className="lg:w-1/2 flex flex-col justify-start px-8 lg:px-8 py-8 w-full">
        {/* Logo */}
        <div className="items-center cursor-pointer">
          <Image
            src="/assets/Homelogo.svg"
            alt="Kazentic Logo"
            className="w-[9rem]"
            width={144}
            height={48}
          />
        </div>
        <div>
          {/*title*/}
          <h2 className="text-[1.5rem] font-bold text-[#191F38] tracking-tighter leading-[1.5rem] mt-10">
            Sign in to Your Workspace
          </h2>
          <p className="mt-4 text-[0.875rem] font-medium text-[#6F6F6F]">
            Login with your existing accounts
          </p>

          {/*Form*/}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-14 space-y-3">
            {/*Email*/}
            <div>
              <Label>
                <span className="text-red-500">*</span>Email
              </Label>
              <Input
                type="email"
                placeholder="eg. xyz@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            {/*Password*/}
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Must be of at least 8 characters"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="toggle-2"
                className="data-[state=checked]:bg-[#4157FE]"
                {...register("rememberMe")}
              />
              <span className="text-[#191F38] text-[0.875rem] font-medium">
                Remember me
              </span>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="private">
              Sign in
            </Button>

            {/* Extra Links */}
            <div className="flex justify-between text-[0.875rem] font-medium text-[#191F38] ">
              <p>
                Don’t have an account?{" "}
                <a
                  className="cursor-pointer text-[#4157FE]"
                  onClick={() => {
                    router.push("/signup");
                  }}
                >
                  Sign up
                </a>
              </p>
              <a className="text-[#4157FE] font-medium" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Right Visual Section */}
      <div className="hidden lg:flex w-1/2  items-center justify-center px-8 mt-8">
        <div>
          {/* Dashboard Image Placeholder */}
          <div className=" rounded-xl overflow-hidden ">
            <Image
              src="/assets/dashboard.svg"
              alt="Dashboard Preview"
              className="rounded-xl"
              width={688}
              height={946}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
