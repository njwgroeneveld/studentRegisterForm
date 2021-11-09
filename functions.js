function registerStudent(){
    console.log("test");
    let newNameInput = document.getElementById('nameInput').value;
    let newEmailInput = document.getElementById('emailInput').value;
    let newDobInput = document.getElementById('dobInput').value;
    let newStudent = {
        name: newNameInput,
        email: newEmailInput,
        dob: newDobInput

    }

    fetch("https://student-register-from.herokuapp.com/api/v1/student", {
        method: 'POST',
        headers: {
            'Content-Type' : `application/json`
        },
        body: JSON.stringify(newStudent)
        })
        .then(Response => {
            alert(`is goedgegaan`);
        })
        .catch(error => { 
          alert(`Er is iets fout gegaan`);
    //handle error --
        });


}