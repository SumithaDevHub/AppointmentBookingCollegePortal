import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl max-w-xl w-full p-8">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4"> Welcome!</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          We are just testing things out as a team and kicking off our new project.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-xl border border-blue-200 dark:border-blue-700 mb-6">
          <h2 className="text-xl font-semibold text-blue-500 dark:text-blue-300 mb-2">✅ Project Update</h2>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
            <li>We 323 have <span className="font-semibold text-green-600 dark:text-green-400">successfully</span> set up collaboration on GitHub.</li>
            <li>Ready to build the <span className="font-semibold text-indigo-600 dark:text-indigo-300">Appointment Booking System</span>.</li>
            <li>Target Institution: <span className="font-semibold">Bannari Amman Institute of Technology</span></li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-xl border border-green-200 dark:border-green-700">
          <h2 className="text-xl font-semibold text-green-600 dark:text-green-300 mb-2">📅 Next Steps</h2>
          <ol className="list-decimal list-inside text-gray-800 dark:text-gray-200">
            <li>Design UI components (Dashboard, Booking Form, Admin Panel)</li>
            <li>Set up Firebase/Auth for login system</li>
            <li>Start integrating backend (Node.js/Express + MongoDB)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
