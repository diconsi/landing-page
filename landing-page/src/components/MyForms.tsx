import { useForm } from "react-hook-form";
import { ageValidator } from "./validator";


export default function MyFormH () {
    const { register, formState: { errors }, handleSubmit } = useForm<{
        name: string,
        email: string,
        adress: string,
        age: string,
        country: string
    }>();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>name:</label>
                <input type="text" {...register('name', {
                    required: true,
                    maxLength: 10, 
                })}/>
                { errors.name?.type === 'required'&& <p>El campo es requerido</p>}
                { errors.name?.type === 'maxLength' && <p>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>
                <div>
                    <label>Adress:</label> 
                    <input type="text" {...register('adress', {
                        required: true, 
                    })}/>
                </div>
            <div>
                <label>E-mail:</label>
                <input type="text" {...register('email', {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })}></input> <br />
                { errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                <br />
            </div>
            <div>
                <label>Age:</label>
                <input type="text" {...register('age',{
                    validator: ageValidator
                })}/>
                {errors.age && <p>La edad debe estar entre 18 y 65</p>}
            </div>
            <div>
                <label>Country:</label>
                <select {...register('country')}>
                    <option value="es"> España</option>
                    <option value="it"> Italia</option>
                </select>
            </div>
                <input type="submit" value="Enviar" />
        </form>
        </>
    )
}