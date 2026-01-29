'use server'

import { revalidatePath } from 'next/cache'

export async function sendContactMessage(formData: FormData) {
  const name = formData.get('name')?.toString() || ''
  const email = formData.get('email')?.toString() || ''
  const message = formData.get('message')?.toString() || ''

  // Validation
  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address' }
  }

  if (message.length < 10) {
    return { success: false, error: 'Message must be at least 10 characters long' }
  }

  try {
    // Simulate sending email to both addresses
    console.log('Contact form submitted:', { name, email, message })
    console.log('Email would be sent to: Lordx111@icloud.com, IMANUELRMG@PROTON.ME')

    // In production, you would use an email service like SendGrid, Mailgun, or AWS SES
    // For now, we'll just simulate the email sending

    revalidatePath('/')
    return { success: true, message: 'Your message has been sent successfully!' }
  } catch (error) {
    console.error('Error sending message:', error)
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
