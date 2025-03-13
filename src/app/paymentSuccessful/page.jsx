import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PaymentSuccessPage = () => {
  return (
    <>
      <Head>
        <title>Payment Successful - Your Store</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Payment Successful!
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Thank you for your purchase. Your order is being processed.
              </p>
            </div>

            <div className="mt-6">
              <div className="text-sm font-medium text-gray-500">
                Order Details:
              </div>
              <ul className="mt-2 space-y-1">
                <li className="bg-gray-50 rounded-md py-2 px-3">
                  <span className="font-medium text-gray-700">Order ID:</span> #12345
                </li>
                <li className="bg-gray-50 rounded-md py-2 px-3">
                  <span className="font-medium text-gray-700">Amount:</span> $49.99
                </li>
                {/* Add more order details as needed */}
              </ul>
            </div>

            <div className="mt-8">
              <div className="text-center">
                <Link href="/" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Go to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessPage;