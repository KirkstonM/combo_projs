const initialState = {
    counter : 0,
    users : [],
    theme : "light"
};

const appReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + 1 };
        case "ADDUSER" :
            return { ...state, users: [...state.users, action.payload]}
        default:
            return state;
    }
};
export default appReducer;

