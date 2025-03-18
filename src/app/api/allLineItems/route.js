import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


export async function POST(req, res) {
    try {
        const { sessionId } = await req.json();

        if(!sessionId) {
            console.log("Session ID is required.")
            return Response.json({success: false, message: "Session ID is required."});
        }

        
        // const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
        // console.log("*****************************Line Items*****************************");
        // console.log(JSON.stringify(lineItems,null,2))
        // console.log("*****************************Line Items*****************************");


        const session = await stripe.checkout.sessions.retrieve(sessionId);
        console.log("*****************************SESSION*****************************");
        console.log(JSON.stringify(session,null,2))
        console.log("*****************************SESSION*****************************");


        // const sessions = await stripe.checkout.sessions.list({ limit: 10 });
        // console.log("*****************************SESSIONS*****************************");
        // console.log(JSON.stringify(sessions,null,2))
        // console.log("*****************************SESSIONS*****************************");
        return Response.json(session);
    } catch (error) {
        console.log(error)
        return Response.json(error);
    }
}
