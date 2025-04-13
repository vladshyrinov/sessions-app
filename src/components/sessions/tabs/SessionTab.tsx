import { useLocation, useNavigate } from "react-router-dom";
import { Session, useSessionStore } from "../../../store/sessionStore";
import CloseTabButton from "./CloseTabButton";

interface SessionTabProps {
  sessionTab: Session;
}

export default function SessionTab({ sessionTab }: SessionTabProps) {
  const { closeSession } = useSessionStore();
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const activeTabId = currentPath.startsWith("/session/")
    ? currentPath.replace("/session/", "")
    : "dashboard";

  const handleTabClick = (id: string) => {
    navigate(id === "dashboard" ? "/" : `/session/${id}`);
  };

  const handleClose = (id: string) => {
    closeSession(id);
    if (activeTabId === id) {
      navigate("/");
    }
  };

  const { id, name } = sessionTab;
  const isActive = id === activeTabId;

  return (
    <div
      key={id}
      role="tab"
      aria-selected={isActive ? "true" : "false"}
      aria-controls={`panel-${id}`}
      tabIndex={isActive ? 0 : -1}
      className={`${
        isActive
          ? "bg-blue-500 text-white dark:bg-blue-700 dark:text-white"
          : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-200 dark:hover:bg-blue-800"
      } px-4 py-1 rounded-t-md cursor-pointer flex justify-between items-center transition-colors overflow-hidden whitespace-nowrap`}
      onClick={() => handleTabClick(id)}
    >
      <span className="text-sm font-medium">{name}</span>
      {id !== "dashboard" && (
        <CloseTabButton id={id} name={name} onClose={handleClose} />
      )}
    </div>
  );
}
