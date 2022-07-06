import { appendErrors, useForm } from "react-hook-form"

export default function MyFormH () {
    const { register, formState: { errors }, handleSubmit } = useForm<{
        name: string,
        lastName: string,
        email: string,
        phone: number
    }>();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <br />
                <label>Name:</label> <br />
                <input type="text" {...register('name', {
                    required: true,
                    maxLength: 10, 
                })}/>
                { errors.name?.type === 'required' && <p>El campo es requerido</p>}
                { errors.name?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
                <br />
                <br />
            </div>
            <div>
                <label>E-mail:</label> <br />
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })}></input> <br />
                { errors.name?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                <br />
            </div>
            <div>
                <label>Last Name:</label> <br />
                <input type="select" {...register('lastName', {
                    required: true, 
                })}></input> <br />
                <br />
                <label>Phone</label>
                <select {...register('phone')}>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                </select>
            </div>
                <input type="submit" value="Enviar" />
        </form>
        </>
    )
}