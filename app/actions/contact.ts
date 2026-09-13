'use server'

import { revalidatePath } from 'next/cache'

const recipientEmails = 'Lordx111@icloud.com, Kelvinemmanuel551@gmail.com'

export async function sendContactMessage(formData: FormData) {
  const name = formData.get('name')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const message = formData.get('message')?.toString().trim() || ''
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY

  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address' }
  }

  if (message.length < 10) {
    return { success: false, error: 'Message must be at least 10 characters long' }
  }

  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not configured')
    return { success: false, error: 'The contact form is not configured yet. Please try again later.' }
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        to: recipientEmails,
        subject: `New booking request from ${name}`,
        from_name: name,
        name,
        email,
        message,
        botcheck: '',
      }),
    })

    const result = await response.json()

    if (!response.ok || !result.success) {
      console.error('Web3Forms submission failed:', result)
      return { success: false, error: 'Failed to send your request. Please try again.' }
    }

    revalidatePath('/')
    return { success: true, message: 'Your booking request has been sent successfully!' }
  } catch (error) {
    console.error('Error sending booking request:', error)
    return { success: false, error: 'Failed to send your request. Please try again.' }
  }
}
