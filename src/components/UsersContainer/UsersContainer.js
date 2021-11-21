import { useState, useEffect, useRef } from "react"
import api from "../../api";
import UsersList from "../UsersList";
import UserSearch from "../UserSearch/UserSearch";

function UsersContainer() {

    const userSearchFormToggler = useRef();

    const [users, setUsers] = useState([]);
    const [fullName, setFullName] = useState('');
    const [isUserSearchToggledOn, setIsUserSearchToggledOn] = useState(false);

    useEffect(() => {
        api.get('users.json')
            .then(data => setUsers(data));
        userSearchFormToggler.current.focus();
    }, []);

    const handleChange = (e) => {
        setFullName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchedUsers = users.filter(user => user.name.toLowerCase().includes(fullName.toLowerCase()));
        setUsers(searchedUsers);
    }

    const toggleUserSearchForm = (e) => {
        e.preventDefault();
        if(e.keyCode === 13) {
            setIsUserSearchToggledOn(true);
        }
        if(e.keyCode === 27) {
            setIsUserSearchToggledOn(false);
        }
    }

    return (
        <div>
            <div>
                To search user press
                <input
                    ref={userSearchFormToggler}
                    onKeyDown={toggleUserSearchForm}
                    value="ENTER"
                    type="submit"
                />
            </div>
            {isUserSearchToggledOn && <UserSearch handleChange={handleChange} handleSubmit={handleSubmit} />}
            <UsersList users={users} />
        </div>
    );
}

export default UsersContainer;
