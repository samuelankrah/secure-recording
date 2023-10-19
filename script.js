function checkCode() {
    const userCode = document.getElementById("accessCode").value;
    const predefinedCode = "YOUR_SECRET_CODE"; // Replace with your desired code

    if (userCode === predefinedCode) {
        document.getElementById("recording").style.display = "block";
    } else {
        alert("Incorrect code. Please try again.");
    }
}
