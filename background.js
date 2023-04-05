// Listen for web requests
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Define an array of social media sites to block
    var blockedSites = [
      "*://*.facebook.com/*",
      "*://*.twitter.com/*",
      "*://*.instagram.com/*"
      // Add more social media sites to block as needed
    ];

    // Check if the request URL matches any of the blocked sites
    if (blockedSites.some(site => details.url.includes(site))) {
      // Cancel the request to block the site
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
