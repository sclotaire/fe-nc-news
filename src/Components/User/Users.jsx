import { useEffect, useState } from "react";
import { getUsers } from "../../App";
import UserCard from "./UserCard";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then((usersFromApi) => {
            setUsers(usersFromApi)
        })
    }, [])

    return (
        <main>
            <h1>The creative users of NC Marketplace</h1>
            <ul>
                {users.map((user, index) => {
                    return <UserCard key={index} user={user}/>
                })}
            </ul>
        </main>
    )
}

export default Users