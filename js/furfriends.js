$(function() {
    $(".nav a").click(function()  {
        $("nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});

/*Contact Form*/

// listen for form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form (MAIN)
function submitForm(e) {
    // prevent the default behaviour of submit
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // save message
    saveMessage(name, company, email, phone, message);

    // show alert on successful submition
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 seconds (timeout)
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // clear form after submission
    document.getElementById('contactForm').reset();
}

// get specific input value
function getInputVal(id) {
    return document.getElementById(id).value;
}


