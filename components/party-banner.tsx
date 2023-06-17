import React from "react"

import { Button } from "./ui/button"

function PartyBanner() {
  return (
    <section className="flex flex-col gap-2 h-52 w-full rounded-sm bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-200 via-red-400 to-red-900 py-4 px-10">
      <div className="flex justify-between">
        <h5 className="font-light text-sm">
          PARTY by <span className="font-semibold">Rohan Kamble</span>
        </h5>
        <div className="live-status">
          <span className="text-sm font-semibold text-red-500">LIVE</span>
          <span className="text-sm text-slate-800 ">
            32 PEOPLE LISTENING
          </span>{" "}
        </div>
      </div>

      <div className=" flex justify-between">
        <h1 className="text-7xl font-extrabold">SharePlay</h1>
        <div id="users">
          <span>@</span>
          <span>@</span>
          <span>@</span>
          <span>@</span>
        </div>
      </div>

      <div className="flex justify-between">
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
        <Button variant="primary">Invite Friends</Button>
      </div>
    </section>
  )
}

export default PartyBanner
