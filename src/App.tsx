import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SessionsTabs from "./components/sessions/tabs/SessionTabs";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Spinner from "./components/Spinner";

const SessionPage = React.lazy(() => import("./pages/SessionPage"));
const DashboardPage = React.lazy(() => import("./pages/DashboardPage"));

const basename = import.meta.env.PROD ? "/sessions-app" : "/";

export default function App() {
  return (
    <Router basename={basename}>
      <SessionsTabs />
      <ThemeSwitcher />
      <Suspense fallback={<Spinner aria-label="Loading content..." />}>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/session/:id" element={<SessionPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
