export default function(displayPracticien = [], action){
    if(action.type === 'sendPracticien'){
        let displayPracticienCopy = [...displayPracticien,action.list]
        console.log(action.list)
        return displayPracticienCopy
        
    } else if(action.type === "clear"){
        let listCopy = []
       return listCopy;
    }else{
        return displayPracticien
    }
}