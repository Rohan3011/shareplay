"use client"

import React from "react"

import { siteConfig } from "@/config/site"

function SiteSidebar() {
  return (
    <aside className="group z-10 h-full bg-black transition-width duration-150 ease-linear">
      <ul className="flex flex-col items-end pt-10">
        {siteConfig.mainNav.map((item) => (
          <li className="m-1 flex w-full cursor-pointer items-center px-4  py-2 rounded-sm hover:bg-foreground hover:text-background">
            <div className="p-1 group-hover:mr-4">
              <item.icon />
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SiteSidebar
