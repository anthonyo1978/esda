import Link from 'next/link';

// Static data
const adminProfile = {
  id: 1,
  name: 'Admin User',
  email: 'admin@example.com',
  role: 'Administrator',
  avatar: 'https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff',
  phone: '+1 234 567 8900',
  department: 'IT',
  lastLogin: '2024-03-20 10:30 AM',
  createdAt: '2024-01-01',
  preferences: {
    notifications: true,
    darkMode: false,
    language: 'English'
  }
};

export default function AdminProfile() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Profile</h1>
        {/* <Link 
          href="/admin/profile/edit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Edit Profile
        </Link> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Information */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-6">
              <img
                src={adminProfile.avatar}
                alt={adminProfile.name}
                className="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{adminProfile.name}</h2>
                <p className="text-gray-600">{adminProfile.role}</p>
              </div>
            </div>

            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900">{adminProfile.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900">{adminProfile.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Department</dt>
                <dd className="mt-1 text-sm text-gray-900">{adminProfile.department}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Last Login</dt>
                <dd className="mt-1 text-sm text-gray-900">{adminProfile.lastLogin}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Member Since</dt>
                <dd className="mt-1 text-sm text-gray-900">{adminProfile.createdAt}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Preferences */}
        {/* <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Preferences</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Notifications</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {adminProfile.preferences.notifications ? 'Enabled' : 'Disabled'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Dark Mode</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {adminProfile.preferences.darkMode ? 'Enabled' : 'Disabled'}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Language</dt>
                <dd className="mt-1 text-sm text-gray-900">{adminProfile.preferences.language}</dd>
              </div>
            </dl>
          </div>

 
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h2 className="text-lg font-semibold mb-4">Security</h2>
            <Link
              href="/admin/profile/change-password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 mb-2 text-center"
            >
              Change Password
            </Link>
            <Link
              href="/admin/profile/2fa"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 text-center"
            >
              Setup Two-Factor Authentication
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
} 