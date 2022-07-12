import { builder } from '../builder'
import { User } from '@prisma/client'

export const UserObject = builder.objectRef<User>('User')

UserObject.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString ('name'),
    email: t.exposeString('email'),
    phone: t.exposeString('phone'),
  })
})
