import React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Component = "button",
  duration = 1,
  clockwise = true,
  ...props
}) => {
  return (
    <Component
      className={cn(
        "relative inline-flex overflow-hidden rounded-md p-[1px] focus:outline-none",
        containerClassName
      )}
      style={{
        willChange: "transform",
      }}
      {...props}
    >
      <motion.span
        className="absolute inset-0 z-0"
        animate={{
          rotate: clockwise ? 360 : -360,
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
          willChange: "transform",
        }}
      />
      <span
        className={cn(
          "relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md px-6 py-3 text-sm font-medium backdrop-blur-xl transition-all",
          className
        )}
      >
        {children}
      </span>
    </Component>
  )
}

