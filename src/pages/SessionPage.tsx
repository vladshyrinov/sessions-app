import { useParams } from "react-router-dom";
import { useSessionStore } from "../..../../store/sessionStore";
import SessionNotFound from "../components/sessions/notFound/SessionNotFound";
import SessionDetails from "../components/sessions/details/SessionDetails";

export default function SessionPage() {
  const { id } = useParams<{
    id: string;
  }>();
  const sessions = useSessionStore((state) => state.sessions);

  const session = sessions.find((session) => session.id === id);

  if (!session) {
    return <SessionNotFound />;
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Session Details
        </h1>

        <SessionDetails session={session} />
      </div>
    </main>
  );
}
