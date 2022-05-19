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


// selecting the main container
const myContainer = document.querySelector(".my_container");
const selectCateg = document.getElementById("category");
console.log(selectCateg);

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
	if (myArr[i].color === "orange") {
		myIcon.classList.add("orange");
	} else if (myArr[i].color === "green") {
		myIcon.classList.add("green");
	} else if (myArr[i].color === "blue") {
		myIcon.classList.add("blue");
	};
	// console.log(myIcon);

		// h3 tag
	let myH3 = document.createElement("h3");
	myContent.append(myH3);
	let myH3Text = myArr[i].name;
	myH3.append(myH3Text);
	// console.log(myH3Text);
};

selectCateg.addEventListener("change",
	function() {
		
		const chooseCateg = parseInt(selectCateg.value);
        console.log(chooseCateg);

		myContainer.innerHTML = "";

		switch (chooseCateg) {
			case 0:
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
					if (myArr[i].color === "orange") {
						myIcon.classList.add("orange");
					} else if (myArr[i].color === "green") {
						myIcon.classList.add("green");
					} else if (myArr[i].color === "blue") {
						myIcon.classList.add("blue");
					};
					// console.log(myIcon);
				
						// h3 tag
					let myH3 = document.createElement("h3");
					myContent.append(myH3);
					let myH3Text = myArr[i].name;
					myH3.append(myH3Text);
					// console.log(myH3Text);
				
				}
				break;

            case 1:
				const arrAnimals = myArr.filter((element) => {
					if (element.type === "animal") {
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
						myIcon.classList.add("fas", "fa-" + element.name);
						myContent.append(myIcon);
				
						if (element.color === "orange") {
							myIcon.classList.add("orange");
						} else if (element.color === "green") {
							myIcon.classList.add("green");
						} else if (element.color === "blue") {
							myIcon.classList.add("blue");
						};
				
						// console.log(myIcon);
							// h3 tag
						let myH3 = document.createElement("h3");
						myContent.append(myH3);
						let myH3Text = element.name;
						myH3.append(myH3Text);
						// console.log(myH3Text);
					}
					return false;
				})
				console.log(arrAnimals);
                break;

            case 2:
				const arrVegetable = myArr.filter((element) => {
					if (element.type === "vegetable") {
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
						myIcon.classList.add("fas", "fa-" + element.name);
						myContent.append(myIcon);
				
						if (element.color === "orange") {
							myIcon.classList.add("orange");
						} else if (element.color === "green") {
							myIcon.classList.add("green");
						} else if (element.color === "blue") {
							myIcon.classList.add("blue");
						};
				
						// console.log(myIcon);
							// h3 tag
						let myH3 = document.createElement("h3");
						myContent.append(myH3);
						let myH3Text = element.name;
						myH3.append(myH3Text);
						// console.log(myH3Text);
					}
					return false;
				})
				console.log(arrVegetable);
                break;

            case 3:
				const arrUser = myArr.filter((element) => {
					if (element.type === "user") {
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
						myIcon.classList.add("fas", "fa-" + element.name);
						myContent.append(myIcon);
				
						if (element.color === "orange") {
							myIcon.classList.add("orange");
						} else if (element.color === "green") {
							myIcon.classList.add("green");
						} else if (element.color === "blue") {
							myIcon.classList.add("blue");
						};
				
						// console.log(myIcon);
							// h3 tag
						let myH3 = document.createElement("h3");
						myContent.append(myH3);
						let myH3Text = element.name;
						myH3.append(myH3Text);
						// console.log(myH3Text);
					}
					return false;
				})
				console.log(arrUser);
                break;
        }
	}
)