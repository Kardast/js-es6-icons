// selecting the main container
const myContainer = document.querySelector(".my_container");
const selectCateg = document.getElementById("category");
console.log(selectCateg);

for (let i = 0; i < myArr.length; i++) {
	myCardsIcon(myArr[i]);
};

selectCateg.addEventListener("change",
	function() {
		
		const chooseCateg = parseInt(selectCateg.value);
        console.log(chooseCateg);

		myContainer.innerHTML = "";

		switch (chooseCateg) {
			case 0:
				for (let i = 0; i < myArr.length; i++) {
                    myCardsIcon(myArr[i]);
				}
				break;

            case 1:
				const arrAnimals = myArr.filter((element) => {
					if (element.type === "animal") {
						myFilteredCardIcon(element);
					}
					return false;
				})
				console.log(arrAnimals);
                break;

            case 2:
				const arrVegetable = myArr.filter((element) => {
					if (element.type === "vegetable") {
                        myFilteredCardIcon(element);
					}
					return false;
				})
				console.log(arrVegetable);
                break;

            case 3:
				const arrUser = myArr.filter((element) => {
					if (element.type === "user") {
                        myFilteredCardIcon(element);
					}
					return false;
				})
				console.log(arrUser);
                break;
        }
	}
)