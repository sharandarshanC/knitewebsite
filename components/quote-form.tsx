"use client"

import { type FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react"

type FormState = {
  status: "idle" | "success" | "error"
  message: string
}

const initialState: FormState = { status: "idle", message: "" }

function encodeFormData(formData: FormData) {
  return new URLSearchParams(
    Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
  ).toString()
}

export function QuoteForm() {
  const [state, setState] = useState<FormState>(initialState)
  const [pending, setPending] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const message = String(formData.get("message") || "").trim()

    if (!name || !email || !message) {
      setState({
        status: "error",
        message: "Please fill in your name, email, and project details.",
      })
      return
    }

    setPending(true)
    setState(initialState)

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData),
      })

      if (!response.ok) {
        throw new Error("Quote request failed")
      }

      form.reset()
      setState({
        status: "success",
        message: `Thank you, ${name}. Your quote request has been sent successfully.`,
      })
    } catch {
      setState({
        status: "error",
        message:
          "We could not send the request. Please email deebak@peyoteknitwear.com or call +91 9788852554.",
      })
    } finally {
      setPending(false)
    }
  }

  return (
    <form
      name="quote-request"
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <input type="hidden" name="form-name" value="quote-request" />
      <div className="hidden">
        <Label htmlFor="bot-field">Do not fill this out</Label>
        <Input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" name="name" placeholder="Jane Doe" required className="h-12 rounded-xl px-4" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Work email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@brand.com"
            required
            className="h-12 rounded-xl px-4"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            name="company"
            placeholder="Your brand or label"
            className="h-12 rounded-xl px-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="+1 234 567 890"
            className="h-12 rounded-xl px-4"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="product">Product interest</Label>
          <Select name="product" defaultValue="Babies Wear">
            <SelectTrigger id="product" className="h-12 w-full rounded-xl px-4 text-sm">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Babies Wear">Babies Wear</SelectItem>
              <SelectItem value="Socks & Tights">Socks &amp; Tights</SelectItem>
              <SelectItem value="Both">Both categories</SelectItem>
              <SelectItem value="Private Label">Private label program</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="quantity">Estimated quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            placeholder="e.g. 5,000 pieces / 2,400 pairs"
            className="h-12 rounded-xl px-4"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Project details *</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell us about your order: styles, quantities, target price, and timeline."
          className="min-h-44 rounded-2xl px-4 py-3"
        />
      </div>

      {state.message ? (
        <div
          role="status"
          className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${
            state.status === "success"
              ? "border-brand/30 bg-brand/5 text-brand"
              : "border-destructive/30 bg-destructive/5 text-destructive"
          }`}
        >
          {state.status === "success" ? (
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          )}
          <p>{state.message}</p>
        </div>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="h-12 w-full gap-2 rounded-xl bg-brand-accent px-6 text-brand-accent-foreground hover:bg-brand-accent/90 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Send request
          </>
        )}
      </Button>
    </form>
  )
}
