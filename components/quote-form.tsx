"use client"

import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { submitQuote, type QuoteState } from "@/app/contact/actions"
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
import { CheckCircle2, AlertCircle, Send, Loader2 } from "lucide-react"

const initialState: QuoteState = { success: false, message: "" }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full gap-2 sm:w-auto">
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
  )
}

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuote, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-6">
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
            state.success
              ? "border-brand/30 bg-brand/5 text-brand"
              : "border-destructive/30 bg-destructive/5 text-destructive"
          }`}
        >
          {state.success ? (
            <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          )}
          <p>{state.message}</p>
        </div>
      ) : null}

      <SubmitButton />
    </form>
  )
}
