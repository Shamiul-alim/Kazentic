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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Login failed");
      }

      // Save tokens in localStorage (or cookies)
      localStorage.setItem("access_token", result.access_token);
      localStorage.setItem("refresh_token", result.refresh_token);
      localStorage.setItem("role", result.role);

      // Redirect after login
      router.push("/email");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-[#FFFFFF]">
      {/*left section*/}
      <div className="flex-1 flex flex-col justify-start pl-6 pr-6 lg:pr-0 py-[1.375rem] w-full lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1400px] ">
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
          <form onSubmit={handleSubmit(onSubmit)} className="mt-16 space-y-3">
            {/*Email*/}
            <div>
              <Label>
                <span className="text-red-500 mr-1">*</span>Email
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
                <p className="text-red-500 text-sm font-medium tracking-tighter mt-1">
                  {String(errors.email.message)}
                </p>
              )}
            </div>

            {/*Password*/}
            <div className="pt-2">
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
                <p className="text-red-500 text-sm font-medium tracking-tighter mt-1">
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
      <div className="hidden lg:flex lg:flex-1  justify-start py-[1.375rem] px-6 ">
        <div>
          {/* Dashboard Image Placeholder */}
          <div className=" rounded-xl overflow-hidden ">
            <Image
              src="/assets/dashboard.svg"
              alt="Dashboard Preview"
              className="rounded-xl "
              width={1000}
              height={946}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
