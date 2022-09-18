import Student from "./Student"

function onSave (person: Student){
    if(person.id == '') person.id = Date.now().toString(36)
    if(!person.registerDate)person.registerDate = new Date(Date.now())
    console.log(JSON.stringify(person))
    localStorage.setItem(person.id.toString(), JSON.stringify(person))
}

export default onSave