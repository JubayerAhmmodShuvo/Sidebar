export default function AllProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 ">All Projects</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-300">Here you can view and manage all your projects. This page provides an overview of both active and completed projects.</p>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Project Alpha</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Status: In Progress</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Project Beta</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Status: Planning</p>
          </div>
        </div>
      </div>
    </div>
  );
}