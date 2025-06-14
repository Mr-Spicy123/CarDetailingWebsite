

function setJobVars(jobType, jobPrice, jobTime) {
    localStorage.setItem("jobType", jobType);
    localStorage.setItem("jobPrice", jobPrice);
    localStorage.setItem("jobTime", jobTime);
    window.location.href = "confirmation.html";
}
