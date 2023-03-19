let StartedButton = document.querySelector(".landing .main-btn");
let features = document.querySelector(".features");

function scrollToSomewhere() {
    StartedButton.addEventListener("click", (e) => {
        e.preventDefault();
        features.scrollIntoView({
          behavior: "smooth",
        });
      });
}
scrollToSomewhere();