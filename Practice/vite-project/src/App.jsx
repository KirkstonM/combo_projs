import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";
function App() {

    const[users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:5050/users")
        const data = await response.json()
        return data.data;
    }
    const { isLoading, isError, data, error, status } = useQuery({
        queryKey: ["userlist"],
        queryFn : fetchUsers
        })
    console.log(isLoading, isError, status)

    if(isLoading){
        return <h1>Loading.....</h1>
    }
    if(isError) {
        return <span>Something went wrong </span>
    }
  return (
    <>
        { JSON.stringify(data)}
    </>
  )
}

export default App


// import {useEffect, useState} from "react";
//
// const App = () => {
//
//     const [users, setUsers] = useState([]);
//     const[userName, setUserName] = useState("");
// const fetchUsers = async () => {
//     try{
//         const response = await fetch("http://localhost:5050/users")
//         const data = await response.json();
//         setUsers(data.data)
//     } catch (error) {
//         console.log(error)
//     }
// }
//     useEffect(() => {
//         fetchUsers()
//     }, []);
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch("http://localhost:5050/users", {
//                 method: "POST",
//                 headers: { 'Content-type' : 'application/json' },
//                 body : JSON.stringify({
//                       id : users.length + 1,
//                       name : userName
//                       })
//             })
//             const data = await response.json();
//             if(data.success) {
//                 setUsers([...users, data.data])
//                 setUserName("")
//                 alert("FORM SUBMITTED")
//             }
//         } catch (error){
//             console.log(error)
//         }
//     }
//
//     const deleteUser = async (id) => {
//         try {
//             const response = await fetch(`http://localhost:5050/users/${id}`, {
//                 method: "DELETE"
//             })
//             const data = await response.json();
//             if(data.success) {
//                 const newArr = users.filter(user => user.id !== id);
//                 setUsers(newArr)
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return (
//         <>
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input type="text"
//                        placeholder="enter name"
//                        name="userName"
//                        value={userName}
//                        onChange={(e) => setUserName(e.target.value)}
//                 />
//                 <button type="submit"> Submit </button>
//             </form>
//             {users.map(user => (
//                 <div key={user.id} id={user.id}>
//                     <h3>{user.name}</h3>
//                     <button> Edit </button>
//                     <button
//                     onClick={() => deleteUser(user.id)}
//                     > Delete </button>
//                 </div>
//
//             ))}
//         </div>
//         </>)
// };
//
// export default App;