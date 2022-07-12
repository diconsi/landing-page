import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Checkbox, Container, Grid, Input, Row, Spacer, Textarea } from "@nextui-org/react";
import { emailCreateInput, useMutation } from "../gqty";
import data from "@iconify/icons-ph/barricade-light";

const schema = z.object({
    name: z.string().min(1, { message: "At least 1 characters" }).max(10, { message: "must contain 10 or fewer items" }),
    message: z.string().min(1).optional(),
    email: z.string().email({ message: "wrong email" }),
    phone: z.string().min(1, { message: "At least 1 characters" }).max(10, { message: "must contain 10 or fewer items" })
});

type ContactFormType = {
    name: string,
    email: string,
    message: string,
    phone: string,
}

export default function MyFormH() {
    const [emailsend] = useMutation(
        (mutation, args: { input: emailCreateInput }) => mutation.emailSend(args),
        {
            'onCompleted': (data) => { console.log(data) },
            'onError': (error) => { console.log(error) }
        }
    )


    const { register, formState: { errors }, watch, handleSubmit, reset } = useForm<ContactFormType>({
        // defaultValues: {
        //     name: 'Luis',
        //     address: 'Calle Gran Via'
        // },
        resolver: zodResolver(schema)
    });

    const onSubmit = (data: ContactFormType) => {
        emailsend({
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
            <Grid>
                <Container>
                    <Row justify="center">
                        {/* Nombre: {watch('name')} */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input labelPlaceholder="Name"
                                helperText={errors.name?.message}
                                helperColor={errors.name ? "error" : "default"}
                                type="text"
                                {...register('name', {
                                    required: true,
                                    maxLength: 10,
                                })} />
                            <Input labelPlaceholder="E-mail"
                                helperText={errors.email?.message}
                                helperColor={errors.email ? "error" : "default"} {...register('email', {
                                })} />
                            <Input labelPlaceholder="Phone"
                                helperText={errors.phone?.message}
                                helperColor={errors.phone ? "error" : "default"}
                                type="text" {...register('phone')} />
                            <Checkbox isRounded={true} color="success" defaultSelected={true}>
                                Success
                            </Checkbox>
                            <Row>
                                <Button size="xs" onClick={() => reset()} bordered color="error"> Reset </Button>
                                <Spacer x={2} />
                                <Button size="xs" type="submit" bordered color="success"> Enviar </Button>
                            </Row>
                            <Textarea labelPlaceholder="Message"
                                helperText={errors.message?.message}
                                helperColor={errors.message ? "error" : "default"}
                                {...register('message', {
                                    required: true,
                                })} />
                        </form>
                    </Row>
                </Container>
            </Grid>
        </>
    )
}