/**
 * Contact page component module.
 *
 * @module ContactPage
 * @description Provides a contact form with validation and submission handling.
 */
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

/**
 * Contact form state shape.
 *
 * @typedef FormState
 * @property name - Full name input value.
 * @property subject - Subject input value.
 * @property email - Email input value.
 * @property body - Message body input value.
 */
type FormState = {
  name: string
  subject: string
  email: string
  body: string
}

/**
 * Validation errors keyed by form field.
 *
 * @typedef FormErrors
 * @property [field] - Error message for a specific form field.
 */
type FormErrors = Partial<Record<keyof FormState, string>>

/**
 * Contact component rendering the contact form with validation and submission logic.
 *
 * @component
 * @returns The contact form element.
 */
export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    subject: '',
    email: '',
    body: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  /**
   * Validates form values and returns any errors.
   *
   * @param values - The current form values.
   * @returns Validation errors keyed by field name.
   */
  function validate(values: FormState): FormErrors {
    const errs: FormErrors = {}
    if (values.name.trim().length < 3) {
      errs.name = 'Full name must be at least 3 characters'
    }
    if (values.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters'
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(values.email)) {
      errs.email = 'Must be a valid email'
    }
    if (values.body.trim().length < 3) {
      errs.body = 'Message must be at least 3 characters'
    }
    return errs
  }

  /**
   * Handles changes to form inputs, updating state and clearing field errors.
   *
   * @param e - The input change event.
   */
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    // clear the error for this field as user types
    setErrors((e) => ({ ...e, [name]: undefined }))
  }

  /**
   * Handles form submission, performing validation and showing a success toast on valid submit.
   *
   * @param e - The form submit event.
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
  
    console.log(form)
    toast.success('Message sent! We’ll be in touch soon.')
    
    setForm({ name: '', subject: '', email: '', body: '' })
    setErrors({})
  }

  return (
    <>
      {/* Form */}
      <div className="max-w-xl mx-auto mt-8 space-y-6">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Full name */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Full name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                errors.name ? 'border-red-600' : ''
              }`}
              required
              minLength={3}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                errors.subject ? 'border-red-600' : ''
              }`}
              required
              minLength={3}
            />
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                errors.email ? 'border-red-600' : ''
              }`}
              required
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Body */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="body">
              Message
            </label>
            <textarea
              id="body"
              name="body"
              rows={5}
              value={form.body}
              onChange={handleChange}
              className={`w-full rounded border px-3 py-2 focus:outline-none focus:ring ${
                errors.body ? 'border-red-600' : ''
              }`}
              required
              minLength={3}
            />
            {errors.body && (
              <p className="mt-1 text-sm text-red-600">{errors.body}</p>
            )}
          </div>

          <Button type="submit" size="lg" className="mt-4">
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}
