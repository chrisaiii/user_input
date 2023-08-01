document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("title_input");
    const mainTitle = document.getElementById("main_title");
    const formContainer = document.querySelector(".form_container");
    const storyResult = document.getElementById("story_result");
    const submitButton = document.getElementById("submit_button");

    titleInput.addEventListener("input", function () {
      mainTitle.textContent = titleInput.value;
    });

    submitButton.addEventListener("click", function (event) {
      event.preventDefault();

      const nounInput = document.getElementById("noun").value;
      const verbInput = document.getElementById("verb").value;
      const adjectiveInput = document.getElementById("adjective").value;

      if (nounInput === "" || verbInput === "" || adjectiveInput === "") {
        alert("Please fill in all fields");
      } else {
        const adlibText = `Last night I ate a ${nounInput}, and today I just had to ${verbInput}. What a ${adjectiveInput} day!`;

        formContainer.style.display = "none";

        storyResult.textContent = adlibText;
      }
    });
  });