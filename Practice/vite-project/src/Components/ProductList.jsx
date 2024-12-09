import { useStore } from "../Store/cartStore.js";

const ProductList = ({ products }) => {
    const addToCart = useStore((state) => state.addToCart);
    return (
        <div>
            {products.map(item => (
                <div key={item.id} id={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>

                    <button onClick={() => addToCart(item)}>
                        ADD TO CART
                    </button>
                </div>

            ))}
        </div>
    )
};

export default ProductList;