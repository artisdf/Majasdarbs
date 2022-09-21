import React from 'react';
import Student from "./Student";
import { TrashFill } from 'react-bootstrap-icons';

function Students() {
    let students:Student[] = [];
    for (const [key, value] of Object.entries(localStorage)){
        students.push(JSON.parse(value));
    }

    function clickedDeleteButton(id: string) {
        localStorage.removeItem(id);
        window.location.reload();
    }

    return <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Vārds</th>
                <th>Uzvārds</th>
                <th>Dzimšanas Datums</th>
                <th>Kursa Numurs</th>
                <th>Mūzikas Specialitāte</th>
                <th>Reģistrēšanās laiks</th>
            </tr>
        </thead>
        <tbody >
        {students.map(student =>
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.birthDate}</td>
                <td>{student.courseNumber}</td>
                <td>{student.speciality}</td>
                <td>{(student.registerDate?.toString())}</td>
                <td><TrashFill type={'button'} style={{ color: 'red', cursor: 'pointer'}} onClick={() => clickedDeleteButton(student.id)}/></td>
            </tr>
        )}
        </tbody>
    </table>
}

export default Students;