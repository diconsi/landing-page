import { BuildContextArgs } from '@graphql-ez/fastify'
import { PrismaClient } from '@prisma/client'
import { DATABASE_URL, SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from './config'
import { createTransport, SentMessageInfo, Transporter } from "nodemailer";

export type Context = {
  prisma: PrismaClient
  request: BuildContextArgs
  nodemailer: Transporter<SentMessageInfo>
}

const prisma = new PrismaClient({
  datasources: { db: { url: DATABASE_URL } }
})

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
    prisma,
    request,
    nodemailer
  }
}