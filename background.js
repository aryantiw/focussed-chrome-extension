// List of social media websites to block
var blockedSites = [  "*://www.facebook.com/*",  "*://www.twitter.com/*",  "*://www.instagram.com/*"];

// Listen for web requests and block them if they match a blocked site
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    for (var i = 0; i < blockedSites.length; i++) {
      if (details.url.match(blockedSites[i])) {
        return {cancel: true};
      }
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
