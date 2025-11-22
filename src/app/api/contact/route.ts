import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e messaggio sono obbligatori' },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email non valida' }, { status: 400 });
    }

    // Check if Resend is configured
    if (!resend) {
      console.log('Email would be sent:', { name, email, phone, projectType, message });
      return NextResponse.json(
        {
          success: true,
          message: 'Messaggio ricevuto (email non configurata)',
        },
        { status: 200 },
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Sito Web <onboarding@resend.dev>', // Use your verified domain later
      to: [
        process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'loriscavallaro22@gmail.com',
      ],
      subject: `Nuovo messaggio dal sito web - ${projectType || 'Richiesta generale'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            Nuovo messaggio dal sito web
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Informazioni del contatto:</h3>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ''}
            ${projectType ? `<p><strong>Tipo di progetto:</strong> ${projectType}</p>` : ''}
          </div>

          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #3498db; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Messaggio:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background-color: #ecf0f1; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #7f8c8d; font-size: 12px;">
              Questo messaggio è stato inviato dal form di contatto del sito web il ${new Date().toLocaleDateString('it-IT')} alle ${new Date().toLocaleTimeString('it-IT')}.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Errore nell'invio del messaggio. Riprova più tardi." },
      { status: 500 },
    );
  }
}
