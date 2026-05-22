const hamBox = document.getElementById("hamBox")
const openedHam = document.getElementById("openedHam")



hamBox.addEventListener('click', () => {
    openedHam.style.right = 0
})

openedHam.addEventListener('click', () => {
    openedHam.style.right = "-310px"
})