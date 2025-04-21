"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      alert("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-foreground/80 mb-8">Feel free to reach out for any questions or opportunities.</p>
            <div className="space-y-6">
              {[{ icon: Mail, label: "Email", value: "sahakumkum27@gmail.com" },
                { icon: Phone, label: "Phone", value: "8721863169" },
                { icon: MapPin, label: "Location", value: "Chennai, India" }].map(({ icon: Icon, label, value }, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="p-3 rounded-full bg-primary/10 text-primary mr-4"><Icon className="h-6 w-6" /></div>
                  <div><h4 className="font-semibold">{label}</h4><p className="text-foreground/80">{value}</p></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject"].map((field) => (
                <input key={field} type="text" name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} value={formState[field]} onChange={handleChange} className="w-full p-3 border rounded-lg" required />
              ))}
              <textarea name="message" placeholder="Message" value={formState.message} onChange={handleChange} className="w-full p-3 border rounded-lg h-32" required></textarea>
              <button type="submit" className="w-full p-3 bg-primary text-white font-bold rounded-lg" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</button>
              {isSubmitted && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
