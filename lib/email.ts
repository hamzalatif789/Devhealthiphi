import nodemailer from 'nodemailer'
import { google } from 'googleapis'

class EmailService {
  private transporter: nodemailer.Transporter | null = null
  private isInitialized = false

  async initialize() {
    if (this.isInitialized) return

    try {
      const clientId = process.env.CLIENT_ID!
      const clientSecret = process.env.CLIENT_SECRET!
      const refreshToken = process.env.REFRESH_TOKEN!
      const emailUser = process.env.EMAIL_USER!

      const oauth2Client = new google.auth.OAuth2(
        clientId,
        clientSecret,
        'https://developers.google.com/oauthplayground'
      )

      oauth2Client.setCredentials({
        refresh_token: refreshToken,
      })

      const accessToken = await oauth2Client.getAccessToken()

      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: emailUser,
          clientId,
          clientSecret,
          refreshToken,
          accessToken: accessToken.token,
        },
      })

      await this.transporter.verify()
      this.isInitialized = true
    } catch (error) {
      console.error('Failed to initialize email service:', error)
      throw error
    }
  }

  async sendEmail(options: {
    to: string | string[]
    subject: string
    html: string
    text?: string
  }) {
    if (!this.isInitialized) {
      await this.initialize()
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      ...options,
    }

    return this.transporter!.sendMail(mailOptions)
  }
}

export const emailService = new EmailService()
