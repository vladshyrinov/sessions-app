export default function SessionNotFound() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Session Not Found
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          The session you are looking for could not be found.
        </p>
      </div>
    </main>
  );
}
