import * as React from "react";

// Utility function to conditionally join class names
const classNames = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Variants configuration
const buttonVariants:any = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-white hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border-2 border-primary bg-background hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-xl px-3",
      lg: "h-12 rounded-xl px-8",
      xl: "h-16 rounded-xl px-10 text-base",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
};

// Function to get the class names based on variant and size
const getButtonClassNames = ({ variant, size, className }: ButtonProps): string => {
  return classNames(
    buttonVariants.base,
    buttonVariants.variants.variant[variant || buttonVariants.defaultVariants.variant],
    buttonVariants.variants.size[size || buttonVariants.defaultVariants.size],
    className
  );
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variants.variant;
  size?: keyof typeof buttonVariants.variants.size;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? "span" : "button";
    return (
      <Comp
        className={getButtonClassNames({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
