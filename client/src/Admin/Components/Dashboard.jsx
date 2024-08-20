// import React from 'react';
// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // Ensure recharts is installed
import { PieChart, Pie, Cell } from 'recharts'; // For Pie chart

const dataLineChart = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 7000 },
];

const dataPieChart = [
  { name: 'Electronics', value: 4000 },
  { name: 'Fashion', value: 3000 },
  { name: 'Home', value: 3000 },
  { name: 'Sports', value: 2000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  return (
    <main className="flex-1 p-6">
      <h2 className="text-xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-2xl font-bold">$12,345</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-2xl font-bold">567</p>
        </div>
      </div>
      <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Analytics Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataLineChart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Sales by Category */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Sales by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dataPieChart} dataKey="value" nameKey="name" outerRadius={80} fill="#8884d8">
                {dataPieChart.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Additional Metrics</h3>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between">
            <span className="font-medium">Total Orders:</span>
            <span className="font-semibold">1,234</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total Revenue:</span>
            <span className="font-semibold">$12,345</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Active Users:</span>
            <span className="font-semibold">567</span>
          </div>
        </div>
      </div>
    </div>
    </main>
    
  );
};

export default Dashboard;