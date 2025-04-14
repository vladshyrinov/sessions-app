import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { Session, useSessionStore } from "../../../store/sessionStore";
import CloseTabButton from "./CloseTabButton";
import styles from "./SessionTab.module.css";

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
      className={clsx(styles["session-tab"], {
        [styles["session-tab-active"]]: isActive,
        [styles["session-tab-inactive"]]: !isActive,
        [styles["session-tab-truncate"]]: id !== "dashboard",
      })}
      onClick={() => handleTabClick(id)}
    >
      <span className={styles["session-tab-truncate"]}>{name}</span>
      {id !== "dashboard" && (
        <CloseTabButton id={id} name={name} onClose={handleClose} />
      )}
    </div>
  );
}
