document.addEventListener("DOMContentLoaded", () => {
    //Close modal
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".fa-times");
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });
    //Send message
    const submitButton = document.querySelector("#submit");
    submitButton.addEventListener("click", async (event) => {
        event.preventDefault();
        const formData = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
        const response = await axios.post("https://from-back-jm.herokuapp.com/form", formData);
        console.log(response.data);
    });
    console.log(submitButton);

})
