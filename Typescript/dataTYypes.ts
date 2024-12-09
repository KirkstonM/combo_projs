let name : string
let age : number
let isStudent : boolean
let subjects : string[] //array of strings
let role : [string, number] //array that can contain strings and numbers in order ["five", 5]

// FOR OBJECTS

// type Personprops : {
//     name : string,
//     age : number,    age : number | string (age can be number OR string)
//     isStudent : boolean,
//     graduated ?: boolean --> this is optional, that is that this object can either have or dont have a graduated property
// } SO BASICALLY YOU NEED TO HAVE ALL THESE PROPERTIES OTHERWISE AN ERROR WILL THROW, IF NOT SURE USE THE OPTIONAL TAG (?)

// let person : Personprops = {
//         name : "kirk",
//         age : 27,
//         isStudent : true
// }

/* BASIC FUNCTION   */
// function printName(name : string) {
//     console.log(name);
    
// } 
// printName("KIRK")


// let printName : (name : string) => void  //FOR FUNCTIONS