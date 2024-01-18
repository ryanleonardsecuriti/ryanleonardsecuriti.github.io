document.addEventListener('DOMContentLoaded', function() {
    // Get the HTML tag
    const htmlTag = document.querySelector('html');

    // Get the button
    const languageButton = document.getElementById('languageButton');

    // Set the URL for the language switch
    const languageSwitchURL = "https://cdn-prod.securiti.ai/consent/cookie_banner/f849f6ee-3145-493e-a066-f4277dd87cb8/8bdb6a21-5691-411e-a1d0-96dd0ab85958/es.json";

    // Function to fetch and apply translation
    function applyTranslation() {
        // Make an HTTP request to the specified URL
        fetch(languageSwitchURL)
            .then(response => response.json())
            .then(data => {
                // Update the content with the translated text
                const translatedContent = document.getElementById('translatedContent');
                translatedContent.textContent = data.translatedText;
            })
            .catch(error => {
                console.error('Error fetching translation data:', error);
            });
    }

    // Add click event listener to the button
    languageButton.addEventListener('click', function() {
        // Trigger the translation by calling the function
        applyTranslation();
    });
});
