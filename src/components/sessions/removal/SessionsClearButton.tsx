import { useSessionStore } from "../../../store/sessionStore";
import styles from "./SessionsClearButton.module.css";

export default function SessionsClearButton() {
  const sessions = useSessionStore((state) => state.sessions);
  const clearSessions = useSessionStore((state) => state.clearSessions);

  return sessions.length ? (
    <button
      aria-label="Clear all sessions"
      onClick={clearSessions}
      className={styles["clear-button"]}
    >
      Clear All Sessions
    </button>
  ) : null;
}
