import {useStore} from "../Store/cartStore.js";

const Counter = () => {
    const increaseCount = useStore((state) => state.increaseCount);
    const count = useStore((state) => state.counter);
    return(
        <>
<h1>{count}</h1>
            <button onClick={() => increaseCount()} > INCREASE </button>
        </>
    )
};

export default Counter;