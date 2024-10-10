function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function displayHobbies() {
    const checkboxes = document.querySelectorAll('input[name="hobby"]:checked');
    let hobbies = [];
    checkboxes.forEach((checkbox) => {
        hobbies.push(checkbox.value);
    });
    document.getElementById('hobbyList').innerText = hobbies.join(', ');
}

function displayCountryInfo() {
    const country = document.getElementById('countrySelect').value;
    let info = '';

    switch (country) {
        case 'Україна':
            info = 'Столиця: Київ. Населення: 41 мільйон.';
            break;
        case 'США':
            info = 'Столиця: Вашингтон. Населення: 331 мільйон.';
            break;
        case 'Німеччина':
            info = 'Столиця: Берлін. Населення: 83 мільйони.';
            break;
        default:
            info = 'Оберіть країну.';
    }

    document.getElementById('countryInfo').innerText = info;
}

function displayRating() {
    const rating = document.querySelector('input[name="rating"]:checked').value;
    document.getElementById('ratingMessage').innerText = `Дякуємо за вашу оцінку ${rating}!`;
}

function calculatePrice() {
    let basePrice = 0;
    const size = document.querySelector('input[name="size"]:checked');
    const toppings = document.querySelectorAll('input[name="topping"]:checked');

    if (size) {
        basePrice += parseInt(size.value);
    }

    toppings.forEach((topping) => {
        basePrice += parseInt(topping.value);
    });

    document.getElementById('pizzaPrice').innerText = basePrice;
}
