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

function Form() {
    const [person, setPerson] = React.useState(blankStudent);

    return <>
        <form onSubmit={(e) => {e.preventDefault();onSave(person)}}>
            <div>
                <input
                    required
                    value={person.name}
                    placeholder='Skolēna Vārds'
                    id='name'
                    name='name'
                    onChange={e => setPerson({ ...person, name: e.target.value })}
                />
                <input
                    required
                    value={person.surname}
                    placeholder='Skolēna Uzvārds'
                    id='surname'
                    name='surname'
                    onChange={e => setPerson({ ...person, surname: e.target.value })}
                />
                <input
                    required
                    type={'date'}
                    value={person.birthDate}
                    placeholder='Dzimšanas Datums'
                    id='birthDate'
                    name='birthDate'
                    onChange={e => setPerson({ ...person, birthDate: e.target.value })}
                />
                <input
                    required
                    type={'number'}
                    value={person.courseNumber}
                    placeholder='Mācību Kursa Numurs'
                    id='courseNumber'
                    name='courseNumber'
                    onChange={e => setPerson({ ...person, courseNumber: (parseInt(e.target.value)) })}
                />
                <input
                    required
                    value={person.speciality}
                    placeholder='Specialitāte'
                    id='speciality'
                    name='speciality'
                    onChange={e => setPerson({ ...person, speciality: e.target.value })}
                />
            </div>
            <button>submit</button>
        </form>

    </>
}

export default Form