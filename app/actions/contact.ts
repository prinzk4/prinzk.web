'use server'

import { revalidatePath } from 'next/cache'

export async function sendContactMessage(_previousState: unknown, formData: FormData) {
  const name = formData.get('name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''

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
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        subject: `New booking enquiry from ${name}`,
        from_name: 'IMANU\'EL RMG Contact Form',
        name,
        email,
        message,
      }),
    })

    const result = await response.json()
    if (!response.ok || !result.success) {
      return { success: false, error: 'Failed to send message. Please try again.' }
    }

    revalidatePath('/')
    return { success: true, message: 'Your message has been sent successfully!' }
  } catch (error) {
    console.error('Error sending message:', error)
    return { success: false, error: 'Failed to send message. Please try again.' }
  }
}
