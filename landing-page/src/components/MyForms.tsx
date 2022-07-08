import { useForm } from "react-hook-form";
import { ageValidator } from "./validators";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Card, Checkbox, Container, Grid, Input, Row, Text } from "@nextui-org/react";

const schema = z.object({
    name: z.string().min(1).max(10, {message: "No más de 10 caracteres"}),
    age: z.number().min(18, {message: "Edad minima de 18 años"}),
    email: z.string().email({ message: "Correo incorrecto" }),
    address: z.string().min(1),
  });

export default function MyFormH () {
    const { register, formState: { errors }, watch, handleSubmit } = useForm<{
        name: string,
        email: string,
        address: string,
        age: number,
    }>({
        // defaultValues: {
        //     name: 'Luis',
        //     address: 'Calle Gran Via'
        // },
        resolver: zodResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <Grid>
        <Container>
            <Row justify="center">
        {/* Nombre: {watch('name')} */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <Text h1
            size={16}
            css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">Name:</Text>
                <Input type="text" {...register('name', {
                    required: true,
                    maxLength: 10, 
                })}/>
            {errors.name?.message && <p>{errors.name?.message}</p>}
            </div>
                <div>
                <Text h1
        size={16}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold">Addres:</Text>
                    <Input type="text" {...register('address', {
                        required: true, 
                    })}/>
            {errors.address?.message && <p>{errors.address?.message}</p>}
                </div>
            <div>
            <Text h1
        size={16}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold">E-mail:</Text>
        <Input type="text" {...register('email', {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
        })}></Input>
            {errors.email?.message && <p>{errors.email?.message}</p>}
            </div>
            <div>
            <Text h1
        size={16}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold">Age:</Text>
        <Input type="number" {...register('age',{ valueAsNumber: true })}/>
            {errors.age?.message && <p>{errors.age?.message}</p>}
            </div>
            <div>
        <Checkbox color="success" defaultSelected={true}>
        Success
        </Checkbox>
            </div>
            <Button  flat color="success"> Enviar </Button>
        </form>
        </Row>
        </Container>
        </Grid>
        </>
    )
}