import React from "react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { MoveRight } from "lucide-react"

export default function Theme() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8">
      <div className="w-[550px] flex flex-col items-center justify-center text-center gap-3">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-50">Switch Between Dark and Light Mode</h1>
        <p className="text-neutral-500 dark:text-neutral-200">Customize your visual experience by switching between dark and light mode. Choose the theme that best suits your environment and preferences, providing eye comfort and an optimal interface for any situation.</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="uppercase px-4 py-1 bg-emerald-800 dark:text-emerald-500 text-white rounded-2xl italic">
          customize!!
        </p>
        <MoveRight size={25} className="animate-bounce" />
        <ModeToggle />
      </div>
    </div>
  )
}