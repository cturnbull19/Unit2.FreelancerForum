const names = ["Alice", "Bob", "Carol"];
const occupations = ["Writer", "Teacher", "Programmer"];
const prices = ["$30", "$50", "$70"]

//sample data for starter shapes
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: "$30"
    }, 
    {
        name: "Bob",
        occupation: "Teacher",
        price: "$50"
    }
   
]
const maxFreelancers = 20;

const addFrelancerIntervalId = setInterval(addFrelancer, 3000)

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
}
function addFreelancer() {
    const selectedName = names[Math.floor(Math.random() * names.length)]
    const selectedOccupation = occupations[Math.floor(Math.random() * occupations.length)]
    const selectedPrice = prices[Math.floor(Math.random() * prices.length)]

    freelancers.push({selectedName, selectedOccupation, selectedPrice})

    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFrelancerIntervalId)
    }

    render()
}
