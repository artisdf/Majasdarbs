import React from 'react';
import Student from "./Student";
import { TrashFill } from 'react-bootstrap-icons';

function Students() {
    let people:Student[] = [];
    for (const [key, value] of Object.entries(localStorage)){
        people.push(JSON.parse(value))
    }
    return <table>
        <tr>
            <th>ID</th>
            <th>Vārds</th>
            <th>Uzvārds</th>
            <th>Dzimšanas Datums</th>
            <th>Kursa Numurs</th>
            <th>Mūzikas Specialitāte</th>
            <th>Reģistrēšanās laiks</th>
        </tr>
        {people.map(person => <tr>
            <td>{person.id}</td>
            <td>{person.name}</td>
            <td>{person.surname}</td>
            <td>{person.birthDate}</td>
            <td>{person.courseNumber}</td>
            <td>{person.speciality}</td>
            <td>{(person.registerDate?.toString())}</td>
            <TrashFill style={{ color: 'red', cursor: 'pointer'}}/>
        </tr>)}
    </table>
}

export default Students