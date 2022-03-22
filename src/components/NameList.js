import React from 'react'
import NameLsitWIthNewJs from './NameListwithNewJs'

function NameList() {
    const name = ['Sachin', 'Kichin','Bachin', 'suchid']
    // const nameList = name.map((name,index) => <h2>{index}{name}</h2>)
    const nameList = name.map((name,index) => <NameLsitWIthNewJs name={name}/>)
    return <div>{nameList}</div>
}

export default NameList