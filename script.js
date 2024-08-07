// Access to the id from the html document
const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");
// Add addEventListener to checkMessageButton
checkMessageButton.addEventListener("click", ()=> {
    if(messageInput ===""){
        alert("Please enter a message.");
        return;
    }
});