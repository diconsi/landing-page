import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button, Card, Col, Input, Loading, Row, Spacer, Textarea, useTheme } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import paperPlaneRight from '@iconify/icons-ph/paper-plane-right'
import { useMutation } from '../gqty'
import type { emailCreateInput } from '../gqty'

const schema = z.object({
  name: z.string().min(1).max(10),
  email: z.string().email(),
  phone: z.string().min(10).max(12),
  message: z.string().max(100).optional(),
})

type ContactFormType = z.infer<typeof schema>

export function ContactForm() {
  const [emailSend, emailSendMutation] = useMutation(
    (mutation, args: { input: emailCreateInput }) => mutation.emailSend(args),
    {
      // TODO: Replace alert with a notification
      onCompleted: (data) => { alert(data) },
      onError: (error) => { alert(error) },
    },
  )

  const form = useForm<ContactFormType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })
  const { formState: { errors } } = form

  const handleSubmit = (data: ContactFormType) => {
    emailSend({
      args: {
        input: {
          email: data.email,
          phone: data.phone,
          name: data.name,
          message: data.message,
        },
      },
    })
  }
  const { theme } = useTheme()
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      {emailSendMutation.error
      && (
      <Card css={{ backgroundColor: theme?.colors.error.value }}>
        <Card.Body>{emailSendMutation.error?.message}</Card.Body>
      </Card>
      )}
      {emailSendMutation.data
      && (
        <Card css={{ backgroundColor: theme?.colors.secondaryLightActive.value }}>
          <Card.Body>{emailSendMutation.data}</Card.Body>
        </Card>
      )}
      <Col>
        <Input
          fullWidth
          labelPlaceholder="Name"
          helperText={errors.name?.message}
          helperColor={errors.name ? 'error' : 'default'}
          type="text"
          {...form.register('name')}
        />
        <Spacer y={2} />
        <Row>
          <Input
            fullWidth
            labelPlaceholder="Email"
            helperText={errors.email?.message}
            helperColor={errors.email ? 'error' : 'default'}
            {...form.register('email')}
          />
          <Spacer />
          <Input
            fullWidth
            labelPlaceholder="Phone"
            helperText={errors.phone?.message}
            helperColor={errors.phone ? 'error' : 'default'}
            type="tel"
            {...form.register('phone')}
          />
        </Row>
        <Spacer y={2} />
        <Textarea
          fullWidth
          labelPlaceholder="Message"
          helperText={errors.message?.message}
          helperColor={errors.message ? 'error' : 'default'}
          {...form.register('message')}
        />
        <Spacer y={2} />
        <Row justify="flex-end">
          <Button onClick={() => form.reset()} auto rounded flat color="secondary">
            Reset
          </Button>
          <Spacer />
          <Button
            type="submit"
            auto
            rounded
            color="secondary"
            iconRight={emailSendMutation.isLoading
              ? (<Loading type="spinner" color="currentColor" size="sm" />)
              : (<Icon icon={paperPlaneRight} />)
          }
          >
            Send
          </Button>
        </Row>
      </Col>
    </form>
  )
}
