function submitReview() {
    const form = document.getElementById("review-form");


    const name = document.getElementById("name").value;
    const email =  document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value;
    

    if (name == "") {
        swal("Sorry", "Cannot submit this form without filling in your name!!", "error")
        //alert("Please fill in your name!!");
        return false
    }
    else if  (email == "") {
        swal("Oops", "Your email address is required for this form to be submitted, kindly fill it and try again", "error")
        //alert("Please fill in your email!!, Cannot leave it blank bruhhh!");
        return false
    }
    else if (rating == "" ) {
        swal("Sorry", "Kindly select a rating!! to help us improve!", "error")
        return false
    
    }
    else if (message == "") {
        swal("Not again!", "Cannot leave message area blank, please send us yout thoughts, Thank you!", "error")
        //alert("Cannot leave message field blank, Kindly input something!!");
        return false
    }
    else {
        const subject = `New Review from ${name}`;
        const body = `Name: ${name}\n\n Email: ${email}\n\n Rating: ${rating}\n\n Message: ${message}`;
        window.location.href = `mailto:anonyminhack5@protonmail.com?subject=${subject}&body=${body}`;
        
        setTimeout(function() {
            swal("Hurry", "Thank you for your review", "success");

        }, 5000);
        form.reset();
        
        
        

    }
    
}
