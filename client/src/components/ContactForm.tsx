import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Avatar, Button, Card, Input, Loading, Row, Spacer, Text, Textarea, useTheme } from '@nextui-org/react'
import { Icon } from '@iconify/react'
import paperPlaneRight from '@iconify/icons-ph/paper-plane-right'
import x from '@iconify/icons-ph/x'
import check from '@iconify/icons-ph/check'
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
  const [emailSend, mutation] = useMutation(
    (mutation, args: { input: emailCreateInput }) => mutation.emailSend(args),
    {
      // TODO: Replace alert with a notification
      // onCompleted: (data) => { alert(data) },
      // onError: (error) => { alert(error) },
    },
  )

  const form = useForm<ContactFormType>({
    mode: 'onChange',
    resolver: zodResolver(schema),
  })
  const { formState } = form

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
      {mutation.error
      && (
        <Card css={{ backgroundColor: theme?.colors.errorLight.value }}>
          <Card.Body>
            <Row align="center">
              <Avatar color="error" squared icon={<Icon icon={x} fill="currentColor" />} />
              <Spacer />
              <Text>{mutation.error?.message}</Text>
            </Row>
          </Card.Body>
        </Card>
      )}
      {mutation.data
      && (
        <Card>
          <Card.Body css={{ backgroundColor: theme?.colors.successLight.value }}>
            <Row align="center">
              <Avatar color="success" squared icon={<Icon icon={check} fill="currentColor" />} />
              <Spacer />
              <Text>{mutation.data}</Text>
            </Row>
          </Card.Body>
        </Card>
      )}
      <Spacer />
      <Spacer />
      <Input
        fullWidth
        labelPlaceholder="Name"
        helperText={formState.errors.name?.message}
        helperColor={formState.errors.name ? 'error' : 'default'}
        type="text"
        {...form.register('name')}
      />
      <Spacer y={2} />
      <Row>
        <Input
          fullWidth
          labelPlaceholder="Email"
          helperText={formState.errors.email?.message}
          helperColor={formState.errors.email ? 'error' : 'default'}
          {...form.register('email')}
        />
        <Spacer />
        <Input
          fullWidth
          labelPlaceholder="Phone"
          helperText={formState.errors.phone?.message}
          helperColor={formState.errors.phone ? 'error' : 'default'}
          type="tel"
          {...form.register('phone')}
        />
      </Row>
      <Spacer y={2} />
      <Textarea
        fullWidth
        labelPlaceholder="Message"
        helperText={formState.errors.message?.message}
        helperColor={formState.errors.message ? 'error' : 'default'}
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
          iconRight={mutation.isLoading
            ? (<Loading type="spinner" color="currentColor" size="sm" />)
            : (<Icon icon={paperPlaneRight} />)
          }
        >
          Send
        </Button>
      </Row>
    </form>
  )
}
