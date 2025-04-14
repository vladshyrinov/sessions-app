import { useSessionStore } from "../../../store/sessionStore";
import SessionItem from "./SessionItem";
import styles from "./SessionList.module.css";

export default function SessionList() {
  const sessions = useSessionStore((state) => state.sessions);

  return (
    <div className={styles["session-list-container"]}>
      <h2 className={styles["session-list-title"]}>List of Sessions</h2>
      {sessions.length === 0 ? (
        <p className={styles["session-list-empty"]}>
          No sessions yet. Create one to get started.
        </p>
      ) : (
        <ul className={styles["session-list"]}>
          {sessions.map((session) => (
            <SessionItem key={session.id} session={session} />
          ))}
        </ul>
      )}
    </div>
  );
}
