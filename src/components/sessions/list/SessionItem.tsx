import { useNavigate } from "react-router-dom";
import { Session, useSessionStore } from "../../../store/sessionStore";

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
    <li className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
        {session.name}
      </span>
      <div className="flex space-x-3">
        <button
          onClick={() => handleOpen(session.id)}
          aria-label={`Open session ${session.name}`}
          className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 py-1 px-3 rounded-md cursor-pointer transition duration-200 ease-in-out"
        >
          Open
        </button>
        <button
          onClick={() => handleRemove(session.id)}
          aria-label={`Remove session ${session.name}`}
          className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 py-1 px-3 rounded-md cursor-pointer transition duration-200 ease-in-out"
        >
          Remove
        </button>
      </div>
    </li>
  );
}
