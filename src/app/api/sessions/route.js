// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// const url = process.env.NEXT_ENV === 'dev'
//   ? "https://dark-bees-lick.loca.lt"
//   : "https://collegemastermind.com";


// export async function POST(req, res) {
//   try {
//     const { pricesData, clientId } = await req.json()
//     console.log(pricesData, clientId)

//     // Create selected offers text and price
//     const finalHeading = pricesData
//       .map(item => item.heading)
//       .join(", ")
//       .replace(/, ([^,]*)$/, " & $1");

//     const totalPrice = pricesData
//       .reduce((sum, item) => sum + item.price, 0);


//     /**
//      * @description This is a stripe checkout session
//      */
//     const session = await stripe.checkout.sessions.create({
//       success_url: `${url}/paymentSuccessful`,
//       cancel_url: `${url}/paymentFailed`,
//       client_reference_id: clientId,
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: finalHeading,
//               // description: product?.description,
//               // images: [product?.image], 
//             },
//             unit_amount: totalPrice * 100, // convert to cents
//           },
//           quantity: 1,
//         }
//       ],
//       mode: "payment",
//     });

//     console.log(session)

//     return Response.json(session);
//   } catch (error) {
//     console.log(error.message)
//     console.log(error)
//     return Response.json(error);
//   }
// }
