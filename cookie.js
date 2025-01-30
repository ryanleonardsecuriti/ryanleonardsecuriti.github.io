// cookie.js

// Function to set the cookie
function setTestCookie() {
  document.cookie = "testCookie=HelloWorld; path=/; max-age=3600; secure";
  console.log("Cookie has been set!");
}

// Function to read the cookie
function getTestCookie() {
  let cookieValue = getCookie("testCookie");
  if (cookieValue) {
    console.log("Cookie value: " + cookieValue);
  } else {
    console.log("Cookie not found");
  }
}

// Helper function to retrieve a cookie by name
function getCookie(name) {
  let cookieArr = document.cookie.split("; ");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name === cookiePair[0]) {
      return cookiePair[1];
    }
  }
  return null;
}

// Run the setTestCookie function when the page loads
window.onload = function() {
  setTestCookie(); // Sets the cookie
  getTestCookie(); // Checks if the cookie is set
};
