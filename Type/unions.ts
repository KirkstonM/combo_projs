// type Profile = {
//     name : "Kirk",
//     role : "member" | "admin" | "guest";
// }

// type UserRole = "member" | "admin" | "guest";  // | = OR, WHICH IS THE SAME AS ||. So when we use Unions, it can only be off the values we earlier specified it to be

// let user : UserRole = "member"

type UserRole = "guest" | "member" | "admin"

type User = {
    username : string
    role : UserRole
}

const users : User[] = [
    { username : "John_doe", role: "member"},
    { username : "Jane_doe", role: "admin"},
    { username : "guest_doe", role: "guest"},
];

const fetchUserDetails = ( username : string ): User => {
    const user = users.find(person => person.username === username)
    if(!user) {
        throw new Error(`User with ${username} cannot be found`)
    }
    return user
};