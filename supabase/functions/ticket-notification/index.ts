import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") || "onboarding@resend.dev";
const FROM_NAME = "COP Student Portal – KSAU-HS";

serve(async (req) => {
  // Supabase Database Webhook sends a POST with the record payload
  const payload = await req.json();

  const record = payload.record;
  const oldRecord = payload.old_record;

  // Only act when status changes to approved or rejected
  if (!record || record.status === oldRecord?.status) {
    return new Response("No status change", { status: 200 });
  }

  if (!["approved", "rejected"].includes(record.status)) {
    return new Response("Status not actionable", { status: 200 });
  }

  const studentEmail = record.student_email;
  if (!studentEmail) {
    return new Response("No student email on record", { status: 200 });
  }

  const isApproved = record.status === "approved";
  const ticketId = record.ticket_id || record.id || "N/A";
  const title = record.title || "Your Request";
  const adminNotes = record.admin_notes || record.notes || "";
  const department = record.department || "";
  const priority = record.priority || "";

  const subject = isApproved
    ? `✅ Request Approved – ${title}`
    : `Request Update: ${title}`;

  const statusColor = isApproved ? "#28a745" : "#dc3545";
  const statusLabel = isApproved ? "Approved" : "Not Approved";
  const statusIcon = isApproved ? "✅" : "❌";

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ticket Update</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:30px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#1a3a5c;padding:24px 32px;text-align:center;">
              <p style="margin:0;color:#c9a84c;font-size:13px;letter-spacing:1px;text-transform:uppercase;">King Saud Bin Abdulaziz University for Health Sciences</p>
              <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;">College of Pharmacy</h1>
              <p style="margin:4px 0 0;color:#a0b8d0;font-size:13px;">Student Portal — Ticket Notification</p>
            </td>
          </tr>

          <!-- Status Banner -->
          <tr>
            <td style="background:${statusColor};padding:16px 32px;text-align:center;">
              <h2 style="margin:0;color:#ffffff;font-size:20px;">${statusIcon} Request ${statusLabel}</h2>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 20px;color:#333;font-size:15px;">Dear Student,</p>
              <p style="margin:0 0 24px;color:#333;font-size:15px;">
                Your ticket has been reviewed and the status has been updated to
                <strong style="color:${statusColor};">${statusLabel}</strong>.
              </p>

              <!-- Ticket Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fa;border-radius:6px;padding:20px;margin-bottom:24px;">
                <tr>
                  <td style="padding:6px 0;">
                    <span style="color:#666;font-size:13px;">Ticket ID</span><br/>
                    <strong style="color:#1a3a5c;font-size:14px;">${ticketId}</strong>
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;border-top:1px solid #e0e0e0;">
                    <span style="color:#666;font-size:13px;">Subject</span><br/>
                    <strong style="color:#333;font-size:14px;">${title}</strong>
                  </td>
                </tr>
                ${department ? `
                <tr>
                  <td style="padding:6px 0;border-top:1px solid #e0e0e0;">
                    <span style="color:#666;font-size:13px;">Department</span><br/>
                    <strong style="color:#333;font-size:14px;">${department}</strong>
                  </td>
                </tr>` : ""}
                ${priority ? `
                <tr>
                  <td style="padding:6px 0;border-top:1px solid #e0e0e0;">
                    <span style="color:#666;font-size:13px;">Priority</span><br/>
                    <strong style="color:#333;font-size:14px;">${priority.toUpperCase()}</strong>
                  </td>
                </tr>` : ""}
                <tr>
                  <td style="padding:6px 0;border-top:1px solid #e0e0e0;">
                    <span style="color:#666;font-size:13px;">Status</span><br/>
                    <strong style="color:${statusColor};font-size:14px;">${statusLabel}</strong>
                  </td>
                </tr>
              </table>

              ${adminNotes ? `
              <!-- Admin Notes -->
              <div style="border-left:4px solid #1a3a5c;background:#f0f4f8;padding:16px 20px;border-radius:0 6px 6px 0;margin-bottom:24px;">
                <p style="margin:0 0 6px;font-size:13px;color:#666;text-transform:uppercase;letter-spacing:0.5px;">Admin Notes</p>
                <p style="margin:0;color:#333;font-size:14px;">${adminNotes}</p>
              </div>` : ""}

              <p style="margin:0 0 24px;color:#333;font-size:15px;">
                Log in to your Student Portal to view full details and any further updates.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8f9fa;padding:20px 32px;text-align:center;border-top:1px solid #e0e0e0;">
              <p style="margin:0;color:#999;font-size:12px;">
                This is an automated notification from the COP Student Portal.<br/>
                Please do not reply to this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not set");
    return new Response("Missing API key", { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [studentEmail],
      subject,
      html,
    }),
  });

  const data = await res.json();
  console.log("Resend response:", JSON.stringify(data));

  return new Response(JSON.stringify(data), {
    status: res.ok ? 200 : 500,
    headers: { "Content-Type": "application/json" },
  });
});
