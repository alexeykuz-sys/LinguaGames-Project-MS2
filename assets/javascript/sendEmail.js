function sendMail(contactForm){
    emailjs.send("email", "lingugames", {
        "from_name": "contactForm.name.value",
        "from_email":"contactForm.emailaddress.value",
        "message":"contactForm.message.value"
    })
    .then(
        function(response){
            console.log("success", response);
        },
        function(error){
            console.log("failed", error)
        })
}