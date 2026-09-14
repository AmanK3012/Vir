import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#8CC63F] text-white hover:bg-black hover:text-white shadow-sm hover:shadow-md",
        outline:
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-black",
        outlineDark:
          "border-2 border-[#8CC63F] text-[#8CC63F] bg-transparent hover:bg-[#8CC63F] hover:text-white",
        ghost:
          "text-[#1a1a1a] hover:bg-[#f9fafb]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-11 px-9 py-2.5 text-sm font-semibold tracking-wider gap-2 shadow-xs",
        sm: "h-10 px-8 py-2 text-xs font-semibold tracking-wider gap-1.5 shadow-xs",
        lg: "h-12 px-11 py-3 text-sm font-bold tracking-wider gap-2.5 shadow-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
