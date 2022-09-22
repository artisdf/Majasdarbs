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

    return <table className={'table'} id={'studentsTable'}>
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
                <td scope="col">{student.id}</td>
                <td scope="col">{student.name}</td>
                <td scope="col">{student.surname}</td>
                <td scope="col">{student.birthDate}</td>
                <td scope="col">{student.courseNumber}</td>
                <td scope="col">{student.speciality}</td>
                <td scope="col">{(student.registerDate?.toString())}</td>
                <td><TrashFill type={'button'} style={{ color: 'red', cursor: 'pointer'}} onClick={() => clickedDeleteButton(student.id)}/></td>
            </tr>
        )}
        </tbody>
    </table>
}

export default Students;