import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";

const sesClient = new SESClient({
  region: process.env.AWS_REGION || "ap-southeast-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const {
      name,
      email,
      phone,
      "project-type": projectType,
      timeline,
      location,
      message,
      leadQuality,
      leadScore,
    } = data;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required" },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL || "info@skilleddemo.com.au";
    const fromEmail =
      process.env.SES_FROM_EMAIL || "noreply@skilleddemo.com.au";

    const projectTypeLabels: Record<string, string> = {
      residential: "Residential Demolition",
      commercial: "Commercial Demolition",
      "strip-out": "Strip Out / Gutting",
      asbestos: "Asbestos Removal",
      rubbish: "Rubbish Removal",
      other: "Other",
    };

    const timelineLabels: Record<string, string> = {
      urgent: "ASAP",
      "1-month": "Within 1 month",
      "3-months": "Within 3 months",
      planning: "Just getting quotes",
    };

    const emailParams = {
      Source: fromEmail,
      Destination: {
        ToAddresses: [toEmail],
      },
      Message: {
        Subject: {
          Data: `New Quote Request from ${name}${leadQuality ? ` [${leadQuality} Priority]` : ""}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: `
              <h2>New Quote Request</h2>
              ${leadQuality ? `<p><strong style="color: ${leadQuality === "High" ? "#22c55e" : leadQuality === "Medium" ? "#f59e0b" : "#6b7280"};">Lead Quality: ${leadQuality}</strong> (Score: ${leadScore})</p>` : ""}

              <h3>Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>

              <h3>Project Details</h3>
              <p><strong>Project Type:</strong> ${projectTypeLabels[projectType] || projectType || "Not provided"}</p>
              <p><strong>Timeline:</strong> ${timelineLabels[timeline] || timeline || "Not provided"}</p>
              <p><strong>Location:</strong> ${location || "Not provided"}</p>

              ${message ? `<h3>Additional Details</h3><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
            `,
            Charset: "UTF-8",
          },
          Text: {
            Data: `
New Quote Request
${leadQuality ? `Lead Quality: ${leadQuality} (Score: ${leadScore})` : ""}

CONTACT INFORMATION
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone}

PROJECT DETAILS
---------------
Project Type: ${projectTypeLabels[projectType] || projectType || "Not provided"}
Timeline: ${timelineLabels[timeline] || timeline || "Not provided"}
Location: ${location || "Not provided"}

${message ? `ADDITIONAL DETAILS\n------------------\n${message}` : ""}
            `,
            Charset: "UTF-8",
          },
        },
      },
      ReplyToAddresses: [email],
    };

    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
