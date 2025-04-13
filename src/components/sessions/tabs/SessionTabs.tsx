import { useMemo } from "react";
import { Session, useSessionStore } from "../../../store/sessionStore";
import SessionTab from "./SessionTab";

export default function SessionsTabs() {
  const { sessions } = useSessionStore();

  const tabs: Session[] = useMemo(
    () => [
      {
        name: "Dashboard",
        id: "dashboard",
        isOpen: true,
      },
      ...sessions,
    ],
    [sessions]
  );

  const openSessions = tabs.filter((tab) => tab.isOpen);

  return (
    <nav
      role="tablist"
      aria-label="Session tabs"
      className="flex border-b border-gray-300"
    >
      {openSessions.map((session) => (
        <SessionTab key={session.id} sessionTab={session} />
      ))}
    </nav>
  );
}
