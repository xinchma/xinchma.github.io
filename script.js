const images = [
    'images/highdivide.jpg',
    'images/littlecolorado.jpg'
];

let lastIndex = -1;

// Function to select a random image different from the last one
function getRandomImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === lastIndex);
    lastIndex = randomIndex;
    return images[randomIndex];
}

// Set the src attribute of the img element to a random image URL
document.getElementById('randomImage').src = getRandomImage();