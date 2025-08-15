
function sendMail(){
    let parms = {
        name: document.getElementById("name").value, 
        email : document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_rvvq7c4","template_pt4o1jb", parms).then(alert("Thanks for your Email"))
