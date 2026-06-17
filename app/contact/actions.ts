"use server"

export type QuoteState = {
  success: boolean
  message: string
}

export async function submitQuote(_prevState: QuoteState, formData: FormData): Promise<QuoteState> {
  const name = (formData.get("name") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const company = (formData.get("company") as string)?.trim()
  const phone = (formData.get("phone") as string)?.trim()
  const product = formData.get("product") as string
  const quantity = (formData.get("quantity") as string)?.trim()
  const message = (formData.get("message") as string)?.trim()

  if (!name || !email || !message) {
    return { success: false, message: "Please fill in your name, email, and message." }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { success: false, message: "Please enter a valid email address." }
  }

  // In production this would forward to an email service or CRM.
  console.log("[v0] New quote request:", {
    name,
    email,
    company,
    phone,
    product,
    quantity,
    message,
  })

  return {
    success: true,
    message: `Thank you, ${name}. Our team will respond to ${email} within one business day.`,
  }
}
