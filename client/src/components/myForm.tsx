
export default function MyForm () { 
    return (
        <>
        <form 
                    method="POST"
                    id="contactForm1"
                    className="contact-us-form"
                    // onSubmit={handleSubmit}
                    action="http://localhost:4000/enviodatos">
            <label >First name:</label> <br />
            <input type="text" id="fname" name="fname" value="John"
            className="form-control"
            ></input> <br />
            <label >Last name:</label> <br />
            <input type="text" id="lname" name="lname" value="J" ></input>
        </form>
        </>
    );
}