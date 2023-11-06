import { useEffect, useState } from "react"

const USER_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

export const UserList = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(USER_API_ENDPOINT, {
            method: "GET"
        })
        .then((res)=> {
            if(res.ok){
                return res.json()
            }
            throw new Error("Data was not found")
        })
        .then(data =>{
            setUsers(data)
        })
        .catch(error=> setError(error.message))
    }, [users, error])

    return (
        <section>
        <h1>User List</h1>
        
            <ul style={{ listStyle: "none"}}>
            {users.map((user) =>{
                return (
                <li key={user.id}>
                    <h3>Name : {user.name}</h3>
                    <span> Email: {user.email}</span>
                </li>
                )
            })}
            </ul>

            {error ? error : ''}
        </section>
    )
}