
function SendMail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (!name || !email || !message) {
        alert("Please fill in all the fields: Name, Email, and Message.");
        return;
    }
    let parms = {
        name: name,
        email: email,
        message: message,
    }
        emailjs.send("service_rvvq7c4","template_pt4o1jb", parms).then(() => alert("Thanks for your Email"));
    }
