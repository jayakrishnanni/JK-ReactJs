import React from 'react'

const Hello = (props) => {
    // This is without JSX
    return (<div>
        <h1>Hello {props.name} aka {props.heroName}</h1>
        {props.children}
        </div>)     
}

    // This is with JSX
    // return React.createElement('div', 
    // {id: "Sachin", className: "Sachin"}
    // , React.createElement ('h1', null, 'Hello Jk and Kkff'));

 

// React being import, fact is JSX translate the React.createElement which interns uses react library
export default Hello