# Email Notification Setup Guide

## Option 1: Supabase Auth Email Templates (Easiest)

Supabase has built-in email templates. To enable approval notifications:

### Step 1: Configure SMTP in Supabase
1. Go to Supabase Dashboard → Project Settings → Authentication
2. Scroll to "SMTP Settings"
3. Enable custom SMTP or use Supabase's default

### Step 2: Create Custom Email Template
Unfortunately, Supabase Auth doesn't have a built-in "approval" template. You'll need to use Option 2 or 3.

---

## Option 2: Supabase Edge Function (Recommended)

Create a serverless function that sends emails when signups are approved.

### Step 1: Create Edge Function
```bash
npx supabase functions new send-approval-email
```

### Step 2: Edge Function Code
```typescript
// supabase/functions/send-approval-email/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { email, name } = await req.json()

  // Send email using your preferred service (SendGrid, Resend, etc.)
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'KSAU-HS <noreply@yourddomain.com>',
      to: email,
      subject: '✅ Your Account Has Been Approved!',
      html: `
        <h2>Welcome to KSAU-HS Clinical Affairs Dashboard!</h2>
        <p>Dear ${name},</p>
        <p>Your account has been approved! You can now log in and access the system.</p>
        <p><a href="https://your-site.vercel.app">Click here to login</a></p>
        <br>
        <p>Best regards,<br>KSAU-HS Clinical Affairs Team</p>
      `
    })
  })

  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})
```

### Step 3: Call from Database Function
Update the `approve_signup_request` function to call this Edge Function at the end.

---

## Option 3: Third-Party Email Service (Quick Setup)

Use a service like **Resend**, **SendGrid**, or **Mailgun**.

### Using Resend (Easiest)
1. Sign up at https://resend.com (free tier: 3,000 emails/month)
2. Get your API key
3. Add email sending to the database function or create an Edge Function

---

## Temporary Workaround: Manual Notification

For now, you can manually inform users via WhatsApp/SMS that their account is approved. The system already shows "Account approved" in the admin panel.

---

## Recommended Approach

**Best solution:** Use Option 2 (Edge Function with Resend)
- Cost: Free up to 3,000 emails/month
- Setup time: ~30 minutes
- Professional email delivery
- Easy to customize templates

Let me know which option you'd like to implement!
