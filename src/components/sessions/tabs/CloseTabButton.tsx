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
      className="w-5 h-5 text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-full flex items-center justify-center text-xs ml-1 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-3 h-3"
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
