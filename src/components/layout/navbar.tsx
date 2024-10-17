'use client'

import React, { HTMLAttributes, ReactNode } from "react"

interface NavBarProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode }

export function NavBar({ children, ...props }: NavBarProps) {
  return <div className={`${props.className} w-full h-14 flex items-center justify-between px-8 gap-5 bg-rose-800 dark:bg-rose-950`} {...props}>{children}</div>
}

export function NavBarItem({ children, ...props }: NavBarProps) {
  return <div className={`${props.className} flex items-center gap-3 select-none`} {...props}>{children}</div>
}