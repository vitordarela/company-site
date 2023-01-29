/*
  name
  company
  email
  phone
  description

  template_params: {
        to_name: 'CodeBe - Request form',
        reply_to: data.email,
        from_name: data.name,
        from_company: data.company,
        from_email: data.email,
        from_phone: data.phone,
        from_description: data.description,
  },
*/

export async function EmailjsSend(data) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
      template_id: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      user_id: process.env.REACT_APP_EMAIL_USER_ID,
      template_params: {
        to_name: 'CodeBe - Request form',
        reply_to: data.email,
        from_name: data.name,
        from_company: data.company,
        from_email: data.email,
        from_phone: data.phone,
        from_description: data.description,
      },
    }),
  }

  const response = await fetch(
    'https://api.emailjs.com/api/v1.0/email/send',
    requestOptions,
  ).catch((error) => console.log(error))

  if (response.status === 200) {
    return { isEmailSent: true }
  }

  return { isEmailSent: false }
}
