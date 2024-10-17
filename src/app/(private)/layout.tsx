import React, { ReactNode } from "react"
import { ModeToggle } from "@/components/ui/mode-toggle"
import {
  Panel,
  PanelItem
} from "@/components/layout/panel"
import {
  NavBar,
  NavBarItem
} from "@/components/layout/navbar"
import Navigation from "@/components/layout/navigation"
import Logo from "@/components/logo"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {

  return (
    <div className="w-screen h-screen">
      <NavBar>
        <NavBarItem>
          <Logo color="white" size={25} />
        </NavBarItem>
        <NavBarItem>
          <ModeToggle />
        </NavBarItem>
      </NavBar>
      <Panel>
        <PanelItem>
          <Navigation />
        </PanelItem>
      </Panel>
      <div className="w-screen h-[calc(100vh-6.5rem)] px-28 py-12 overflow-y-auto">
        {children}
      </div>
    </div>
  )
}