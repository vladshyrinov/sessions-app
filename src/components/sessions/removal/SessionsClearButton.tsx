import { useSessionStore } from "../../../store/sessionStore";

export default function SessionsClearButton() {
  const sessions = useSessionStore((state) => state.sessions);
  const clearSessions = useSessionStore((state) => state.clearSessions);

  return sessions.length ? (
    <button
      aria-label="Clear all sessions"
      onClick={clearSessions}
      className="w-full py-2 mt-6 text-white bg-red-500 hover:bg-red-600 rounded-md cursor-pointer"
    >
      Clear All Sessions
    </button>
  ) : null;
}
