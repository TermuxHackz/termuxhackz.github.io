function submitReview() {
    const form = document.getElementById("review-form");


    const name = document.getElementById("name").value;
    const email =  document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value;

    const subject = `New Review from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nRating: ${rating}\nMessage: ${message}`;

    window.location.href = `mailto:anonyminhack5@protonmail.com?subject=${subject}&body=${body}`;

    swal("Hurry", "Thank you for your review", "success");
    form.reset();

    
}
