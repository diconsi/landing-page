import Fastify from 'fastify'
import { PORT, HOST } from './config'
import { ezApp } from './ez'

export const fastifyApp = () =>
  Fastify({ logger: false })
    .register(ezApp.buildApp().fastifyPlugin)
    .listen({ host: HOST, port: PORT })
    .then((address) => console.info(`Server: ${address}`))