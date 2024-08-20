import { useState } from 'react';

const Settings = () => {
  const [userName, setUserName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    // Handle save settings logic here
    alert('Settings saved!');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Account Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
        <div className="flex items-center">
          <input
            id="notifications"
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <label htmlFor="notifications" className="ml-2 block text-sm font-medium text-gray-700">Enable Notifications</label>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;
