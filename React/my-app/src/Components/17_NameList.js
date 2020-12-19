import React from 'react'
import Person from './17_Person'

function NameList() {
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
    const personList = persons.map(person => (<Person key={person.id} person={person} />))   
    
    return <div>{personList}</div>

}

export default NameList