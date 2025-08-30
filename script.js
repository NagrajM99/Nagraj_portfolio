function SendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }
    if (!parms.name || !parms.email || !parms.message) {
        alert("Please fill in all required fields.");
        return;
    }
    emailjs.send("service_4r5nz0s", "template_msdkwna",parms).then(() => {
        alert("Email Sent!!");
        console.log("Mail sent successfully");

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch((error) => {
        console.error("Email failed to send:", error);
        alert("Failed to send email. Please try again.");
    });
}
