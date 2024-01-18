document.addEventListener('DOMContentLoaded', function() {
    // Get the HTML tag
    const htmlTag = document.querySelector('html');

    // Get the button
    const languageButton = document.getElementById('languageButton');

    // Set initial language
    let currentLanguage = 'en';

    // Add click event listener to the button
    languageButton.addEventListener('click', function() {
        // Toggle between 'en' and 'es'
        currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';

        // Change the lang attribute of the HTML tag
        htmlTag.setAttribute('lang', currentLanguage);
    });
});
