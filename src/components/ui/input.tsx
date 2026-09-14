import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-sm text-[#1e293b] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#94a3b8] transition-all duration-200 focus-visible:outline-none focus-visible:border-[#8CC63F] focus-visible:ring-4 focus-visible:ring-[#8CC63F]/15 disabled:cursor-not-allowed disabled:opacity-50 font-[inherit] shadow-xs",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
