import React, {useState} from "react";
import Student from "./Student";
import onSave from "./onSave";

const blankStudent: Student = {
    id: '',
    name: '',
    surname: '',
    birthDate: '',
    courseNumber: 0,
    speciality: '',
}

function AddStudent() {
    const [student, setStudent] = React.useState(blankStudent);

    return <>
        <form onSubmit={(e) => {e.preventDefault();onSave(student);window.location.reload()}}>
            <div>
                <div>
                    <label> Vārds Uzvārds: </label>
                    <input
                        required
                        value={student.name}
                        placeholder='Skolēna Vārds'
                        id='name'
                        name='name'
                        onChange={e => setStudent({ ...student, name: e.target.value })}
                    />
                    <input
                        required
                        value={student.surname}
                        placeholder='Skolēna Uzvārds'
                        id='surname'
                        name='surname'
                        onChange={e => setStudent({ ...student, surname: e.target.value })}
                    />
                </div>
                <div>
                    <label> Dzimšanas Datums: </label>
                    <input
                        required
                        type={'date'}
                        value={student.birthDate}
                        placeholder='Dzimšanas Datums'
                        id='birthDate'
                        name='birthDate'
                        onChange={e => setStudent({ ...student, birthDate: e.target.value })}
                    />
                </div>
                <div>
                    <label> Kursa Numurs: </label>
                    <input
                        required
                        type={'number'}
                        min={'0'}
                        max={'7'}
                        value={student.courseNumber}
                        placeholder='Mācību Kursa Numurs'
                        id='courseNumber'
                        name='courseNumber'
                        onChange={e => setStudent({ ...student, courseNumber: (parseInt(e.target.value)) })}
                    />
                </div>
                <div>
                    <label> Mūzikas Specialitāte: </label>
                    <input
                        required
                        value={student.speciality}
                        placeholder='Mūzikas Specialitāte'
                        id='speciality'
                        name='speciality'
                        onChange={e => setStudent({ ...student, speciality: e.target.value })}
                    />
                </div>
            </div>
            <button className={'btn'}>Pievienot</button>
        </form>
    </>
}

export default AddStudent