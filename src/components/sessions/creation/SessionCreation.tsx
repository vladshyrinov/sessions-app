import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStore } from "../../../store/sessionStore";
import styles from "./SessionCreation.module.css";

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
    <div className={styles["session-creation-container"]}>
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
        className={styles["session-input"]}
      />
      {errorMessage && (
        <p className={styles["error-message"]}>{errorMessage}</p>
      )}
      <button
        onClick={handleAddSession}
        disabled={!newSessionName.trim()}
        className={`${styles["create-button"]} ${
          newSessionName.trim()
            ? styles["create-button-enabled"]
            : styles["create-button-disabled"]
        }`}
      >
        Create Session
      </button>
    </div>
  );
}
