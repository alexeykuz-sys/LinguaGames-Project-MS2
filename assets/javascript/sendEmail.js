function sendMail(contactForm){
    emailjs.send(email, linguagames, {
        "from_name":contactForm.name.value,
        "message":contactForm.message.value,
        "from_email": contactForm.email.value,
        
    })
    console.log(from_email, from_name, message)
    .then(() => {
      btn.value = 'Send Email';
      console.log(btn.value)
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
}