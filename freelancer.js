const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];
const prices = [30, 50, 70]
const randNames = ["Annie", "Elizabeth", "Caroline", "Abby", "Santa", "MJ", "Sarah", "Joseph", "Sophie", "Douglas", "Anthony", "Dan"]
const randOccupations = ["Geologist", "Talent Agent", "Software Developer", "Actress", "Lawyer", "Engineer", "Dancer", "Pilot", "Surfer", "Bull Rider"]
//sample data for starter shapes
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30
    }, 
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50
    }
   
]
const maxFreelancers = 10;

const addFreelancerIntervalId = setInterval(addFreelancer, 3000)

//render()

/*function render(){
    const freelancerContainer = document.querySelector("#freelancers");
    console.log(freelancerContainer)

    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("tr")
        element.classList.add(freelancer.name, freelancer.occupation, freelancer.price)
        return element
    });

    freelancerContainer.replaceChildren(...freelancerElements);
}
*/

function render(){
    const freelancerContainer = document.querySelector("#freelancers");
    const averagePriceElement = document.querySelector("#average");
    console.log(freelancerContainer)

    const freelancerElements = freelancers.map((freelancer) => {
        const element = document.createElement("tr");
        const name = document.createElement("td");
        const nameText = document.createTextNode(freelancer.name);
        name.appendChild(nameText);

        const occupation = document.createElement("td");
        const occupationText = document.createTextNode(freelancer.occupation);
        occupation.appendChild(occupationText);
        
        const price = document.createElement("td");
        const priceText = document.createTextNode(freelancer.price);
        price.appendChild(priceText);

        element.appendChild(name);
        element.appendChild(occupation);
        element.appendChild(price);

        return element
    });

    freelancerContainer.replaceChildren(...freelancerElements);
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const averagePrice = freelancers.length > 0 ? (totalPrices / freelancers.length).toFixed(2) : 0;
    averagePriceElement.textContent = averagePrice;
}
function addFreelancer() {
    const selectedName = randNames[Math.floor(Math.random() * randNames.length)]
    const selectedOccupation = randOccupations[Math.floor(Math.random() * randOccupations.length)]
    const selectedPrice = Math.floor(Math.random() * 100)

    freelancers.push({name: selectedName, occupation: selectedOccupation, price: selectedPrice})

    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerIntervalId)
    }

    render()
}

