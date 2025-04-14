import { useMemo } from "react";
import { Session, useSessionStore } from "../../../store/sessionStore";
import SessionTab from "./SessionTab";
import styles from "./SessionTabs.module.css";

export default function SessionTabs() {
  const sessions = useSessionStore((state) => state.sessions);

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
      className={styles["session-tabs"]}
    >
      {openSessions.map((session) => (
        <SessionTab key={session.id} sessionTab={session} />
      ))}
    </nav>
  );
}
