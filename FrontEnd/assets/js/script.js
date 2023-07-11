// Get the popup and the open button
var popup = document.getElementById("popup");
var openButton = document.getElementById("open-popup");
var closeButton = document.getElementById("close-popup");

// Function to open the popup
function openPopup() {
    popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
    popup.style.animation = "popup-fade 0.3s ease-out reverse, popup-slide 0.3s ease-out reverse";
    setTimeout(function () {
        popup.style.display = "none";
        popup.style.animation = "";
    }, 0);
}

// Attach event listeners
openButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

// Close the popup when the user clicks outside it
window.addEventListener("click", function (event) {
    if (event.target === popup) {
        closePopup();
    }
    if (event.target === popup2) {
        closePopup2();
    }
});

// Submit form
document.getElementById("myForm").addEventListener("submit", function (event) {
    /*event.preventDefault(); // Prevent form submission*/
    // Add your code to handle form submission here
    closePopup(); // Close the popup after form submission
});

// Add a listener to clear the form when the popup opens
openButton.addEventListener("click", clearForm);

// Function to clear the form inputs
function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("text").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("status").value = "";
    document.getElementById("image").value = "";
}

// Get the new popup and its associated elements
var popup2 = document.getElementById("popup2");
var openButton2 = document.getElementById("open-popup2");
var closeButton2 = document.getElementById("close-popup2");

// Function to open the new popup
function openPopup2(image, phone, name, category, status, location, date, title, text) {
    popup2.style.display = "block";

    var popupImage = document.getElementById("popupImage");
    var popupPhone = document.getElementById("popupPhone");
    var popupName = document.getElementById("popupName");
    var popupCategory = document.getElementById("popupCategory");
    var popupStatus = document.getElementById("popupStatus");
    var popupLocation = document.getElementById("popupLocation");
    var popupDate = document.getElementById("popupDate");
    var popupTitle = document.getElementById("popupTitle");
    var popupText = document.getElementById("popupText");

    popupImage.src = image;
    popupPhone.innerHTML = phone;
    popupName.innerHTML = name;
    popupCategory.innerHTML = category;
    popupStatus.innerHTML = status;
    popupLocation.innerHTML = location;
    popupDate.innerHTML = date;
    popupTitle.innerHTML = title;
    popupText.innerHTML = text;
}

// Function to close the new popup
function closePopup2() {
    popup2.style.animation = "popup-fade 0.3s ease-out reverse, popup-slide 0.3s ease-out reverse";
    setTimeout(function () {
        popup2.style.display = "none";
        popup2.style.animation = "";
    }, 0);
    console.log("mama mu")
}

// Attach event listeners for the new popup
openButton2.addEventListener("click", openPopup2);
closeButton2.addEventListener("click", closePopup2);