import React, {useState} from 'react';
import Header from './components/Header';
import Students from "./components/Students";
import './App.css';
import Student from "./components/Student";
import AddStudent from "./components/AddStudent";
import student from "./components/Student";

function App() {
    const [people, setPeople] = React.useState<Student[]>([])
    function addPerson(person: Student) {
        setPeople([...people, person])
        return {}
    }
    return (
        <div className="App">
            <Header />
            <AddStudent />
            <Students />
        </div>
    );
}

export default App;


//
// const App = () => {
//     const [showAddStudent, setShowAddStudent] = useState(false)
//     const [students, setStudents] = useState([
//         {
//             id: 1,
//             name: 'Janis',
//             surname: 'Berzins',
//             // birthDate?: Date,
//             // courseNumber?: number,
//             // speciality?: string,
//             // registerDate?: Date,
//         },
//         {
//             id: 2,
//             name: 'Janiss',
//             surname: 'Berzinss',
//         },
//         {
//             id: 3,
//             name: 'Janisss',
//             surname: 'Berzinsss',
//         }
//     ])
//
//     // Add Student
//     // const addStudent = async (student) => {
//     //     const id = Math.floor(Math.random() * 10000) + 1
//     //     const newStudent = { id, ...student }
//     //     setStudents([...student, newStudent])
//     // }
//
//
//     return (
//         <div className="App">
//             <Header />
//             <Students id={1}/>
//             <AddStudent />
//             studentInfo;
//             {/*<Table />*/}
//         </div>
//     );
// }
//
// export default App;


