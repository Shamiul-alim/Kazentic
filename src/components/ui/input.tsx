import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[2.518rem] w-full rounded-lg mt-1  border-[0.063rem] border-[#E5E9EB] border-input bg-[#FFFFFF] px-2 py-2 pb-3 placeholder:text-[0.9rem] placeholder:font-medium placeholder:tracking-tight placeholder:text-[#6F6F6F] outline-none hover:bg-gray-100",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
