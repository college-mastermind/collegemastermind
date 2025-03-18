"use client"
import React from 'react';
import Link from 'next/link';
import { XCircle } from 'lucide-react'; 
import { useRouter } from 'next/navigation';

function PaymentFailure() {
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <XCircle size={64} className="mb-4 text-red-500" />
          
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Payment Failed</h1>
          
          <p className="mb-6 text-center text-gray-600">
            We couldn't process your payment. Please check your payment details 
            and try again, or contact our support team for assistance.
          </p>
          
          <div className="mt-4 flex w-full flex-col gap-3">
            <div
              onClick={() => router.back()} 
              className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700"
            >
              Try Again
            </div>
            
            <Link 
              href="/contact" 
              className="cursor-pointer rounded border border-gray-300 px-4 py-2 text-center font-medium text-gray-700 hover:bg-gray-50"
            >
              Contact Support
            </Link>
            
            <Link 
              href="/" 
              className="cursor-pointer rounded border border-gray-300 px-4 py-2 text-center font-medium text-gray-500 hover:bg-gray-50"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentFailure;