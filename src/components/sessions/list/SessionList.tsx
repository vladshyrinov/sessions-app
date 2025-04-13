import { useSessionStore } from "../../../store/sessionStore";
import SessionItem from "./SessionItem";

export default function SessionList() {
  const { sessions } = useSessionStore();

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        List of Sessions
      </h2>
      {sessions.length === 0 ? (
        <p className="text-gray-500 text-center">
          No sessions yet. Create one to get started.
        </p>
      ) : (
        <ul className="space-y-4">
          {sessions.map((session) => (
            <SessionItem key={session.id} session={session} />
          ))}
        </ul>
      )}
    </div>
  );
}
