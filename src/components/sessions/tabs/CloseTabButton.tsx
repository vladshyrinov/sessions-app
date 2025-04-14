import styles from "./CloseTabButton.module.css";

interface CloseTabButtonProps {
  id: string;
  name: string;
  onClose: (id: string) => void;
}

export default function CloseTabButton({
  id,
  name,
  onClose,
}: CloseTabButtonProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClose(id);
      }}
      aria-label={`Close ${name} tab`}
      className={styles["close-tab-button"]}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={styles["close-tab-icon"]}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
