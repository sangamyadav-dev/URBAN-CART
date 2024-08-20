import React, { useState } from 'react';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState('');

  // Dummy tracking data function (replace with actual API call)
  const fetchTrackingData = (number) => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (number === '123456789') {
          resolve({
            status: 'In Transit',
            estimatedDelivery: '2024-08-20',
            events: [
              { date: '2024-08-10', location: 'New York, NY', description: 'Package shipped from warehouse' },
              { date: '2024-08-12', location: 'Philadelphia, PA', description: 'Package arrived at sorting facility' },
              { date: '2024-08-15', location: 'Washington, DC', description: 'Out for delivery' }
            ]
          });
        } else {
          reject('Tracking number not found');
        }
      }, 1000);
    });
  };

  const handleTrack = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await fetchTrackingData(trackingNumber);
      setTrackingData(data);
    } catch (err) {
      setError(err);
      setTrackingData(null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Track Your Order</h2>

      <form onSubmit={handleTrack} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <label htmlFor="tracking-number" className="block text-lg font-semibold text-gray-700">Enter Tracking Number</label>
        <div className="mt-2 flex gap-4">
          <input
            id="tracking-number"
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="123456789"
            className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Track
          </button>
        </div>
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>

      {trackingData && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Tracking Information</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-medium text-gray-600">Status</h4>
              <p className="text-lg text-gray-800">{trackingData.status}</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-600">Estimated Delivery</h4>
              <p className="text-lg text-gray-800">{trackingData.estimatedDelivery}</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-600">Tracking Events</h4>
              <div className="space-y-4">
                {trackingData.events.map((event, index) => (
                  <div key={index} className="p-4 border border-gray-300 rounded-lg shadow-sm">
                    <p className="text-sm text-gray-500">{event.date} - {event.location}</p>
                    <p className="mt-1 text-lg text-gray-800">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Tracking;