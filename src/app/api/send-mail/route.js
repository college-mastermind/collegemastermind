import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {

    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }

    const { firstName,
        lastName, 
        email, 
        message ,
        parentName,
        phone,
        graduationYear,       
        agreement,
    } = await req.json();
   
   
    const fullname = `${firstName} ${lastName}`;

    console.log(fullname, email, message, 'in request');

    if (!fullname || !email || !message) {
        return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    try {
        console.log( process.env.EMAIL_USERNAME, 
        process.env.APP_PASSWORD, )
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME, 
                pass: process.env.APP_PASSWORD, 
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USERNAME, // Website owner's email as the sender
            to: process.env.EMAIL_USERNAME,   // Website owner's email as the recipient
            subject: 'New Contact Form Submission',
            text: `
                You have received a new message from your website:

                Name: ${fullname}
                Email: ${email}
                Message: ${message}
                Parent Name: ${parentName}
                Phone: ${phone}
                Graduation Year: ${graduationYear}
                Agreement: ${agreement}
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
}
