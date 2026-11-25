import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Visitor input goes into an HTML email: escape it
const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const fail = (status: number, error: string) =>
  NextResponse.json({ error }, { status });

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail(400, 'Richiesta non valida');
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const phone = String(body.phone ?? '').trim();
  const projectType = String(body.projectType ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !message) {
    return fail(400, 'Nome, email e messaggio sono obbligatori');
  }
  if (!EMAIL_REGEX.test(email)) {
    return fail(400, 'Email non valida');
  }

  if (!resend) {
    // Local development without a key: pretend it worked so the form can be
    // tested. In production a missing key is a real error, never a fake success.
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.log('[contact] RESEND_API_KEY missing, email not sent:', {
        name,
        email,
        phone,
        projectType,
      });
      return NextResponse.json({ success: true, dev: true });
    }
    // eslint-disable-next-line no-console
    console.error('[contact] RESEND_API_KEY is not set');
    return fail(503, 'Invio email non configurato');
  }

  const recipients = [
    process.env.CONTACT_FORM_RECIPIENT || 'loriscavallaro22@gmail.com',
    process.env.CONTACT_FORM_RECIPIENT_CC,
  ].filter((value): value is string => Boolean(value));

  // The domain must be verified in Resend, otherwise use onboarding@resend.dev
  // (which can only deliver to the Resend account owner's address)
  const sender =
    process.env.RESEND_FROM_EMAIL || 'Sito Web <onboarding@resend.dev>';

  const now = new Date();
  const when = `${now.toLocaleDateString('it-IT', { timeZone: 'Europe/Rome' })} alle ${now.toLocaleTimeString('it-IT', { timeZone: 'Europe/Rome' })}`;
  const row = (label: string, value: string) =>
    value
      ? `<p style="margin:0 0 6px"><strong>${label}:</strong> ${escapeHtml(value)}</p>`
      : '';

  const { data, error } = await resend.emails.send({
    from: sender,
    to: recipients,
    replyTo: email,
    subject: `Nuova richiesta dal sito: ${projectType || 'richiesta generale'} (${name})`,
    text: [
      `Nome: ${name}`,
      `Email: ${email}`,
      ...(phone ? [`Telefono: ${phone}`] : []),
      ...(projectType ? [`Tipo di progetto: ${projectType}`] : []),
      '',
      message,
      '',
      `Inviato dal form del sito il ${when}.`,
    ].join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1816">
        <h2 style="border-bottom:2px solid #b4452b;padding-bottom:10px">Nuova richiesta dal sito</h2>
        <div style="background:#f4f1ec;padding:16px 20px;margin:20px 0">
          ${row('Nome', name)}
          ${row('Email', email)}
          ${row('Telefono', phone)}
          ${row('Tipo di progetto', projectType)}
        </div>
        <div style="padding:16px 20px;border-left:4px solid #b4452b">
          <p style="line-height:1.6;white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>
        <p style="color:#8c8781;font-size:12px;margin-top:20px">
          Inviato dal form del sito il ${when}. Rispondi a questa email per scrivere direttamente al cliente.
        </p>
      </div>
    `,
  });

  if (error) {
    // eslint-disable-next-line no-console
    console.error('[contact] Resend error:', error);
    return fail(502, "Errore nell'invio del messaggio. Riprova più tardi.");
  }

  return NextResponse.json({ success: true, id: data?.id });
}
