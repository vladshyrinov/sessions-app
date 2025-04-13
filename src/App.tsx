import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SessionPage from "./pages/SessionPage";
import DashboardPage from "./pages/DashboardPage";
import SessionsTabs from "./components/sessions/tabs/SessionTabs";
import ThemeSwitcher from "./components/ThemeSwitcher";

const basename = import.meta.env.PROD ? "/sessions-app" : "/";

export default function App() {
  return (
    <Router basename={basename}>
      <SessionsTabs />
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/session/:id" element={<SessionPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
