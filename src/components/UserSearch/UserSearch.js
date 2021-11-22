import {useEffect, useRef} from "react";

function UserSearch({handleSubmit, value, handleChange, handleReset}) {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">User's full name: </label>
            <input
                ref={inputRef}
                id="name"
                type="text"
                name="name"
                value={value}
                onChange={handleChange}
                placeholder="full name"
            />
            <input type="submit" value="Search" />
            <input type="button" onClick={handleReset} value={"Reset"} />
        </form>
    );
}

export default UserSearch;
