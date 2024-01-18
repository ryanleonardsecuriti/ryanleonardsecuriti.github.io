document.addEventListener('DOMContentLoaded', function() {
    // Get the button and content element
    const translateButton = document.getElementById('translateButton');
    const translatedContent = document.getElementById('translatedContent');

    // Set the URL for the translation JSON file
    const translationURL = "https://example.com/path/to/translation.json";

    // Function to fetch and apply translation
    function applyTranslation() {
        // Make an HTTP request to the specified URL
        fetch(translationURL)
            .then(response => {
                // Check if the response status is OK (status code 200)
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Failed to fetch translation (${response.status} ${response.statusText})`);
                }
            })
            .then(data => {
                // Update the content with the translated text
                translatedContent.textContent = data.translations.default;
            })
            .catch(error => {
                console.error('Error fetching or applying translation:', error);
            });
    }

    // Add click event listener to the button
    translateButton.addEventListener('click', function() {
        // Trigger the translation by calling the function
        applyTranslation();
    });
});
