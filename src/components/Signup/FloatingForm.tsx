import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";

interface FloatingFormProps {
  onClose: () => void;
}

const FloatingForm: React.FC<FloatingFormProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (errors == null || Object.keys(errors).length === 0) {
      console.log("Form Data: ", data);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex  justify-center  items-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-[#FFFFFF] p-6 rounded-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] h-[100vh] overflow-y-auto relative hide-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-blue-100  text-blue-600 text-[1.6rem] font-normal flex justify-center text-center items-center pb-1"
        >
          &times;
        </button>
        <div className="flex flex-col justify-center items-center mt-4">
          <Image
            alt="icon"
            width={60.8}
            height={60.8}
            className=" flex justify-center"
            src="/assets/frame.png"
          />
          <h2 className="text-[1.25rem] font-semibold text-center  text-[#191F38] leading-[2.125rem]">
            Claim Organization Ownership
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
          {/*Search*/}
          <div className="flex flex-row gap-4">
            <div className="flex items-center border border-[#E5E5E5] rounded-lg flex-1">
              <Image
                src="/assets/search.svg"
                className=" pl-2"
                alt="icon"
                width={36}
                height={36}
              />
              <input
                type="text"
                placeholder="Search your workspaces through email"
                className="w-full h-[2.188rem] text-[0.875rem] font-medium tracking-tight py-1 px-4 border-none rounded-lg focus:outline-none hover:bg-gray-100"
              />
            </div>
            <button className="bg-[#4157fe] text-[#FFFFFF] font-medium text-[0.875rem] py-1 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>
          {/* First / Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>First Name</Label>
              <Input
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-500">
                  {String(errors.firstName.message)}
                </p>
              )}
            </div>

            <div>
              <Label>Last Name</Label>
              <Input
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && (
                <p className="text-red-500">
                  {String(errors.lastName.message)}
                </p>
              )}
            </div>
          </div>

          {/*Organization Email/ Phone Number*/}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Organization Email</Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{String(errors.email.message)}</p>
              )}
            </div>

            {/* Mobile number */}
            <div>
              <Label>Phone No.</Label>
              <div className="flex gap-3">
                <select
                  {...register("code")}
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

                <Input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  placeholder="1757778981"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500">{String(errors.phone.message)}</p>
              )}
            </div>
          </div>
          {/*Description*/}
          <div>
            <Label>Description</Label>
            <textarea
              rows={3}
              className="w-full  mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
            />
          </div>

          <div>
            <Label>Required Action</Label>
            <div className="relative">
              <select
                className=" bg-gray-100 w-full border border-gray-200  rounded-lg px-2 py-2  mt-1  outline-none 
                    hover:bg-gray-100 text-sm font-medium text-gray-600 cursor-pointer appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select required action
                </option>
                <option value="action1">Action 1</option>
                <option value="action2">Action 2</option>
                <option value="action3">Action 3</option>
              </select>
              <Image
                src="/assets/more.svg"
                className=" absolute right-2 top-2 "
                alt="icon"
                width={24}
                height={24}
              ></Image>
            </div>
          </div>

          {/* Upload picture */}
          <div className="">
            <Label>Upload a picture</Label>
            <div className="flex flex-row items-center  gap-2 mb-3 mt-3">
              <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#F2F9FE]">
                <Image
                  alt="icon"
                  width={20}
                  height={20}
                  src="/assets/upload.svg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-[#191F38] text-[0.75rem] leading-[1.25rem] ">
                  Drag or{" "}
                  <span className="text-[#4157FE] cursor-pointer">upload</span>{" "}
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
                  {...register("picture", {
                    required: "Picture is required",
                  })}
                  className="hidden"
                />
              </div>
            </div>
            {errors.picture && (
              <p className="text-red-500">{String(errors.picture.message)}</p>
            )}
          </div>
          {/*Line break */}
          <div className="w-full h-[0.1rem] bg-gray-200"></div>
          {/*Button */}
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className=" bg-[#EBEBEB] 
           font-medium text-[0.875rem] border border-[#EBEBEB] hover:bg-blue-600 hover:text-white transition duration-300 text-[#4157FE] px-4 py-1 rounded-lg mt-4"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" bg-[#4157FE] text-[0.875rem] hover:bg-blue-700 transition duration-300 text-[#FFFFFF] px-4 py-1 rounded-lg mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FloatingForm;
