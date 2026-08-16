"use client";

import { useState } from "react";
import type { IContactFormData } from "@/types/interfaces";

const initialFormData: IContactFormData = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState<IContactFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section id="contact" className="bg-card py-20">
      <div className="mx-auto max-w-xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 font-display text-4xl text-primary-dark">Get in Touch 💌</h2>
          <p className="font-semibold text-body">
            Ready to order? Have questions? Just want to share inspo? I love to hear from you.
          </p>
        </div>

        {isSubmitted ? (
          <div className="rounded-3xl bg-background py-16 text-center">
            <div className="mb-4 text-5xl">💅✨</div>
            <h3 className="mb-2 font-display text-2xl text-primary-dark">Message sent!</h3>
            <p className="font-semibold text-body">
              I&apos;ll be in touch soon. Can&apos;t wait to create something beautiful for you!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-bold text-body">Your Name</label>
              <input
                type="text"
                required
                placeholder="Mollie Mani-Lover"
                value={formData.name}
                onChange={(event) =>
                  setFormData((data) => ({ ...data, name: event.target.value }))
                }
                className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm font-semibold text-foreground outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-body">Email Address</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={formData.email}
                onChange={(event) =>
                  setFormData((data) => ({ ...data, email: event.target.value }))
                }
                className="w-full rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm font-semibold text-foreground outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-body">
                Tell Mollie what you have in mind
              </label>
              <textarea
                required
                rows={5}
                placeholder="I'd love a set inspired by the ocean — teal, pearls, maybe a mermaid tail..."
                value={formData.message}
                onChange={(event) =>
                  setFormData((data) => ({ ...data, message: event.target.value }))
                }
                className="w-full resize-none rounded-2xl border-2 border-border bg-background px-4 py-3 text-sm font-semibold text-foreground outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-br from-primary to-accent py-4 text-base font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:brightness-110 active:scale-95"
            >
              Send Message ✨
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
