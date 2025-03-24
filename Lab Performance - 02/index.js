let nameValidation = () => {
  const name = document.getElementById("name").value.trim();
  const words = name.split(/\s+/);

  if (name === "") {
    alert("Error: Please enter your name.");
    return false;
  } else if (words.length < 2) {
    alert("Name must contain at least two words.");
    return false;
  }

  return true;
};

//email validation
let emailValidation = () => {
  const email = document.getElementById("email").value;
  let mailFormat =
    /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/; // Corrected regex

  if (email === "") {
    alert("Please enter your email address.");
    return false;
  } else if (!mailFormat.test(email)) {
    alert("Invalid email. Please enter a valid email.");
    return false;
  }
  return true;
};

//info button design
const infoButton = document.getElementById("suggestion");
const tooltip = document.getElementById("tooltip-text");

infoButton.addEventListener("mouseover", function () {
  tooltip.style.display = "block";
});

infoButton.addEventListener("mouseout", function () {
  tooltip.style.display = "none";
});

//gender validation
let genderValidation = () => {
  const maleGender = document.getElementById("male");
  const femaleGender = document.getElementById("female");
  const otherGender = document.getElementById("other");

  if (!(maleGender.checked || femaleGender.checked || otherGender.checked)) {
    alert("Please seleect a  gender");
    return false;
  }
  return true;
};

//date of birth validation
let dobValidation = () => {
  const dobInput = document.getElementById("dob");
  const dobValue = dobInput.value;

  if (!dobValue) {
    alert("Please enter your date of birth.");
    return false;
  }

  const dateObj = new Date(dobValue);
  if (isNaN(dateObj.getTime())) {
    alert("Please enter a valid date.");
    return false;
  }

  return true;
};

//degree  validation
let degreeValidation = () => {
  const ssc = document.getElementById("ssc");
  const hsc = document.getElementById("hsc");
  const bsc = document.getElementById("bsc");

  if (!(ssc.checked || hsc.checked || bsc.checked)) {
    alert("At least SSC required.");
    return false;
  }
  return true;
};

//blood group choosing validation
let bloodGroupValidation = () =>{
    const  bloodGroupOptions = document.getElementById('bloodGroup');
    if(bloodGroupOptions.value === ""){
        alert("Please choose your blood group");
        return false;
    }
    return true;
};

//profile Pic validation
let profilePicNdUserIdValidation = () => {
    const userId = document.getElementById("userId").value;
    const picture = document.getElementById("picture").files[0]; 

    if (userId === "") { 
        alert("Please enter your User ID.");
        return false;
    }

    if (!picture) { 
        alert("Please upload a profile picture.");
        return false;
    }

    return true; 
};
