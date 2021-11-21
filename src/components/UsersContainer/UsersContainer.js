import { useState, useEffect } from "react"
import api from "../../api";
import UsersList from "../UsersList";

function UsersContainer() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.get('users.json')
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <UsersList users={users} />
        </div>
    );
}

export default UsersContainer;
