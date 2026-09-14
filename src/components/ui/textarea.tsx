import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[110px] w-full rounded-xl border border-[#cbd5e1] bg-white p-4 text-sm text-[#1e293b] ring-offset-background placeholder:text-[#94a3b8] transition-all duration-200 focus-visible:outline-none focus-visible:border-[#8CC63F] focus-visible:ring-4 focus-visible:ring-[#8CC63F]/15 disabled:cursor-not-allowed disabled:opacity-50 font-[inherit] shadow-xs leading-relaxed",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
