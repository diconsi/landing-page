import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button, Checkbox, Container, Grid, Input, Row, Spacer} from "@nextui-org/react";

const schema = z.object({
    name: z.string().min(1, {message: "At least 1 characters"}).max(10, {message: "must contain 10 or fewer items"}),
    lastName: z.string().min(1),
    email: z.string().email({ message: "wrong email" }),
    phone: z.number().min(1, {message: "At least 1 characters"}).max(10, {message: "must contain 10 or fewer items"})
  });

export default function MyFormH () {
    const { register, formState: { errors }, watch, handleSubmit, reset } = useForm<{
        name: string,
        email: string,
        lastName: string,
        phone: number,
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
                <Spacer y={1} />
                <Input labelPlaceholder="Name" type="text" {...register('name', {
                    required: true,
                    maxLength: 10, 
                })}/>
                {errors.name?.message && <p>{errors.name?.message}</p>}
                <Spacer y={2} />
            </div>
                <div>
                <Spacer y={1} />
                <Input labelPlaceholder="Last Name" type="text" {...register('lastName', {
                    required: true, 
                })}/>
                <Spacer y={2} />
                {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
                </div>
            <div>
                <Spacer y={1} />     
                <Input labelPlaceholder="E-mail" {...register('email', {
                })}/>
                {errors.email?.message && <p>{errors.email?.message}</p>}
                <Spacer y={2} />
            </div>
            <div>
                <Spacer y={1} /> 
                <Input  labelPlaceholder="Phone" type="tel" {...register('phone',{ valueAsNumber: true })}/>
                {errors.phone?.message && <p>{errors.phone?.message}</p>}
                <Spacer y={2} />
            </div>
            <div>
                <Checkbox isRounded={true} color="success" defaultSelected={true}>
                Success
                </Checkbox>
                <Spacer y={2} />
            </div>
            <Row>
            <Button size="xs" onClick={()=>reset()} bordered color="error"> Reset </Button>
            <Spacer x={2} />
            <Button size="xs" type="submit" bordered color="success"> Enviar </Button>
            </Row>
        </form>
        </Row>
        </Container>
        </Grid>
        </>
    )
}