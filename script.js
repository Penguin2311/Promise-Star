// Get the button, the popup, and the close button
const contactBtn = document.getElementById('contactus-button');
const contactPopup = document.getElementById('contactPopup');
const closeButton = contactPopup.querySelector('.close-button');

// Function to open the popup
function openPopup() {
    contactPopup.style.display = 'flex';
}

// Function to close the popup
function closePopup() {
    contactPopup.style.display = 'none';
}

// Event listener for the contact button click
contactBtn.addEventListener('click', openPopup);

// Event listener for the close button click
closeButton.addEventListener('click', closePopup);

// Event listener to close the popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === contactPopup) {
        closePopup();
    }
});

// function to set the image height based on the text height
function setImageHeight() {
    document.querySelectorAll(".sectionTwo").forEach(section => {
        let textDiv = section.querySelector(".text");
        let imageDiv = section.querySelector(".image");
        console.log(textDiv.offsetHeight);
        if (textDiv && imageDiv) {
            let textHeight = textDiv.offsetHeight;
            imageDiv.style.maxHeight = textHeight + "px";
        }
    });
}

// Run on page load
window.addEventListener("load", setImageHeight);

// Run on window resize
window.addEventListener("resize", setImageHeight);