"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, MapPin, Mail, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // NOTE: Replace with actual Service ID, Template ID, and Public Key from EmailJS
      await emailjs.send(
        "SERVICE_ID", 
        "TEMPLATE_ID", 
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "PUBLIC_KEY"
      );
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#18181B] border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-[#A1A1AA] max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss opportunities? Let's connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-[#0F0F0F] border border-[#27272A] rounded-sm p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-[#A1A1AA]">
                  <div className="p-3 bg-[#18181B] border border-[#27272A] rounded-sm text-[#DC143C]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p>Taguig City, Metro Manila</p>
                    <p>Philippines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-[#A1A1AA]">
                  <div className="p-3 bg-[#18181B] border border-[#27272A] rounded-sm text-[#DC143C]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:Deunashane74@gmail.com" className="hover:text-[#DC143C] transition-colors">
                      Deunashane74@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-3 bg-[#0F0F0F] border border-[#27272A] rounded-sm p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#E4E4E7]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#18181B] border border-[#27272A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#DC143C] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#E4E4E7]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#18181B] border border-[#27272A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#DC143C] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-[#E4E4E7]">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#18181B] border border-[#27272A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#DC143C] transition-colors"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-[#E4E4E7]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#18181B] border border-[#27272A] text-white px-4 py-3 rounded-sm focus:outline-none focus:border-[#DC143C] transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full sm:w-auto px-8 py-3 bg-[#DC143C] text-white font-medium rounded-sm hover:bg-[#991B1B] transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                {status === "success" && <CheckCircle2 size={18} />}
                {status === "idle" && <Send size={18} />}
                {status === "error" && <AlertCircle size={18} />}
                
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent" : status === "error" ? "Error" : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-sm text-green-500 mt-2">Your message has been sent successfully. I will get back to you soon.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
