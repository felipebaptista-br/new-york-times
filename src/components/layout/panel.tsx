import React, { HTMLAttributes, ReactNode } from "react"

interface PanelProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode }

export function Panel({ children, ...props }: PanelProps) {
  return (
    <div
      className={`${props.className} w-full h-12 flex items-center justify-between px-8 shadow-md dark:bg-neutral-900 dark:shadow-none`}
      {...props}
    >
      {children}
    </div>
  )
}

export function PanelItem({ children, ...props }: PanelProps) {
  return <div className={`${props.className}`} {...props}>{children}</div>
}