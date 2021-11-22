import { useState, useEffect, useRef } from "react"
import api from "../../api";
import UsersList from "../UsersList";
import UserSearch from "../UserSearch/UserSearch";

function UsersContainer() {

    const userSearchFormToggler = useRef();

    const [users, setUsers] = useState([]);
    const [fullName, setFullName] = useState("");
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
        e.target.reset();
    }

    const handleReset = () => {
        api.get("users.json")
            .then(data => setUsers(data));
        setIsUserSearchToggledOn(false);

    }

    const toggleUserSearchForm = (e) => {
        e.preventDefault();
        if(e.keyCode === 13) {
            setIsUserSearchToggledOn(true);
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
                    type="button"
                />
            </div>
            {isUserSearchToggledOn && <UserSearch
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleReset={handleReset} />}
            <UsersList users={users} />
        </div>
    );
}

export default UsersContainer;
