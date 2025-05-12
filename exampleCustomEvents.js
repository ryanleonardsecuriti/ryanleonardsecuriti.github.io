//Write consents to each different data layer variables

/*SecuritiSDK.onReady(sdk => {
  let consent = sdk.getConsent();

  let cookieCategoryGranted = [];
  let cookieCategoryDenied = [];

  if (consent && consent.category) {
    for (const categoryName in consent.category) {
      if (consent.category.hasOwnProperty(categoryName)) { // Important check
        const consentStatus = consent.category[categoryName];
        if (consentStatus === "granted") {
          cookieCategoryGranted.push(categoryName);
        } else if (consentStatus === "denied") {
          cookieCategoryDenied.push(categoryName);
        }
      }
    }
  }

  console.log("Granted Categories:", cookieCategoryGranted);
  console.log("Denied Categories:", cookieCategoryDenied);

      window.gtmDataLayer = window.gtmDataLayer || [];

    gtmDataLayer.push({
      'event': 'consent_data', // You can use a custom event name
      'cookieCategoryGranted': cookieCategoryGranted,
      'cookieCategoryDenied': cookieCategoryDenied
    });


});*/
