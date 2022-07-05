import { useForm } from "react-hook-form"

export default function MyFormH () {
    const { register, handleSubmit } = useForm ();

    return (
        <>
        <form>
            <div>
                <br />
                <label>First Name:</label> <br />
                <input type="text" name=""></input> <br />
                <br />
            </div>
            <div>
                <label>Last Name:</label> <br />
                <input type="text" name=""></input> <br />
                <br />
            </div>
        </form>
        </>
    )
}