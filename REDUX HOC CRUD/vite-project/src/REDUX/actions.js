const INCREMENT = "INCREMENT";
const ADD_USER = "ADDUSER";
export const increaseCounter = () => ({ type : INCREMENT });

export const addUser = () => {
    return {
        type : ADD_USER,
        payload : {
            name : "kirk",
            age : 27
        }
    }
};