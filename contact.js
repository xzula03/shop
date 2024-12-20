document.getElementById("contactus").addEventListener("submit", function(event){
    let name = document.getElementById("nam").value;
    let email = document.getElementById('email').value;
    let message= document.getElementById('mes').value;
    let error = document.getElementById('error');


    if(!name||!email||!message){
        error.textContent='all forms must be filld!';
        event.preventDefault();
    }else{
        error.innerHTML="";
    }
});


// script.js
/*document.getElementById('contactus').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('mes').value;
    let errorElement = document.getElementById('error');

    if (!name || !email || !message) {
        errorElement.textContent = "All fields are required!";
        event.preventDefault();  // Stop form from submitting
    } else {
        errorElement.textContent = "";  // Clear any error messages
    }
});*/
