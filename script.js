function validateForm() {
    let email = document.getElementById("email").value;

    // TC06: Email validation
    if (!email.includes("@")) {
        alert("Invalid email format!");
        return false;
    }

    // TC09
    alert("Registration Successful!");
    return true;
}
