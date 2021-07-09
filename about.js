console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('Form has been submitted successfully')
	// console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector("img").addEventListener("mouseover", () => {
	alert('You have a good taste in pets')
})

// let restaurants = ["bc chicken kaysville", "big daddys pizza", "old grist mill bread company"]


// document.querySelector(".recR").addEventListener("click", () => {
// 	  let indexRest = Math.floor(Math.random() * restaurants.length)
// 	  rest = restaurants[indexRest]
// 	  alert(rest)
// 	//   let answer = document.createElement("p")
// 	//   answer.textContent

// })