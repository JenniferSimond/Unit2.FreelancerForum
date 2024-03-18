const Freelancers = [
  { name: 'Gandalf', occupation: 'Wizard', price: 250 },
  { name: 'Saruman', occupation: 'Dark Wizard', price: 370 },
  { name: 'Samwise', occupation: 'Gardener', price: 25 },
  { name: 'Aragorn', occupation: 'Ranger', price: 125 },
  { name: 'Legolas', occupation: 'Archer', price: 150 },
  { name: 'Frodo', occupation: 'Courier', price: 100 },
  { name: 'Gimli', occupation: 'Ax Men/Minor', price: 200 },
  { name: 'Bilbo', occupation: 'Author', price: 75 },
  { name: 'Sauron', occupation: 'Dark Lord', price: 500 },
];

let currentFreelancers = Freelancers.slice(0, 2); //Used slice to get the first 2 items from array
let nextFreelancerIndex = 2; //This makes sure we start pulling at next index

const updateFreelancer = () => {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = ''; // Clears out previous table data to prevent duplication
  for (let freelancer of currentFreelancers) {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.innerText = freelancer.name;
    tr.appendChild(nameTd);

    const occupationTd = document.createElement('td');
    occupationTd.innerText = freelancer.occupation;
    tr.appendChild(occupationTd);

    const priceTd = document.createElement('td');
    priceTd.innerText = freelancer.price;
    tr.appendChild(priceTd);

    tbody.appendChild(tr);
  }
  updateAveragePrice(); // function called here so the average price updates w/ each
};
const updateAveragePrice = () => {
  const total = currentFreelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const averagePrice = (total / currentFreelancers.length).toFixed(2);
  document.getElementById('price-span').innerText = averagePrice;
};

const addNewFreelancer = () => {
  if (nextFreelancerIndex < Freelancers.length) {
    currentFreelancers.push(Freelancers[nextFreelancerIndex++]);
    updateFreelancer(); // func called to update table with one new freelancer
  } else {
    clearInterval(updateFreelancerInterval); // stops adding once full array of objecrs has been added
  }
};

// event listener to do the initial render when dom is loaded
document.addEventListener('DOMContentLoaded', updateFreelancer);
// interval set to update every 2 seconds.
const updateFreelancerInterval = setInterval(addNewFreelancer, 3000);
