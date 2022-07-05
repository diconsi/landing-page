import { useForm } from "react-hook-form"

export default function MyFormH () {
    const { register, handleSubmit } = useForm ();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <br />
                <label>First Name:</label> <br />
                <input type="text" {...register('name', {
                    required: true,
                    
                })}></input> <br />
                <br />
            </div>
            <div>
                <label>Last Name:</label> <br />
                <input type="select" {...register('Lname')}></input> <br />
                <br />
                <label>Select</label>
                <select {...register('onumer')}>
                    <option value="1"> 1</option>
                    <option value="2"> 2</option>
                </select>
            </div>
                <input type="submit" value="Enviar" />
        </form>
        </>
    )
}