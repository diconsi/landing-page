import { builder } from '../builder'
import { User } from '@prisma/client'

export const UserObject = builder.objectRef<User>('User')

UserObject.implement({
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    email: t.exposeString('email'),
    phone: t.exposeString('phone'),
  })
})

builder.queryField('users', t =>
  t.field({
    type: [UserObject],
    resolve: (root, args, { prisma }) =>
      prisma.user.findMany(),
  }),
)

const userCreateInput = builder.inputType("userCreateInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    email: t.string({ required: true }),
    phone: t.string({ required: true }),
  })
});

builder.mutationField("userCreate", (t) =>
  t.field({
    type: UserObject,
    args: { input: t.arg({ type: userCreateInput, required: true }) },
    resolve: async (root, { input }, { prisma }) => {
      return prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
          phone: input.phone
        }
      });
    }
  })
);



