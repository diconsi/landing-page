import { BuildContextArgs } from '@graphql-ez/fastify'
import { PrismaClient } from '@prisma/client'
import { DATABASE_URL } from './config'

export type Context = {
  prisma: PrismaClient
  request: BuildContextArgs
}

const prisma = new PrismaClient({
  datasources: { db: { url: DATABASE_URL } }
})

export const createContext = (request: BuildContextArgs): Context => {
  return {
    prisma,
    request
  }
}