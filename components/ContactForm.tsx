"use client";
import { useEffect, useState } from "react";
import { email, whatsapp } from "@/lib/site";
export function ContactForm() {
  const [interest, setInterest] = useState("General enquiry");
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("interest");
    if (value) setInterest(value);
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body =
          "Name: " +
          data.get("name") +
          "\nOrganisation: " +
          data.get("organisation") +
          "\nReply email: " +
          data.get("email") +
          "\nProgramme of interest: " +
          interest +
          "\n\n" +
          data.get("message");
        window.location.href =
          "mailto:" +
          email +
          "?subject=" +
          encodeURIComponent("Website enquiry: " + interest) +
          "&body=" +
          encodeURIComponent(body);
        setReady(true);
      }}
      className="contact-form"
    >
      <h2>Start a conversation</h2>
      <p>
        This form prepares an email in your email app. Review it and press send
        there to deliver your enquiry.
      </p>
      <label>
        Your name
        <input name="name" autoComplete="name" required maxLength={120} />
      </label>
      <label>
        Email address
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={200}
        />
      </label>
      <label>
        Organisation <span>(optional)</span>
        <input
          name="organisation"
          autoComplete="organization"
          maxLength={200}
        />
      </label>
      <label>
        Programme of interest
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          {[
            "General enquiry",
            "Community programmes",
            "Microcredit",
            "Enterprise support",
            "Skills and livelihoods",
            "Volunteering",
            "Partnership",
            "Donation",
            "Referral",
            "Reports and learning",
            "Safeguarding",
          ].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      <label>
        Your message
        <textarea name="message" rows={5} required maxLength={3000} />
      </label>
      <p className="form-note">
        Please do not include medical, financial or other sensitive personal
        details. For referrals, ask about the process before sharing someone
        else’s information.
      </p>
      <button className="button-primary" type="submit">
        Prepare email ↗
      </button>
      {ready && (
        <p role="status" className="form-status">
          Your email draft has been prepared. It has not been sent by this
          website. If your email app did not open, email {email} directly or{" "}
          <a href={whatsapp}>contact us on WhatsApp</a>.
        </p>
      )}
    </form>
  );
}
