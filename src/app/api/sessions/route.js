import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const url = process.env.NEXT_ENV === 'dev'
  ? "http://localhost:8000"
  : "https://collegemastermind.com";


export async function POST(req, res) {
  try {
    const { pricesData, clientId } = await req.json()

    // checks
    if (!pricesData.length === 0) {
      return Response.json(
        { success: false, message: "Please select at least one card." },
        { status: 400 }
      );
    }
    if (!clientId) {
      return Response.json(
        { success: false, message: "Client ID is required." },
        { status: 400 }
      );
    }

    // Create selected offers text and price
    const finalHeading = pricesData
      .map(item => item.heading)
      .join(", ")
      .replace(/, ([^,]*)$/, " & $1");

    const totalPrice = pricesData
      .reduce((sum, item) => sum + item.originalPrice, 0);


    if (totalPrice <= 0) {
      return Response.json(
        { success: false, message: "Plz select some packages, No money!." },
        { status: 400 }
      );
    }

    /**
     * @description This is a stripe checkout session
     */
    const session = await stripe.checkout.sessions.create({
      success_url: `${url}/paymentSuccessful`,
      cancel_url: `${url}/paymentFailed`,
      client_reference_id: clientId,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: finalHeading,
              // description: product?.description,
              // images: [product?.image], 
            },
            unit_amount: +totalPrice * 100, // convert to cents
          },
          quantity: 1,
        }
      ],
      mode: "payment",
    });


    console.log(session)
    return Response.json(session);

  } catch (error) {

    let errorMessage = "Something went wrong.";
    if (error.type === "StripeCardError") {
      errorMessage = "Your card was declined.";
    } else if (error.type === "RateLimitError") {
      errorMessage = "Too many requests, please try again later.";
    } else if (error.type === "StripeInvalidRequestError") {
      errorMessage = "Invalid request. Please check your data.";
    }
    console.log(error)
    console.log(errorMessage)
    return Response.json(
      { success: false, message: errorMessage ?? error.message },
      { status: 500 }
    );
  }
}

