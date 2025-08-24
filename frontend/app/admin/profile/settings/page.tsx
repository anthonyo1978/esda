import Link from 'next/link';

// Static data
const adminSettings = {
  preferences: {
    notifications: true,
    darkMode: false,
    language: 'English',
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true
  },
  security: {
    twoFactorEnabled: false,
    lastPasswordChange: '2024-03-01',
    loginHistory: [
      { date: '2024-03-20 10:30 AM', device: 'Chrome on Windows', location: 'New York, USA' },
      { date: '2024-03-19 02:15 PM', device: 'Safari on iPhone', location: 'New York, USA' }
    ]
  }
};

export default function Settings() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Link 
          href="/admin/profile"
          className="text-gray-600 hover:text-gray-900"
        >
          Back to Profile
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Preferences Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Preferences</h2>
          <form className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="notifications" className="text-sm font-medium text-gray-700">
                  Notifications
                </label>
                <p className="text-xs text-gray-500">Receive notifications about important updates</p>
              </div>
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                defaultChecked={adminSettings.preferences.notifications}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="darkMode" className="text-sm font-medium text-gray-700">
                  Dark Mode
                </label>
                <p className="text-xs text-gray-500">Switch between light and dark theme</p>
              </div>
              <input
                type="checkbox"
                id="darkMode"
                name="darkMode"
                defaultChecked={adminSettings.preferences.darkMode}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="emailNotifications" className="text-sm font-medium text-gray-700">
                  Email Notifications
                </label>
                <p className="text-xs text-gray-500">Receive notifications via email</p>
              </div>
              <input
                type="checkbox"
                id="emailNotifications"
                name="emailNotifications"
                defaultChecked={adminSettings.preferences.emailNotifications}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label htmlFor="weeklyReports" className="text-sm font-medium text-gray-700">
                  Weekly Reports
                </label>
                <p className="text-xs text-gray-500">Receive weekly summary reports</p>
              </div>
              <input
                type="checkbox"
                id="weeklyReports"
                name="weeklyReports"
                defaultChecked={adminSettings.preferences.weeklyReports}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>

            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <select
                id="language"
                name="language"
                defaultValue={adminSettings.preferences.language}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </form>
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Security</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Two-Factor Authentication</h3>
                <p className="text-xs text-gray-500">Add an extra layer of security to your account</p>
              </div>
              <Link
                href="/admin/profile/2fa"
                className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800"
              >
                {adminSettings.security.twoFactorEnabled ? 'Manage' : 'Enable'}
              </Link>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Recent Login Activity</h3>
              <div className="space-y-2">
                {adminSettings.security.loginHistory.map((login, index) => (
                  <div key={index} className="text-sm">
                    <p className="text-gray-900">{login.date}</p>
                    <p className="text-gray-500">{login.device} • {login.location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-1">Last Password Change</h3>
              <p className="text-sm text-gray-500">{adminSettings.security.lastPasswordChange}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
} 