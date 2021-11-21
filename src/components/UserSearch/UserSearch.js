function UserSearch({handleSubmit, value, handleChange}) {
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">User's full name: </label>
            <input
                id="name"
                type="text"
                name="name"
                value={value}
                onChange={handleChange}
                placeholder="full name"
            />
            <input type="submit" value="Search" />
        </form>
    );
}

export default UserSearch;
