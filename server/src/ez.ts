import { CreateApp } from '@graphql-ez/fastify'
import { ezAltairIDE } from '@graphql-ez/plugin-altair'
import { createContext } from './context'
import { schema } from './pothos/schema'

export const ezApp = CreateApp({
  cors: { origin: '*' },
  buildContext: createContext,
  schema,
  ez: {
    plugins: [ezAltairIDE()]
  }
})