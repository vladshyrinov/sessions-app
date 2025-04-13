import { Session } from "../../../store/sessionStore";

interface SessionDetailsProps {
  session: Session;
}

export default function SessionDetails({ session }: SessionDetailsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Session Name:{" "}
        <span className="text-blue-600 dark:text-blue-400">{session.name}</span>
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Session Id: <strong>{session.id}</strong>
      </p>
    </div>
  );
}
