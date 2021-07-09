
let restaurants = ["bc chicken kaysville", "big daddys pizza", "old grist mill bread company"]


document.querySelector(".recR").addEventListener("click", () => {
    let indexRest = Math.floor(Math.random() * restaurants.length)
    rest = restaurants[indexRest]

    let answer = document.createElement("p")
    answer.textContent = rest
    alert(rest)
})