import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PaymentFailurePage = () => {
  return (
    <>
      <Head>
        <title>Payment Failed - Your Store</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938-9.07a9 9 0 1112.876 0M12 15.75a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Payment Failed
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                Oops, something went wrong with your payment. Please try again.
              </p>
            </div>

            <div className="mt-6">
              <div className="text-sm font-medium text-gray-500">
                Possible Reasons:
              </div>
              <ul className="mt-2 space-y-1">
                <li className="bg-gray-50 rounded-md py-2 px-3">
                  <span className="font-medium text-gray-700">Insufficient Funds</span>
                </li>
                <li className="bg-gray-50 rounded-md py-2 px-3">
                  <span className="font-medium text-gray-700">Card Declined</span>
                </li>
                <li className="bg-gray-50 rounded-md py-2 px-3">
                  <span className="font-medium text-gray-700">Payment Gateway Error</span>
                </li>
                {/* Add more possible reasons or error details from your payment gateway */}
              </ul>
            </div>

            <div className="mt-8">
              <div className="text-center space-x-4">
                <button
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Try Again
                </button>
                <Link href="/contact" className="group relative inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFailurePage;