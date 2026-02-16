import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is present.
// This prevents build/deploy from failing when the key is missing.
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, company, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !company) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // If email service is not configured, just accept the form
    if (!resend) {
      console.warn('RESEND_API_KEY is not set. Skipping email send.');
      return NextResponse.json(
        { success: true, message: 'Form received (email sending disabled in this environment).' },
        { status: 200 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Light Vision Marketing <onboarding@resend.dev>', // Change this to your verified domain
      to: ['your-email@example.com'], // Change this to your email
      replyTo: email,
      subject: `Ny kontaktförfrågan från ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #ff6b00; margin-bottom: 20px;">Ny Kontaktförfrågan</h2>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Namn:</strong>
              <p style="margin: 5px 0; color: #1f2937;">${firstName} ${lastName}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Telefon:</strong>
              <p style="margin: 5px 0; color: #1f2937;">${phone}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Email:</strong>
              <p style="margin: 5px 0; color: #1f2937;">${email}</p>
            </div>

            <div style="margin-bottom: 15px;">
              <strong style="color: #374151;">Bolag:</strong>
              <p style="margin: 5px 0; color: #1f2937;">${company}</p>
            </div>

            ${
              message
                ? `
              <div style="margin-bottom: 15px;">
                <strong style="color: #374151;">Meddelande:</strong>
                <p style="margin: 5px 0; color: #1f2937; white-space: pre-wrap;">${message}</p>
              </div>
            `
                : ''
            }

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              Detta meddelande skickades från Light Vision Marketing kontaktformulär.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
