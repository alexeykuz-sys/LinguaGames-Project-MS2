const btn = document.getElementById('sendButton');

document.getElementById('form1')
 .addEventListener('submit', function(event) {
    event.preventDefault();

   

   const serviceID = 'default_service';
   const templateID = 'linguagames';

   emailjs.sendForm(serviceID, templateID, this)
    .then(function () {
                btn.value = 'Sending...';
                btn.value = "Sent!";
                setTimeout(function() {form.classList.remove('show');},2000);
            },
    
    function (error) {
                alert("Something went wromg...Please send again! Thank you!", error);
            });
            document.getElementById('form1').reset();
    return false;
});
