//Name.html
let nameValidation  = ()=>{
    let name = document.getElementById("name");
    const nameValue = nameInput.value.trim();
    const words = nameValue.split(/\s+/);
    if(name == ""){
        alert("Please enter your name.")
        return  false;
    }
    else if(words.length < 2 ){
        alert("Name must contain at least two words.");
        return false;
    }
    return true;

};