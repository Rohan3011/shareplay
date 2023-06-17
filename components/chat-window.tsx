"use client"

import React, { useState } from "react"
import { Send as SendIcon } from "lucide-react"

import { Button } from "./ui/button"

function ChatWindow() {
  const [textInput, setTextInput] = useState("")

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTextInput(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(textInput)
  }

  return (
    <div className="flex h-full flex-col">
      <div>
        <h1>Chat Window</h1>
      </div>
      <div className=" flex-1 border-y border-tertiary"></div>
      <form onSubmit={(e) => handleSubmit} className="flex">
        <input onChange={handleInput} type="text" value={textInput} />
        <Button variant="primary" type="submit">
          <SendIcon />
        </Button>
      </form>
    </div>
  )
}

export default ChatWindow
