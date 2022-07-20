import { BuildContextArgs } from '@graphql-ez/fastify'
import { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from './config'
import { createTransport, SentMessageInfo, Transporter } from "nodemailer";

export type Context = {
  request: BuildContextArgs
  nodemailer: Transporter<SentMessageInfo>
}

const nodemailer = createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export const createContext = (request: BuildContextArgs): Context => {
  return {
    request,
    nodemailer
  }
}