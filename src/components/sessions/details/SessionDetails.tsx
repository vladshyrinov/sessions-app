import { Session } from "../../../store/sessionStore";
import styles from "./SessionDetails.module.css";

interface SessionDetailsProps {
  session: Session;
}

export default function SessionDetails({ session }: SessionDetailsProps) {
  return (
    <div className={styles["session-details"]}>
      <h2 className={styles["session-title"]}>
        Session Name:{" "}
        <span className={styles["session-name"]}>{session.name}</span>
      </h2>
      <p className={styles["session-id"]}>
        Session Id: <strong>{session.id}</strong>
      </p>
    </div>
  );
}
