import SessionCreation from "../components/sessions/creation/SessionCreation";
import SessionList from "../components/sessions/list/SessionList";
import SessionsClearButton from "../components/sessions/removal/SessionsClearButton";

export default function DashboardPage() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Dashboard
        </h1>

        <SessionCreation />
        <SessionList />
        <SessionsClearButton />
      </div>
    </main>
  );
}
