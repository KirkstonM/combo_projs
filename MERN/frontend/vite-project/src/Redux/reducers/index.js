
const initialState = {
    user : {},
    token : null,
};


const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGINUSER" :
            return { ...state, token : action.payload }

        default : 
        return state
    }
};

export default appReducer;