document.addEventListener('DOMContentLoaded', function() {
    // Get the HTML tag
    const htmlTag = document.querySelector('html');

    // Get the button
    const languageButton = document.getElementById('languageButton');

    // Set initial language and class
    let currentLanguage = 'en';
    let currentClass = 'original-ltr';

    // Add click event listener to the button
    languageButton.addEventListener('click', function() {
        // Toggle between 'en' and 'es'
        currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';

        // Toggle class between 'original-ltr' and 'translated-ltr'
        currentClass = (currentClass === 'original-ltr') ? 'translated-ltr' : 'original-ltr';

        // Change the lang attribute of the HTML tag
        htmlTag.setAttribute('lang', currentLanguage);

        // Update the class of the HTML tag
        htmlTag.setAttribute('class', currentClass);
    });
});
