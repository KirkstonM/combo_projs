import { create } from "zustand";

const initialState = {
    cart : [],
    theme : "light",
    counter: 0
}
export const useStore = create((set, get) => ({
    ...initialState,
    loadCart : (payload) => set({ cart : payload }),
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) })),
    emptyCart: () => set({ cart: [] }),
    increaseCount : () => set({ counter : get().counter + 1 }),
    // increaseCount : () => set((state) => ({ counter: state.counter + 1 })) // SET FUNCTION
    // toggleTheme : () => set({ theme : get().theme === "light" ? "dark" : "light" }),
    toggleTheme : () => set((state) => ({ theme : state.theme === "light" ? "dark" : "light" }))
}));

// setAddessConfigFields: (addessConfFields) => set({ addessConfigFields: addessConfFields }),