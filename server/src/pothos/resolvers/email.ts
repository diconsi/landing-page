import { builder } from "../builder";

const emailCreateInput = builder.inputType("emailCreateInput", {
  fields: (t) => ({
    name: t.string({ required: true }),
    email: t.string({ required: true }),
    phone: t.string({ required: true }),
    message: t.string()
  })
});

builder.mutationField("emailSend", (t) =>
  t.field({
    type: 'String',
    args: { input: t.arg({ type: emailCreateInput, required: true }) },
    resolve: async (root, { input }, { nodemailer }) => {
      return nodemailer.sendMail({
        to: "rene@correo.com",
        subject: 'asunto',
        text: JSON.stringify(input)
      })
        .then(() => "envio de correo exitoso")
        .catch((err) => JSON.stringify(err))
    }
  })
);
