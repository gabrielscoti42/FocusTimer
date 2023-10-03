const buttonToggle = document.getElementById("toggleMode")

buttonToggle.addEventListener("click", (event) => {
    document.documentElement.classList.toggle("light")
})