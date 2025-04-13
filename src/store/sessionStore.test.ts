import { useSessionStore } from "./sessionStore";

describe("useSessionStore", () => {
  it("adds a session and returns the id", () => {
    const id = useSessionStore.getState().addSession("Test Session");
    const sessions = useSessionStore.getState().sessions;
    expect(sessions).toHaveLength(1);
    expect(sessions[0].id).toBe(id);
    expect(sessions[0].name).toBe("Test Session");
    expect(sessions[0].isOpen).toBe(true);
  });

  it("closes a session", () => {
    const id = useSessionStore.getState().addSession("Session to Close");
    useSessionStore.getState().closeSession(id);
    const session = useSessionStore
      .getState()
      .sessions.find((s) => s.id === id);
    expect(session?.isOpen).toBe(false);
  });

  it("opens a session", () => {
    const id = useSessionStore.getState().addSession("Session to Open");
    useSessionStore.getState().closeSession(id);
    useSessionStore.getState().openSession(id);
    const session = useSessionStore
      .getState()
      .sessions.find((s) => s.id === id);
    expect(session?.isOpen).toBe(true);
  });

  it("removes a session", () => {
    const id = useSessionStore.getState().addSession("To Be Removed");
    useSessionStore.getState().removeSession(id);
    const session = useSessionStore
      .getState()
      .sessions.find((s) => s.id === id);
    expect(session).toBeUndefined();
  });

  it("clears all sessions", () => {
    useSessionStore.getState().addSession("1");
    useSessionStore.getState().addSession("2");
    useSessionStore.getState().clearSessions();
    expect(useSessionStore.getState().sessions).toHaveLength(0);
  });
});
