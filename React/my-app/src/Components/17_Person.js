import React from 'react'

const Person = ({person}) => {
    return (
        <div>
            <h2>{person.name}, {person.id}</h2>
            <div>Age: {person.age}</div>
            <div>Skill: {person.skill}</div>
        </div>      
    )
}

export default Person
