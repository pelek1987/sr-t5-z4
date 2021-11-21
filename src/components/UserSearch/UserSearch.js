function UserSearch({handleSubmit, value, handleChange, handleReset}) {
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
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}

export default UserSearch;
