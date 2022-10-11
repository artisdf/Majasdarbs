import Student from "./Student";
import { format } from 'date-fns';

function onSave (student: Student){
    let students: Student[] = [];
    students = localStorage.getItem('studentKey') ? JSON.parse(localStorage.getItem('studentKey') || '') : [];
    student.id = Date.now().toString(36);
    if(!student.registerDate)student.registerDate = format(new Date(Date.now()), 'yyyy-MM-dd H:mm');
    students.push(student);
    console.info('test3');
    console.log(localStorage.getItem('studentKey'));
    console.log(students);
    localStorage.setItem('studentKey', JSON.stringify(students));
}

export default onSave;