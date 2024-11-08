let currentImageIndex = 0;
const images = [
    "/BAGs/assets/lvsmall.avif",  // Louis Vuitton image
    "/BAGs/assets/prada.avif",     // Prada image
    "/BAGs/assets/dior.avif"       // Dior image
];

const texts = [
    "Louis Vuitton - Classic and Timeless",
    "Prada - Luxury Redefined",
    "Dior - Elegant and Iconic"
];

const details =[
    {
        price: "₱50,000",
        colorRate: "5/5",
        issues: "None",
        condition: "Brand New"
    },
    {
        price: "₱40,000",
        colorRate: "4/5",
        issues: "Slight wear on the edges",
        condition: "Gently Used"
    },
    {
        price: "₱60,000",
        colorRate: "5/5",
        issues: "No issues",
        condition: "Like New"
    }
]

function changeContent(index) {
    const imgElement = document.querySelector('.grid-item.image img.second');
    const textElement = document.querySelector('.display-text');
    const descriptionElement = document.querySelector('.description');

    // Update image and text for the second section
    imgElement.src = images[index];
    textElement.innerHTML = texts[index];

    const { price, colorRate, issues, condition } = details[index];
    descriptionElement.innerHTML = `
        <strong>PRICE:</strong> ${price}<br>
        <strong>COLOR RATE:</strong> ${colorRate}<br>
        <strong>ISSUES:</strong> ${issues}<br>
        <strong>CONDITION:</strong> ${condition}
    `;

    // Reset and apply animation to text and image
    imgElement.style.animation = 'none';
    textElement.style.animation = 'none';

    setTimeout(() => {
        imgElement.style.animation = 'slideLeft 1s forwards';
        textElement.style.animation = 'slideUp 1s forwards';
    }, 100); // Small delay to restart animation
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Loop around the images
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Go to last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Go back to first image
    }

    // Update the image source
    document.querySelector('.grid-item.image img.landing').src = images[currentImageIndex];
}
