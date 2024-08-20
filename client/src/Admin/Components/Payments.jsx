import { useState } from 'react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    alert('Payment submitted!');
  };

  return (
    <div className=" w-full p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Complete Your Payment</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Payment Method Selection */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">Choose Payment Method</h3>
          <div className="flex justify-around">
            <button
              type="button"
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 p-4 rounded-lg border text-sm font-medium ${paymentMethod === 'card' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300'} shadow-md transition-transform transform ${paymentMethod === 'card' ? 'scale-105' : ''} hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8c0 2.5-2 4.5-4.5 4.5S7 10.5 7 8s2-4.5 4.5-4.5S16 5.5 16 8zM3 12h3m6 0h6m-3 0v6m-3 0v-6" />
              </svg>
              Credit/Debit Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod('upi')}
              className={`flex-1 p-4 rounded-lg border text-sm font-medium ${paymentMethod === 'upi' ? 'bg-blue-500 text-white border-blue-500' : 'bg-white text-gray-700 border-gray-300'} shadow-md transition-transform transform ${paymentMethod === 'upi' ? 'scale-105' : ''} hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12l2 2 4-4 4 4 6-6" />
              </svg>
              UPI
            </button>
          </div>
        </div>

        {/* Card Information */}
        {paymentMethod === 'card' && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Card Details</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  id="card-number"
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    id="expiry-date"
                    type="text"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    id="cvv"
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* UPI Information */}
        {paymentMethod === 'upi' && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">UPI Details</h3>
            <div>
              <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700">UPI ID</label>
              <input
                id="upi-id"
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="example@upi"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
        )}

        {/* Billing Address */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Billing Address</h3>
          <div>
            <label htmlFor="billing-address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="billing-address"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              placeholder="Enter your billing address"
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
