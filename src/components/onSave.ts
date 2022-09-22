import Student from "./Student";
import { format } from 'date-fns';

function onSave (student: Student){
    if(student.id == '') student.id = Date.now().toString(36);
    if(!student.registerDate)student.registerDate = format(new Date(Date.now()), 'yyyy-MM-dd H:mm');
    localStorage.setItem(student.id.toString(), JSON.stringify(student));
}

export default onSave;