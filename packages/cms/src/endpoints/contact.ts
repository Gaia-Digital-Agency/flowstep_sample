import type { Request, Response } from "express";
import { z } from "zod";
import nodemailer from "nodemailer";
import payload from "payload";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(4000),
});

let mailer: nodemailer.Transporter | null = null;
function getMailer() {
  if (mailer) return mailer;
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER) return null;
  mailer = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return mailer;
}

export async function contactHandler(req: Request, res: Response) {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      error: "validation_failed",
      issues: parsed.error.flatten(),
    });
  }
  const data = parsed.data;

  try {
    // Bypass `create: false` for system-side creation by passing overrideAccess.
    const submission = await payload.create({
      collection: "contact-submissions",
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        message: data.message,
        read: false,
        ip: (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.ip,
        userAgent: req.headers["user-agent"] || "",
      },
      overrideAccess: true,
    });

    const tx = getMailer();
    if (tx) {
      const to = process.env.CONTACT_NOTIFY_TO;
      if (to) {
        tx.sendMail({
          from: process.env.SMTP_FROM || "Flowstep <noreply@gaiada.online>",
          to,
          replyTo: data.email,
          subject: `New contact form submission — ${data.name}`,
          text: `Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "—"}

${data.message}

(submission ${submission.id})`,
        }).catch((err) => payload.logger.error(`SMTP send failed: ${err}`));
      }
    }

    return res.json({ ok: true, id: submission.id });
  } catch (err) {
    payload.logger.error(`/api/contact failed: ${(err as Error).message}`);
    return res.status(500).json({ ok: false, error: "internal_error" });
  }
}
