import { useParams } from "react-router-dom";
import { useSessionStore } from "../..../../store/sessionStore";
import SessionDetails from "../components/sessions/details/SessionDetails";
import PageContainer from "../components/shared/PageContainer/PageContainer";
import styles from "./SessionPage.module.css";

export default function SessionPage() {
  const { id } = useParams<{
    id: string;
  }>();
  const sessions = useSessionStore((state) => state.sessions);

  const session = sessions.find((session) => session.id === id);

  return (
    <PageContainer title="Session Details">
      {session ? (
        <SessionDetails session={session} />
      ) : (
        <p className={styles["error-message"]}>
          The session you are looking for could not be found.
        </p>
      )}
    </PageContainer>
  );
}
