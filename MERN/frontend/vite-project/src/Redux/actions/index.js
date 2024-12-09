export const LOGIN_USER = "LOGINUSER";


export const loginUser = (data) => {
    return {
        type : LOGIN_USER,
        payload : data
    }
};