"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/lib/products"
import { business } from "@/lib/business"

const PRODUCT_OPTIONS = [...products.map((p) => ({ value: p.slug, label: p.name })), { value: "other", label: "Other / Not sure" }]

function productLabel(slug: string): string {
  return PRODUCT_OPTIONS.find((p) => p.value === slug)?.label ?? "Not specified"
}

export default function QuoteForm({ initialProduct }: { initialProduct?: string }) {
  const preselected = PRODUCT_OPTIONS.some((p) => p.value === initialProduct) ? initialProduct! : ""

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    product: preselected,
    roomSize: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, product: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `*Quote Request from Acoustic Treats Website*

*Customer Details:*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone || "Not provided"}

*Product Interest:* ${formData.product ? productLabel(formData.product) : "Not specified"}
*Room Size:* ${formData.roomSize || "Not specified"}

*Additional Details:*
${formData.message || "No additional details provided"}

Please provide a quote for the above requirements. Thank you!`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `${business.whatsappBase}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  const labelClass = "block font-body text-[10px] tracking-[0.22em] uppercase text-acoustic-gold mb-2.5"
  const fieldClass =
    "bg-acoustic-card border-acoustic-border text-acoustic-cream placeholder:text-acoustic-dim focus:border-acoustic-gold focus:ring-acoustic-gold/20 font-body rounded-none h-12"

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>First Name</label>
          <Input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleInputChange} autoComplete="given-name" required placeholder="Ahmad" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name</label>
          <Input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} autoComplete="family-name" required placeholder="Razali" className={fieldClass} />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email Address (optional)</label>
        <Input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} autoComplete="email" placeholder="your@email.com" className={fieldClass} />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>Phone Number (optional)</label>
        <Input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleInputChange} autoComplete="tel" placeholder="+60 1X-XXX XXXX" className={fieldClass} />
      </div>

      {/* Product */}
      <div>
        <label htmlFor="product" className={labelClass}>Product of Interest</label>
        <Select value={formData.product} onValueChange={handleSelectChange}>
          <SelectTrigger id="product" className="bg-acoustic-card border-acoustic-border text-acoustic-cream focus:ring-acoustic-gold/20 focus:border-acoustic-gold font-body rounded-none h-12 data-[placeholder]:text-acoustic-dim">
            <SelectValue placeholder="Select a product" />
          </SelectTrigger>
          <SelectContent className="bg-acoustic-card border-acoustic-border font-body">
            {PRODUCT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value} className="text-acoustic-cream focus:bg-acoustic-gold/10 focus:text-acoustic-gold">
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Room size */}
      <div>
        <label htmlFor="roomSize" className={labelClass}>Approximate Room Size</label>
        <Input type="text" name="roomSize" id="roomSize" value={formData.roomSize} onChange={handleInputChange} placeholder="e.g. 4m x 5m" className={fieldClass} />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Additional Details or Questions</label>
        <Textarea name="message" id="message" rows={5} value={formData.message} onChange={handleInputChange} placeholder="Describe your room, current setup, or any specific requirements…" className="bg-acoustic-card border-acoustic-border text-acoustic-cream placeholder:text-acoustic-dim focus:border-acoustic-gold focus:ring-acoustic-gold/20 font-body rounded-none resize-none" />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-3 font-body text-[11px] tracking-[0.2em] uppercase bg-acoustic-gold text-acoustic-black py-4 px-8 hover:bg-acoustic-gold-light transition-colors font-medium"
      >
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
        Send Quote Request via WhatsApp
      </button>

      <p className="font-body text-[11px] text-acoustic-dim text-center leading-relaxed">
        Clicking above opens WhatsApp with your request pre-filled. We respond within business hours: {business.hours}.
      </p>
    </form>
  )
}
