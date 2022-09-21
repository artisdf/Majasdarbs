import React, {useState} from "react";
import AddStudent from "./AddStudent";

const Header = () => {
    const [showAddStudent, setShowAddStudent] = useState(false);
    const [buttonText, setButtonText] = useState("Pievienot jaunu skolēnu");
    const onClick = () => {
        setShowAddStudent(!showAddStudent);
        setButtonText(showAddStudent ? "Pievienot jaunu skolēnu" : "Atcelt");
    }
    return (
        <div>
            <div className={'header'}>
                <h1>Mūzikas skolas skolēni</h1>
                <button className={'btn'} onClick={() => onClick()}>{buttonText}</button>
            </div>
            <div>
                {showAddStudent && <AddStudent/>}
            </div>
        </div>
    )
};
export default Header;