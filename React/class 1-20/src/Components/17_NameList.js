import React from 'react'
import Person from './17_Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Gustavo',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Ana',
            age: 30,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Bruce',
            age: 20,
            skill: 'Vue'
        }
    ]
    
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)   
 
    return <div>{nameList}</div>

}

export default NameList