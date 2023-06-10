const nodemailer = require('nodemailer')
import axios from 'axios'
import { getNamedMiddlewareRegex } from 'next/dist/shared/lib/router/utils/route-regex'

const recaptchaValidation = async token => {
  const result = await (async () => {
    try {
      const response = await axios({
        url: 'https://www.google.com/recaptcha/api/siteverify',
        method: 'POST',
        params: {
          secret: process.env.GOOGLE_RECAPTCHA_SECRETKEY,
          response: token,
        },
      })
      return { successful: true, message: response.data.score }
    } catch (error) {
      let message
      if (error.response) {
        message = `reCAPTCHA server responded with non 2xx code: ${error.response.data}`
      } else if (error.request) {
        message = `No reCAPTCHA response received: ${error.request}`
      } else {
        message = `Error setting up reCAPTCHA response: ${error.message}`
      }
      return { successful: false, message }
    }
  })()
  return result
}

export default async function formHandler(req, res) {
  if (req.method !== 'POST') res.status(405).send('Method Not Allowed')
  const {
    fullName,
    email,
    phone,
    organization,
    role,
    location,
    message,
    token,
  } = req.body
  const recaptchaResult = await recaptchaValidation(token)
  if (!recaptchaResult.successful) {
    return {
      statusCode: 400,
      body: recaptchaResult.message,
    }
  } else {
    const googleCaptchaScore = Number(recaptchaResult.message)
    if (googleCaptchaScore > 0.7) {
      // PASSES RECAPTCHA - SEND MESSAGE
      let toAddress
      switch (location) {
        case 'Alberta':
          toAddress = 'epgedmonton@epgpipe.com'
          break
        case 'Saskatchwan':
          toAddress = 'epgsaskatoon@epgpipe.com'
          break
        case 'Quebec':
          toAddress = 'epglaval@epgpipe.com'
          break
        case 'Maritime':
          toAddress = 'epgdartmouth@epgpipe.com'
          break
        case 'NWT':
          toAddress = 'epgedmonton@epgpipe.com'
          break
        case 'Yukon, Nunavut':
          toAddress = 'epgpacific@epgpipe.com'
          break
        default:
          toAddress = 'epgpacific@epgpipe.com'
      }
      const messageBody = `<div style="margin: 20px auto;">
        <ul>
          <li>Full Name: ${fullName}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Organization: ${organization}</li>
          <li>Role: ${role}</li>
          <li>Profit Centre: ${location}</li>
          <li>Message:</li>
        </ul>
        <p>${message}</p>
      </div>`
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        user: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          type: 'login',
          user: process.env.SENDING_EMAIL,
          pass: process.env.SENDING_PASSWORD, // generated ethereal password
        },
      })
      let mailOptions = {
        from: process.env.SENDING_EMAIL,
        to: toAddress,
        subject: `Website Contact Request`,
        html: messageBody,
      }
      try {
        let info = await transporter.sendMail(mailOptions)
        if (info.accepted.length > 0) {
          res.status(200).send('Message Sent')
        } else {
          res.status(400).send('Message not sent')
        }
      } catch (err) {
        console.log('error ', err)
      }
    } else {
      res.status(400).send('Action not taken. Possible bot detected')
    }
  }
}
