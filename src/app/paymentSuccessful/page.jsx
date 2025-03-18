// pages/payment-success.js
import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react'; // Using the CheckCircle icon from lucide-react

export default function PaymentSuccess() {


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <CheckCircle size={64} className="mb-4 text-green-500" />
          
          <h1 className="mb-2 text-2xl font-bold text-gray-900">Payment Successful!</h1>
          
          <p className="mb-6 text-center text-gray-600">
            Your transaction has been completed successfully. 
            Thank you for your purchase!
          </p>
          
          <div className="mt-4 flex w-full flex-col gap-3">
            <Link 
              href="/" 
              className="rounded bg-blue-600 px-4 py-2 text-center font-medium text-white hover:bg-blue-700"
            >
              Go to Home
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}
// "use client"

// import React, { useEffect,useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import { useSearchParams } from 'next/navigation'

// const PaymentSuccessPage = () => {

//   const searchParams = useSearchParams()
//   const sessionId = searchParams.get('id')

//   const [sessionData, setSessionData] = useState()
//   const [amount, setAmount] = useState()

//   useEffect(() => {
//     getStripeSessionData()
//   },[])

//   const getStripeSessionData = async() => {
//     try {

//       console.log("sessionId")
//       console.log(sessionId)
//       const res = await fetch("/api/allLineItems", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({sessionId}),
//       });
  
//       const session = await res.json();
//       console.log("session")
//       console.log(session)
      
//       setSessionData(session.amount)
//       setAmount(session.amount)
  
//     } catch (error) {
//       console.log(error)
//     }
//   }



//   const session = {
//     id: 'cs_test_a1fa7JZRqW50jFsUk79sK1pb1XFeHF9bod5saQsbEsyXDXsJZmwj7qkjh5',
//     object: 'checkout.session',
//     adaptive_pricing: { enabled: false },
//     after_expiration: null,
//     allow_promotion_codes: null,
//     amount_subtotal: 627000,
//     amount_total: 627000,
//     automatic_tax: { enabled: false, liability: null, status: null },
//     billing_address_collection: null,
//     cancel_url: 'https://cruel-bats-go.loca.lt/paymentFailed',
//     client_reference_id: 'limonsidrat428',
//     client_secret: null,
//     collected_information: null,
//     consent: null,
//     consent_collection: null,
//     created: 1742237318,
//     currency: 'usd',
//     currency_conversion: null,
//     custom_fields: [],
//     custom_text: {
//       after_submit: null,
//       shipping_address: null,
//       submit: null,
//       terms_of_service_acceptance: null
//     },
//     customer: null,
//     customer_creation: 'if_required',
//     customer_details: null,
//     customer_email: null,
//     discounts: [],
//     expires_at: 1742323718,
//     invoice: null,
//     invoice_creation: {
//       enabled: false,
//       invoice_data: {
//         account_tax_ids: null,
//         custom_fields: null,
//         description: null,
//         footer: null,
//         issuer: null,
//         metadata: {},
//         rendering_options: null
//       }
//     },
//     livemode: false,
//     locale: null,
//     metadata: {},
//     mode: 'payment',
//     payment_intent: null,
//     payment_link: null,
//     payment_method_collection: 'if_required',
//     payment_method_configuration_details: { id: 'pmc_1R0BPoK5PXYcn9mZHVVkV428', parent: null },
//     payment_method_options: { card: { request_three_d_secure: 'automatic' } },
//     payment_method_types: ['card', 'link', 'cashapp'],
//     payment_status: 'unpaid', // IMPORTANT: In real success case this should be 'paid'
//     phone_number_collection: { enabled: false },
//     recovered_from: null,
//     saved_payment_method_options: null,
//     setup_intent: null,
//     shipping_address_collection: null,
//     shipping_cost: null,
//     shipping_details: null,
//     shipping_options: [],
//     status: 'open',
//     submit_type: null,
//     subscription: null,
//     success_url: 'https://cruel-bats-go.loca.lt/paymentSuccessful',
//     total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
//     ui_mode: 'hosted',
//     url: 'https://checkout.stripe.com/c/pay/cs_test_a1fa7JZRqW50jFsUk79sK1pb1XFeHF9bod5saQsbEsyXDXsJZmwj7qkjh5#fidkdWxOYHwnPyd1blpxYHZxWjA0S0FyUk1OMFVdXGZrPGhfNXJ2QTxzUDFUM09uaUNtMkkwVkJSbjN%2FUTNoPUdodX9raW5Ad01KTXFNa39wUEA9NHdEN2toXEw0XWJKQUFyYGxzQ39DbmlDNTVDYW1LUlJvQCcpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl'
//   };

//   const formatCurrency = (amount, currency) => {
//     const numberFormat = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: currency.toUpperCase(),
//     });
//     return numberFormat.format(amount / 100); // Stripe amounts are in cents
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-md">
//           <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//             <div className="text-center">
//               <svg
//                 className="mx-auto h-12 w-12 text-green-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 13l4 4L19 7"
//                 />
//               </svg>
//               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                 Payment Successful!
//               </h2>
//               <p className="mt-2 text-center text-sm text-gray-600">
//                 Thank you for your purchase. Your order is being processed.
//               </p>
//             </div>

//             <div className="mt-6">
//               <div className="text-sm font-medium text-gray-500">
//                 Order Details:
//               </div>
//               <ul className="mt-2 space-y-1">
//                 <li className="bg-gray-50 rounded-md py-2 px-3">
//                   <span className="font-medium text-gray-700">Order ID:</span> {session.client_reference_id ? `#${session.client_reference_id}` : 'N/A'}
//                 </li>
//                 <li className="bg-gray-50 rounded-md py-2 px-3">
//                   <span className="font-medium text-gray-700">Amount:</span> {formatCurrency(session.amount_total, session.currency)}
//                 </li>
//                 <li className="bg-gray-50 rounded-md py-2 px-3">
//                   <span className="font-medium text-gray-700">Payment Status:</span> {session.payment_status}
//                 </li>
//                 <li className="bg-gray-50 rounded-md py-2 px-3">
//                   <span className="font-medium text-gray-700">Checkout Session ID:</span> {session.id.slice(0, 7)}...
//                 </li>
//               </ul>
//             </div>

//             <div className="mt-8">
//               <div className="text-center">
//                 <Link href="/upsell-sat" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
//                   Go to Homepage
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


// export default PaymentSuccessPage;