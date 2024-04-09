
// Define an array of quotes
const quotes = [
    "Education is the most powerful weapon",
    "The only way to do great work is to love what you do",
    "Believe you can and you're halfway there",
    "The future belongs to those who believe in the beauty of their dreams",
    "Success is not final, failure is not fatal: It is the courage to continue that counts"
];

// Function to randomly select and set a quote
function setRandomQuote() {
    const quoteContainer = document.getElementById('quote-container');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteContainer.querySelector('.quote').textContent = quotes[randomIndex];
}

// Event listener for hovering over the quote container
document.getElementById('quote-container').addEventListener('mouseenter', setRandomQuote);






$(document).ready(function(){
    // Click event for left dots
    $('#left-dot-container .dot').click(function(){
        var target = $(this).data('target');
        $('#left-tile-container').find('.tile-row').css('transform', 'translateX(-' + (target * 50) + '%)');
    });

    // Click event for right dots
    $('#right-dot-container .dot').click(function(){
        var target = $(this).data('target');
        $('#right-tile-container').find('.tile-row').css('transform', 'translateX(-' + (target * 50) + '%)');
    });
});



    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleControls'), {
        interval: 2000, // Set the interval for automatic sliding (optional)
        wrap: true // Enable looping of slides
    });
