import ChatWindow from "@/components/chat-window"
import SiteSidebar from "@/components/site-sidebar"

interface PartyLayoutProps {
  children: React.ReactNode
}

export default function PartyLayout({ children }: PartyLayoutProps) {
  return (
    <>
      <section className="w-full border-l">{children}</section>
      <section className="m-4 hidden w-full max-w-[280px] rounded-sm border-2 border-tertiary">
        <ChatWindow />
      </section>
    </>
  )
}
