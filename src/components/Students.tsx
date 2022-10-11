import React from 'react';
import Student from "./Student";
import { TrashFill } from 'react-bootstrap-icons';
import internal from 'stream';

function Students() {
    let students:Student[] = [];
    console.log(localStorage.getItem('studentKey'))
    students = localStorage.getItem('studentKey') ? JSON.parse(localStorage.getItem('studentKey') || '') : [];
    console.info('test');
    console.log(localStorage.getItem('studentKey'));
    console.log(students);
    
    function clickedDeleteButton(id: string) {
        let student: Student[] = [];
        student = localStorage.getItem('studentKey') ? JSON.parse(localStorage.getItem('studentKey') || '') : [];
        console.log(student);
        for(let i = 0; i < student.length; i++){
            if(id == student[i].id){
                //delete student[i];
                break;
            }
        }
        console.info('test2');
        console.log(localStorage.getItem('studentKey'));
        console.log(students);
        localStorage.setItem('studentKey', JSON.stringify(student))
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