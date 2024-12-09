import { useStore } from "../Store/cartStore.js";

const Cart = () => {

    const { cart, removeFromCart, emptyCart } = useStore((state) => ({
        cart : state.cart,
        removeFromCart: state.removeFromCart,
        emptyCart: state.emptyCart
    }));

    console.log(cart)
    return (
        <div>
            {cart?.map(item => (
                <div id={item.id} key={item.id}>
                <h1>{item.name}</h1>
                    <button
                  onClick={() => removeFromCart(item.id)}
                    > Remove </button>
                </div>
            ))}

            {cart.length > 0 && (
            <button onClick={emptyCart}> CLEAR </button>
            )}
        </div>
    )
};

export default Cart;