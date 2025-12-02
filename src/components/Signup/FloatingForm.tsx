import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

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
      <div className="bg-white p-6 rounded-lg w-[80%] max-w-2xl h-[100vh] overflow-y-auto relative hide-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-blue-100  text-blue-600 text-[1.6rem] font-normal flex justify-center text-center items-center pb-1"
        >
          &times;
        </button>
        <div className="flex flex-col justify-center items-center mt-4">
          <img
            className=" flex justify-center w-[3.8rem] h-[3.8rem]"
            src="/assets/frame.png"
          ></img>
          <h2 className="text-[1.25rem]font-semibold text-center  text-[#191F38] leading-[2.125rem]">
            Claim Organization Ownership
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
          {/*Search*/}
          <div className="flex flex-row  gap-4 ">
            {/* Search Input */}
            <div className="flex items-center border border-[#E5E5E5] rounded-lg">
              <img src="/assets/search.svg" className="w-9 h-6 pl-2"></img>
              <input
                type="text"
                placeholder="Search your workspaces through email"
                className="w-[25rem] md:w-[30rem] h-[2.188rem] py-1 pb-2 px-4 border-none rounded-lg focus:outline-none hover:bg-gray-100"
              />
            </div>

            {/* Search Button */}
            <button className="bg-[rgb(65,87,254)] text-[#FFFFFF] font-medium text-[0.875rem] py-1 px-6 rounded-lg hover:bg-blue-700 transition duration-300 ml-auto">
              Search
            </button>
          </div>
          {/* First / Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="font-medium text-[#191F38] text-[0.881]">
                First Name
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="w-full h-[2.188rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
              />
              {errors.firstName && (
                <p className="text-red-500">
                  {String(errors.firstName.message)}
                </p>
              )}
            </div>

            <div>
              <label className="font-medium text-[#191F38] text-[0.881]">
                Last Name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full h-[2.188rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
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
              <label className="font-medium text-[#191F38] text-[0.881]">
                Organization Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                className="w-full h-[2.188rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
              />
              {errors.email && (
                <p className="text-red-500">{String(errors.email.message)}</p>
              )}
            </div>

            <div>
              <label className="font-medium text-[#191F38] text-[0.881]">
                Phone No.
              </label>
              <div className="flex gap-3">
                <select
                  {...register("code")}
                  className=" h-[2.188rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100 pr-1"
                >
                  <option value="+880">
                    <span className="fi fi-bd"></span> +880
                  </option>
                </select>

                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                  placeholder=""
                  className="w-full h-[2.188rem] mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
                />
                {errors.phone && (
                  <p className="text-red-500">{String(errors.phone.message)}</p>
                )}
              </div>
            </div>
          </div>
          {/*Description*/}
          <div>
            <label className="font-medium text-[#191F38] text-[0.881]">
              Description
            </label>
            <textarea
              rows={3}
              className="w-full  mt-1 border-[0.063rem] bg-[#FFFFFF] border-[#E5E9EB] rounded-lg px-2 py-2 outline-none placeholder:text-[0.9rem] 
                    hover:bg-gray-100"
            />
          </div>

          <div>
            <label className="font-medium text-[#191F38] text-[0.881]">
              Required Action
            </label>
            <div className="relative">
              <select
                className=" bg-gray-100 w-full border border-gray-200  rounded-lg px-2 py-1  mt-1  outline-none 
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
              <img
                src="/assets/more.svg"
                className="w-6 h-6 absolute right-2 top-2 "
              ></img>
            </div>
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
