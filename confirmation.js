import emailjs from 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4.4.0/+esm';

  emailjs.init('-DYfRv7o-Frgm4EGW');



var email;
var name;
document.getElementById("user_email").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    email = event.target.value;
    name = document.getElementById("user_name").value;
    verifyEmail(email, name);
  }
});

function enterInfo() {
    email = document.getElementById("user_email").value;
    name = document.getElementById("user_name").value;
    verifyInfo(email, name);
}

function verifyEmail(email, name) {
    if (email.includes("@") && email.includes(".") && (name)) {
        document.getElementById("feedback").innerText = "Please wait: sending email...";
        document.getElementById("feedback").style.color = "orange";

        const templateParams = {
            user_name: name,
            user_email: email
        };

        sendEmail(templateParams);
    }
    else {
        document.getElementById("feedback").innerText = "Invalid email: please retry.";
        document.getElementById("feedback").style.color = "red";
    }
}

function sendEmail(templateParams) {
  // Email to yourself
  emailjs.send("service_ik0q0xg", "template_3uxpuza", {
    user_name: templateParams.user_name,
    user_email: "spicercardetailing@gmail.com", // YOUR email hardcoded
  })
  .then(() => console.log("Internal email sent"))
  .catch((error) => console.error("Internal email failed:", error));

  // Email to the customer
  emailjs.send("service_ik0q0xg", "template_8v8bf4r", templateParams)
  .then(() => alert("Confirmation sent to customer!"))
  .catch((error) => alert("Failed to send confirmation."));
}