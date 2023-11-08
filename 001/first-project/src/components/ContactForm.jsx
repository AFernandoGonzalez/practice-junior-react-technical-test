import { useState } from "react";


export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hi its me ${name} here my email:${email} and message:${ message}`);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>

        
    )
}