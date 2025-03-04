export default function DocumentsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 ">Documents</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <p className="text-gray-600 dark:text-gray-300">Access and manage your important documents. This page shows all your stored documents and files.</p>
        <div className="mt-4 space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Project Proposal.pdf</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Last modified: 2 days ago</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Q1 Report.xlsx</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Last modified: 1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}