import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic shape validation
    if (!data?.email || !data?.name) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    // In a real implementation, forward to CRM, email, or DB here.
    // For demo purposes, just log to server output.
    console.log('[CONTACT_FORM]', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      budget: data.budget,
      destinations: data.destinations,
      message: data.message
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
