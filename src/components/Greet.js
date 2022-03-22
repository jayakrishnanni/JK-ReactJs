import React from 'react'

// function Greet() {
//     return <h1>Hello Jk</h1>
// }

//Destructuring
// const Greet = ({name, heroName}) =>{
//     return(<div><h1> Hello  {name} a k a {heroName} </h1></div>) 
// }


//Destructuring-2

//functional component
const Greet = props =>{
    const {name , heroName} = props
    return(<div><h1> Hello  {props.name} a k a {props.heroName} </h1></div>) 
}
 
export default Greet