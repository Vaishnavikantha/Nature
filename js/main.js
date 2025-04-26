(function ($) {
    "use strict";

    // Spinner
    /*var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);*/


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.fixed-top .container').addClass('shadow-sm').css('max-width', '100%');
        } else {
            $('.fixed-top .container').removeClass('shadow-sm').css('max-width', '85%');
        }
    });
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

let queryForm = document.getElementById('queryForm');

queryForm.addEventListener("submit",(e)=>{
    
    let templateParams = {
        user_name : document.getElementById('user_name').value,
        email_id : document.getElementById('email_id').value,
        phone_no : document.getElementById('phone_no').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value
    };

    if(templateParams.user_name==="")
    {
        alert("UserName is Mandatory!");
        e.preventDefault();
    }
    else if(templateParams.email_id==="")
    {
        alert("Email Id is Mandatory!");
        e.preventDefault();
    }
    else if(templateParams.phone_no==="")
    {
        alert("Phone No is Mandatory!");
        e.preventDefault();
    }
    else if(templateParams.subject==="")
    {
        alert("Subject is Mandatory!");
        e.preventDefault();
    }
    else if(templateParams.message==="")
    {
        alert("Message is Mandatory!");
        e.preventDefault();
    }
    else
    {
        emailjs.send('service_0aqko8j', 'template_rymjd0p', templateParams).then(
            (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Form Submitted Successfully!");
            },
            (error) => {
            console.log('FAILED...', error);
            },
        );

        e.preventDefault();

        document.getElementById('user_name').value = "";
        document.getElementById('email_id').value = "";
        document.getElementById('phone_no').value = "";
        document.getElementById('subject').value = "";
        document.getElementById('message').value = "";
    }
});