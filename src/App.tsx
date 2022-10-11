import React, {useState} from "react";
import AddStudent from "./components/AddStudent";
import Students from "./components/Students";
import './App.css';

const App = () => {
    const [showAddStudent, setShowAddStudent] = useState(false);
    const [buttonText, setButtonText] = useState("Pievienot jaunu skolēnu");
    const onClick = () => {
        setShowAddStudent(!showAddStudent);
        setButtonText(showAddStudent ? "Pievienot jaunu skolēnu" : "Atcelt");
    }
    return (
        <div className="App">
            <div className={'header'}>
                <h1 id={'title'}>Mūzikas skolas skolēni</h1>
                <button className={'btn-dark btn'} onClick={() => onClick()}>{buttonText}</button>
            </div>
            <div>
                {showAddStudent && <AddStudent/>}
                {!showAddStudent && <Students />}
            </div>
        </div>
    )
    
};
export default App;