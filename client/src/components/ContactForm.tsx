import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Col, Container, Grid, Input, Row, Spacer, Textarea } from "@nextui-org/react";
import { emailCreateInput, useMutation } from "../gqty";
import data from "@iconify/icons-ph/barricade-light";

const schema = z.object({
    name: z.string().min(1, { message: "At least 1 characters" }).max(10, { message: "must contain 50 or fewer items" }),
    message: z.string().max(100).optional(),
    email: z.string().email({ message: "wrong email" }),
    phone: z.string().min(10, { message: "At least 10 characters" }).max(12, { message: "must contain 10 or fewer items" })
});

type ContactFormType = z.infer<typeof schema>

export function ContactForm() {
    const [emailSend] = useMutation(
        (mutation, args: { input: emailCreateInput }) => mutation.emailSend(args),
        {
            'onCompleted': (data) => { console.log(data) },
            'onError': (error) => { console.log(error) }
        }
    )

    const { register, formState: { errors }, handleSubmit, reset } = useForm<ContactFormType>({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: ContactFormType) => {
        emailSend({
            args: {
                input: {
                    'email': data.email,
                    'phone': data.phone,
                    'name': data.name,
                    'message': data.message
                }
            }
        })
        console.log(data);
    }

    return (
        <>
            <Row justify="center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        size="xl"
                        labelPlaceholder="Name"
                        helperText={errors.name?.message}
                        helperColor={errors.name ? "error" : "default"}
                        type="text"
                        {...register('name', {
                            required: true,
                            maxLength: 10,
                        })} />
                    <Spacer y={2} />
                    <Input
                        size="xl"
                        labelPlaceholder="E-mail"
                        helperText={errors.email?.message}
                        helperColor={errors.email ? "error" : "default"} {...register('email', {
                            required: true,
                        })} />
                    <Spacer y={2} />
                    <Input
                        size="xl"
                        labelPlaceholder="Phone"
                        helperText={errors.phone?.message}
                        helperColor={errors.phone ? "error" : "default"}
                        type="text" {...register('phone', {
                            required: true,
                        })} />
                    <Spacer y={2} />
                    <Textarea
                        size="xl"
                        labelPlaceholder="Message"
                        helperText={errors.message?.message}
                        helperColor={errors.message ? "error" : "default"}
                        {...register('message')} />
                    <Spacer y={2} />
                    <Row>
                        <Button size="xs" onClick={() => reset()} rounded ghost color="secondary">
                            Reset
                        </Button>
                        <Spacer x={2} />
                        <Button size="xs" type="submit" rounded color="secondary">
                            Enviar
                        </Button>
                    </Row>
                </form>
            </Row>
        </>
    )
}