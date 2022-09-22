import React, {useState} from "react";
import Student from "./Student";
import onSave from "./onSave";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <Form className={'form'} autoComplete={'off'} onSubmit={(e) => {e.preventDefault();onSave(student);window.location.reload()}}>
            <div>
                <div className={'form-group'}>
                    <Form.Label className={'label'}> Skolēna Vārds, Uzvārds : </Form.Label>
                    <input
                        required
                        value={student.name}
                        className={'form-control'}
                        placeholder='Vārds'
                        id='name'
                        name='name'
                        onChange={e => setStudent({ ...student, name: e.target.value })}
                    />
                    <input
                        required
                        value={student.surname}
                        className={'form-control'}
                        placeholder='Uzvārds'
                        id='surname'
                        name='surname'
                        onChange={e => setStudent({ ...student, surname: e.target.value })}
                    />
                </div>
                <div className={'form-group'}>
                    <Form.Label className={'label'}> Dzimšanas Datums : </Form.Label>
                    <input
                        required
                        type={'date'}
                        value={student.birthDate}
                        className={'form-control'}
                        id='birthDate'
                        name='birthDate'
                        onChange={e => setStudent({ ...student, birthDate: e.target.value })}
                    />
                </div>
                <div className={'form-group'}>
                    <Form.Label className={'label'}> Kursa Numurs : </Form.Label>
                    <input
                        required
                        type={'number'}
                        min={'1'}
                        max={'7'}
                        value={student.courseNumber}
                        className={'form-control'}
                        id='courseNumber'
                        name='courseNumber'
                        onChange={e => setStudent({ ...student, courseNumber: (parseInt(e.target.value)) })}
                    />
                </div>
                <div className={'form-group'}>
                    <Form.Label className={'label'}> Mūzikas Specialitāte : </Form.Label>
                    <input
                        required
                        value={student.speciality}
                        className={'form-control'}
                        placeholder='Specialitāte'
                        id='speciality'
                        name='speciality'
                        onChange={e => setStudent({ ...student, speciality: e.target.value })}
                    />
                </div>
            </div>
            <Button type={'submit'} className={'btn-dark'}>Pievienot</Button>
        </Form>
    </>
}

export default AddStudent