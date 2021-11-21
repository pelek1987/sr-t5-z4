function User({userData}) {

    const {id, name, email, phone} = userData;

    return (
        <li>
            <h2>{name}</h2>
            <p>e-mail: {email}</p>
            <p>phone: {phone}</p>
        </li>
    );
}

export default User;
