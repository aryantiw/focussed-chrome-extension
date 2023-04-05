// Get the checkbox elements
var facebookCheckbox = document.getElementById("facebookCheckbox");
var twitterCheckbox = document.getElementById("twitterCheckbox");
var instagramCheckbox = document.getElementById("instagramCheckbox");

// Update the blocked sites based on the checkbox states
facebookCheckbox.addEventListener("change", updateBlockedSites);
twitterCheckbox.addEventListener("change", updateBlockedSites);
instagramCheckbox.addEventListener("change", updateBlockedSites);

// Function to update the blocked sites based on the checkbox states
function updateBlockedSites() {
  // Define an array of social media sites to block
  var blockedSites = [];

  // Check the state of each checkbox and add the corresponding site to the blocked sites array
  if (facebookCheckbox.checked) {
    blockedSites.push("*://*.facebook.com/*");
  }
  if (twitterCheckbox.checked) {
    blockedSites.push("*://*.twitter.com/*");
  }
  if (instagramCheckbox.checked) {
    blockedSites.push("*://*.instagram.com/*");
  }
  // Add more social media sites as needed

  // Update the blocked sites in the chrome extension storage
  chrome.storage.sync.set({ blockedSites: blockedSites }, function() {
    console.log("Blocked sites updated:", blockedSites);
  });
}
