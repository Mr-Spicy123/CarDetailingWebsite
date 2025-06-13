window.onload = function () {
    const jobType = localStorage.getItem("jobType");
    if (jobType) {
        document.getElementById("pagetitle").innerText = "Book an " + jobType + "!";
    }
}

var email;
document.getElementById("emailinput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    email = event.target.value;
    verifyEmail(email);

  }
});

function enterEmail() {
    email = document.getElementById("emailinput").value;
    verifyEmail(email);
}

function verifyEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        document.getElementById("feedback").innerText = "Please wait: sending email...";
        document.getElementById("feedback").style.color = "orange";
        sendEmail(email);
    }
    else {
        document.getElementById("feedback").innerText = "Invalid email: please retry.";
        document.getElementById("feedback").style.color = "red";
    }
}

function sendEmail(email) {
    window.location.href = "mailto:jacksonspicer@live.com?subject=Hello&body=This is the message";
}