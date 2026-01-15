"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(children)) {
      const childProps = children.props as React.HTMLAttributes<HTMLElement>
      return React.cloneElement(children, {
        ...props,
        ...childProps,
        ref,
        className: cn(props.className, childProps.className),
      } as React.HTMLAttributes<HTMLElement> & { ref: React.Ref<HTMLElement> })
    }

    if (React.Children.count(children) > 1) {
      React.Children.only(null)
    }

    return null
  }
)

Slot.displayName = "Slot"
