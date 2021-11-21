import User from "../User";

function UsersList({ users }) {
    return (
        <ul>
            {users.map(user => <User key={user.id} userData={user} />)}
        </ul>
    );
}

export default UsersList;
