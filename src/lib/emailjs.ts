export interface EmailjsProps {
  from_name?: string
  from_company?: string
  from_email: string
  from_phone?: string
  from_description?: string
}

export interface EmailjsStatusProps {
  sending: boolean
  success: boolean
  failure: boolean
  failureDescription: string
}

export async function EmailjsSend(
  data: EmailjsProps,
): Promise<EmailjsStatusProps> {
  const emailjsStatus: EmailjsStatusProps = {
    sending: true,
    success: false,
    failure: false,
    failureDescription: null,
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAIL_USER_ID,
      template_params: {
        reply_to: data.from_email,
        from_name: data?.from_name ? data.from_name : null,
        from_company: data?.from_company ? data.from_company : null,
        from_email: data.from_email,
        from_phone: data?.from_phone ? data.from_phone : null,
        from_description: data?.from_description ? data.from_description : null,
      },
    }),
  }

  const response = await fetch(
    'https://api.emailjs.com/api/v1.0/email/send',
    requestOptions,
  )
    .catch((error) => {
      emailjsStatus.failure = true
      emailjsStatus.failureDescription = error
    })
    .finally(() => {
      emailjsStatus.sending = false
    })

  if (response && response.status === 200) {
    emailjsStatus.success = true
  }

  return { ...emailjsStatus }
}
