import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "../../../store/sessionStore";

export default function SessionCreation() {
  const addSession = useSessionStore((state) => state.addSession);
  const navigate = useNavigate();
  const [newSessionName, setNewSessionName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddSession = () => {
    if (newSessionName.trim()) {
      const id = addSession(newSessionName.trim());
      setNewSessionName("");
      setErrorMessage("");
      navigate(`/session/${id}`);
    } else {
      setErrorMessage("Session name cannot be empty.");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleAddSession();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <label htmlFor="session-name-input" className="sr-only">
        New session name
      </label>
      <input
        id="session-name-input"
        type="text"
        placeholder="New session name"
        value={newSessionName}
        onChange={(e) => setNewSessionName(e.target.value)}
        onKeyDown={handleKeyDown}
        aria-label="New session name"
        className="w-full p-3 text-gray-900 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 dark:placeholder-gray-400"
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
      <button
        onClick={handleAddSession}
        disabled={!newSessionName.trim()}
        className={`mt-4 w-full p-3 text-white ${
          newSessionName.trim()
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-400 cursor-not-allowed"
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md`}
      >
        Create Session
      </button>
    </div>
  );
}
