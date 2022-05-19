const myArr = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// console.log(myArr);

// selecting the main container
const myContainer = document.querySelector(".my_container");
// console.log(myContainer);

for (let i = 0; i < myArr.length; i++) {
	
	// creating the cards
	let myCard = document.createElement("div");
	myCard.classList.add("my_card");
	myContainer.append(myCard);
	// console.log(myCard);

	// creating the container for the content
	let myContent = document.createElement("div");
	myContent.classList.add("my_content");
	myCard.append(myContent);

	// creating the card's content (i tag and h3 tag)
		// i tag
	let myIcon = document.createElement("i");
	myIcon.classList.add("fas", "fa-" + myArr[i].name);
	myContent.append(myIcon);
	// console.log(myIcon);
		// h3 tag
	let myH3 = document.createElement("h3");
	myContent.append(myH3);
	let myH3Text = myArr[i].name;
	myH3.append(myH3Text);
	// console.log(myH3Text);

	const arrColor = myArr.filter((numero) => {
		if (numero.color === "orange") {

			return true;
		} 
		return false;
	})
	console.log(arrColor);
}



// arrColor.classList.add("orange");
// myIcon.classList.add("orange");