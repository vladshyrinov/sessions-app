import { useNavigate } from "react-router-dom";
import { Session, useSessionStore } from "../../../store/sessionStore";
import styles from "./SessionItem.module.css";

interface SessionItemProps {
  session: Session;
}

export default function SessionItem({ session }: SessionItemProps) {
  const openSession = useSessionStore((state) => state.openSession);
  const removeSession = useSessionStore((state) => state.removeSession);
  const navigate = useNavigate();

  const handleOpen = (id: string) => {
    openSession(id);
    navigate(`/session/${id}`);
  };

  const handleRemove = (id: string) => {
    removeSession(id);
  };

  return (
    <li className={styles["session-item"]}>
      <span className={styles["session-name"]}>{session.name}</span>
      <div className={styles["session-actions"]}>
        <button
          onClick={() => handleOpen(session.id)}
          aria-label={`Open session ${session.name}`}
          className={styles["open-button"]}
        >
          Open
        </button>
        <button
          onClick={() => handleRemove(session.id)}
          aria-label={`Remove session ${session.name}`}
          className={styles["remove-button"]}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
