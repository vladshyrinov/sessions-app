import "@testing-library/jest-dom";

// Clear localStorage before each test, because of zustand persistence
beforeEach(() => {
  localStorage.clear();
});
