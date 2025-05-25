import { Resend } from "resend";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function sendEmail(formData: any) {
  try {
    const html = `
      <h2>New Book Demo Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.workEmail}</p>
      <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
      <p><strong>Company:</strong> ${formData.companyName}</p>
      <p><strong>SKU Count:</strong> ${formData.skuCount}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
      <p><strong>Consent:</strong> ${formData.consent ? "Yes" : "No"}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "Your Company <noreply@yourdomain.com>",
      to: ["saeed@hudorganics.com"],
      subject: "New Book Demo Submission",
      html,
      replyTo: formData.workEmail,
    });

    if (error) {
      console.error("Resend API error:", error);
      throw error;
    }

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error in sendEmail:", error);
    throw error;
  }
}
