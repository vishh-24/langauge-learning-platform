// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all language cards
    const languageCards = document.querySelectorAll('.language-card');

    // Add a click event listener to each card
    languageCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent default link behavior
            e.preventDefault();

            // Get the language name from the <h2> inside the card
            const languageName = card.querySelector('h2').textContent;

            // Show a confirmation popup
            const proceed = confirm(`Do you want to start learning ${languageName}?`);

            // If user confirms, navigate to the respective page
            if (proceed) {
                const link = card.querySelector('a').getAttribute('href');
                window.location.href = link;
            }
        });
    });
});
