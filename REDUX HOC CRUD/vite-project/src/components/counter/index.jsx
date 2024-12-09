const Counter = ({ count, increaseCount }) => {
    return (
        <>
            <button onClick={() => increaseCount()}> INCREASE </button>
            { count }
        </>
    )
};

export default Counter;