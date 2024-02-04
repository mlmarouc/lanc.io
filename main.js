
document.addEventListener('DOMContentLoaded', function() {

// Array of lunch names
const lunchNames = [
    'Rice and Noodles',
    'Harvest Seasonal Grill',
    'SukhoThai',
    'Lancaster Dispensing Company',
    'Sprout',
    'Robburitos',
    'Isaacs Restaurant and Deli',
    'Oka Asian Fusion',
    'Harvest Seasonal Grill',
    'The Fridge',
    'Norbu Lancaster',
    'Souvlaki Boys Grill',
    'Southern Market',
    'The Fat Crab Cafe',
    'Frisco\'s Chicken',
    'Caribbean Wave Jamaican Jerk',
    'Chellas Arepa Kitchen',
];

// Array of dinner names
const dinnerNames = [
    'C\'est La Vie',
    'Shot and Bottle',
    'Osteria Avanti',
    'Annie Bailey\'s',
    'The Pressroom',
    'The Belvedere Inn',
    'Bull\'s Head Public House',
    'Tellus360',
    'Conway Social Club',
    'The Horse Inn',
    'Quip\'s Pub',
    'La Cocina Mexicana',
    'The Belvedere Inn',
    'Double C',
    'John J. Jefferies',
    'Bistro Barberet and Bakery',
    'Citronnelle',
    'Luca Italian Kitchen',
    'Iron Hill Brewery',
    'Root',
    'Yuzu Asian Cuisine',
    'Decades',
    'The Corner at Musser',
    'Himalayan Curry and Grill',
    'Floras',
    'Southern Market',
    'Lombardo\'s',
    'Proof',
    'Josephine\'s',
    'Pepper Theo Cafe',
    'El Serrano',
    'Zoetropolis',
    'Taj Mahal',
];

// Array of breakfast names
const breakfastNames = [
    'Rachel\'s Cafe and Creperie',
    'On Orange',
    'Onions Cafe',
    'Two Poodles Bagels',
    'Cafe One Eight',
    'Amanita',
];

function displayRandomName() {
    // Call the pickRandomName function from the external JS file
    const randomName = pickRandomName();

    // Display the random name in the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>${randomName}</p>`;
}

function pickRandomName() {
    // Get a random index from the names array
    const randomIndex = Math.floor(Math.random() * lunchNames.length);

    // Get the random name using the random index
    const randomLunchName = lunchNames[randomIndex];

    // Return the random name
    return randomLunchName;
}

// Assuming your buttons have the class 'option-button'
const optionButtons = document.querySelectorAll('.option-button');

// Adding click event listener to each button
optionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const type = button.getAttribute('data-type');
        toggleRestaurantType(type);
    });
});


let currentRestaurantType = '';

function toggleRestaurantType(type) {
    console.log('Type:', type);
    currentRestaurantType = type;

    // Remove the 'selected' class from all buttons
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => button.classList.remove('selected'));

    // Add the 'selected' class to the clicked button
    const selectedButton = document.querySelector(`.option-button[data-type='${type}']`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

function pickRandomName() {
    let namesArray;

    // Set the namesArray based on the currentRestaurantType
    switch (currentRestaurantType) {
        case 'breakfast':
            namesArray = breakfastNames;
            break;
        case 'lunch':
            namesArray = lunchNames;
            break;
        case 'dinner':
            namesArray = dinnerNames;
            break;
        default:
            namesArray = lunchNames; // Default to lunch if the type is not recognized
    }

    // Get a random index from the names array
    const randomIndex = Math.floor(Math.random() * namesArray.length);

    // Get the random name using the random index
    const randomRestaurantName = namesArray[randomIndex];

    // Return the random name
    return randomRestaurantName;
}

function displayRandomName() {
    // Call the pickRandomName function from the external JS file
    const randomName = pickRandomName();

    // Display the random name in the output div
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `<p>${randomName}</p>`;
}

// Assuming your button has the class 'feed'
const feedButton = document.querySelector('.feed');

// Adding click event listener to the button
feedButton.addEventListener('click', function() {
    displayRandomName();
});

});

// Check box for open now
// Eliminate options - no repeats