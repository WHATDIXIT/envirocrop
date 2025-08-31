import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        hero: "bg-cyber text-primary-foreground shadow-lg hover-glow border border-primary/30 font-semibold tracking-wide",
        primary: "bg-primary text-primary-foreground shadow hover-glow",
        secondary: "bg-electric text-secondary-foreground shadow-sm hover-glow border border-secondary/30",
        accent: "bg-matrix text-accent-foreground shadow-sm hover-glow border border-accent/30",
        ghost: "text-foreground glass hover-glow border border-border/30",
        glass: "glass text-foreground shadow-sm hover-glow border border-primary/20",
        emergency: "bg-destructive text-destructive-foreground shadow hover-glow animate-pulse-glow",
        warning: "bg-warning text-warning-foreground shadow hover-glow"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-14 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const FuturisticButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
FuturisticButton.displayName = "FuturisticButton"

export { FuturisticButton, buttonVariants }