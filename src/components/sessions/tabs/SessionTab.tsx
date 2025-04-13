import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Session, useSessionStore } from "../../../store/sessionStore";
import CloseTabButton from "./CloseTabButton";

interface SessionTabProps {
  sessionTab: Session;
}

export default function SessionTab({ sessionTab }: SessionTabProps) {
  const closeSession = useSessionStore((state) => state.closeSession);
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
      className={clsx(
        "flex items-center px-4 py-1 text-sm border-b-2 border-transparent hover:border-blue-500 focus:outline-none cursor-pointer",
        {
          "bg-blue-500 text-white dark:bg-blue-700 dark:text-white": isActive,
          "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300":
            !isActive,
          "truncate max-w-[150px]": id !== "dashboard",
        }
      )}
      onClick={() => handleTabClick(id)}
    >
      <span className="truncate">{name}</span>
      {id !== "dashboard" && (
        <CloseTabButton id={id} name={name} onClose={handleClose} />
      )}
    </div>
  );
}
