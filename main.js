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

    // Define global variables to track current restaurant type and available names
    let currentRestaurantType = '';
    let availableNames = [];

    // Function to pick a random name based on the current restaurant type
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

        // Reinitialize the availableNames array if it's empty or when a new restaurant type is selected
        if (availableNames.length === 0) {
            availableNames = [...namesArray]; // Copy the namesArray
        }

        // Get a random index from the availableNames array
        const randomIndex = Math.floor(Math.random() * availableNames.length);

        // Remove the selected name from availableNames and return it
        return availableNames.splice(randomIndex, 1)[0];
    }

    // Function to display a random restaurant name
    function displayRandomName() {
        const randomName = pickRandomName();
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<p>${randomName}</p>`;
    }

    // Function to handle clicking on the "Feed Me" button
    function handleFeedButtonClick() {
        displayRandomName();
        feedButton.classList.add('clicked'); // Add the 'clicked' class to the button

        // Set a timeout to remove the 'clicked' class after 300 milliseconds
        setTimeout(function() {
            feedButton.classList.remove('clicked');
        }, 300); // 300 milliseconds
    }

    // Function to toggle the selected class for restaurant type buttons
    function toggleRestaurantType(type) {
        currentRestaurantType = type;
        availableNames = []; // Reset availableNames when a new restaurant type is selected

        // Remove the 'selected' class from all buttons
        const buttons = document.querySelectorAll('.option-button');
        buttons.forEach(button => button.classList.remove('selected'));

        // Add the 'selected' class to the clicked button
        const selectedButton = document.querySelector(`.option-button[data-type='${type}']`);
        if (selectedButton) {
            selectedButton.classList.add('selected');
        }
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

    // Assuming your button has the class 'feed'
    const feedButton = document.querySelector('.feed');

    // Adding click event listener to the button
    feedButton.addEventListener('click', handleFeedButtonClick);

});
