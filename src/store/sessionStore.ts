import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface Session {
  id: string;
  name: string;
  isOpen: boolean;
}

interface SessionState {
  sessions: Session[];
  addSession: (name: string) => string;
  closeSession: (id: string) => void;
  openSession: (id: string) => void;
  removeSession: (id: string) => void;
  clearSessions: () => void;
}

export const useSessionStore = create<SessionState>()(
  devtools(
    persist(
      (set) => ({
        sessions: [],
        addSession: (name: string) => {
          const id = crypto.randomUUID();
          const newSession = {
            id,
            name,
            isOpen: true,
          };
          set((state) => ({
            sessions: [...state.sessions, newSession],
          }));
          return id;
        },
        closeSession: (id) => {
          set((state) => ({
            sessions: state.sessions.map((s) =>
              s.id === id
                ? {
                    ...s,
                    isOpen: false,
                  }
                : s
            ),
          }));
        },
        openSession: (id) => {
          set((state) => ({
            sessions: state.sessions.map((s) =>
              s.id === id
                ? {
                    ...s,
                    isOpen: true,
                  }
                : s
            ),
          }));
        },
        removeSession: (id) => {
          set((state) => ({
            sessions: state.sessions.filter((s) => s.id !== id),
          }));
        },
        clearSessions: () => {
          set(() => ({
            sessions: [],
          }));
        },
      }),
      {
        name: "session-store",
      }
    ),
    {
      name: "SessionStore",
    }
  )
);
