import React, {useState} from 'react';
import Header from './components/Header';
import Students from "./components/Students";
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Students />
        </div>
    );
}

export default App;
