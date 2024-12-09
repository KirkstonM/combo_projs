const User = ({ users, addUser }) => {
    return (
        <>
            <button onClick={() => addUser()}> ADD </button>
            {JSON.stringify(users)}
        </>
    )
};

export default User;