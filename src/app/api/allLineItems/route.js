import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { sessionId } = await req.json();

        
        const lineItems = await stripe.checkout.sessions.listLineItems(sessionId);
        console.log("*****************************Line Items*****************************");
        console.log(JSON.stringify(lineItems,null,2))
        console.log("*****************************Line Items*****************************");


        const session = await stripe.checkout.sessions.retrieve(sessionId);
        console.log("*****************************SESSION*****************************");
        console.log(JSON.stringify(session,null,2))
        console.log("*****************************SESSION*****************************");


        const sessions = await stripe.checkout.sessions.list({ limit: 10 });
        console.log("*****************************SESSIONS*****************************");
        console.log(JSON.stringify(sessions,null,2))
        console.log("*****************************SESSIONS*****************************");

        return Response.json({success: true, message: "Object received successfully!"});
    } catch (error) {
        console.log(error)
        return Response.json(error);
    }
}
