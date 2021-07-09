console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('Form has been submitted successfully')
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector("img").addEventListener("mouseover", () => {
	alert('You have a good taste in pets')
})