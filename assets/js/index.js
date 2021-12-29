document.addEventListener("DOMContentLoaded", () => {
    //Close modal
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".fa-times");
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    //Send message
    const submitButton = document.querySelector("#submit");
    const confirmationMessage = document.querySelector("#confirmation")
    submitButton.addEventListener("click", async (event) => {
        event.preventDefault();
        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
        // https://from-back-jm.herokuapp.com/form
        const response = await axios.post("http://localhost:3000/form", formData);
        if (response) {
            submitButton.style.display = "none";
            confirmationMessage.style.display = "block";
        }
        console.log(response.data);
    });
    console.log(submitButton);

})
