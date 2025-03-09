export default function SidebarPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to your dashboard. Navigate through different sections using the sidebar menu.
          This interface provides easy access to all your important tools and information.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Quick Stats</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">View your activity summary and key metrics</p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Recent Activity</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Check your latest updates and notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}