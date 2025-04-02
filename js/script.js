// Load Header
fetch('header.html')
    .then(response => response.text())
    .then(data => document.getElementById('header').innerHTML = data);

// Load Footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);

    document.getElementById("workshopBookingForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("confirmationMessage").style.display = "block";
    });
    
    /*Workshop Submit*/
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("workshopBookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        
        confirmationMessage.style.display = "block"; // Show confirmation message

        setTimeout(() => {
            location.reload(); // Refresh the page after 5 seconds
        }, 5000);
    });
});

/*Careers Submit */
document.getElementById("careerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    document.getElementById("submitBtn").innerText = "Submitted";
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("confirmationMessage").style.display = "block"; // Show message

    // Refresh the page after 3 seconds
    setTimeout(() => {
        location.reload();
    }, 3000);
});
