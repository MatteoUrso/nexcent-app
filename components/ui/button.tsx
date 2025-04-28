import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "text-lg leading-6 font-normal inline-flex items-center justify-center gap-x-2 rounded-sm whitespace-nowrap transition-colors disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary focus-visible:ring-d-grey focus-visible:ring-2 focus-visible:outline-none active:bg-shade-s2 disabled:bg-grey-blue disabled:text-silver",
        link: "bg-transparent text-primary hover:underline focus-visible:underline focus-visible:ring-d-grey focus-visible:ring-2 focus-visible:outline-none active:text-shade-s2 active:underline disabled:text-silver",
        ghost: "hover:bg-primary hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
