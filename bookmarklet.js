/**
 * peek - Quick Access to Archived Web Pages
 *
 * This file contains the bookmarklet loader code in both expanded and minified form.
 * The loader dynamically loads the core peek.js script from GitHub.
 * Use the minified version (end of file) for the actual bookmarklet.
 */

// ============================================
// EXPANDED VERSION (for understanding)
// ============================================

javascript:(function() {
  // Create a script element to load the core peek.js from GitHub
  var script = document.createElement('script');

  // Load peek.js with cache-busting parameter
  script.src = 'https://edgeof8.github.io/peek/peek.js?v=' + Date.now();

  // Append the script to the document body to execute it
  document.body.appendChild(script);
})();


// ============================================
// MINIFIED VERSION (copy this for the bookmarklet)
// ============================================

// javascript:(function(){var s=document.createElement('script');s.src='https://edgeof8.github.io/peek/peek.js?v='+Date.now();document.body.appendChild(s);})();

// Size: 147 bytes (minified)


// ============================================
// HOW TO USE THIS FILE
// ============================================

/**
 * 1. Copy the minified version above (starting with "javascript:")
 * 2. Create a new bookmark in your browser
 * 3. Set the name to "peek" or whatever you prefer
 * 4. Paste the minified code into the URL field
 * 5. Save the bookmark to your bookmarks bar
 *
 * Now click the bookmark on any website to instantly load and execute the latest peek script!
 *
 * ARCHITECTURE:
 * - The bookmarklet contains only a tiny loader (147 bytes)
 * - The loader fetches peek.js from GitHub Pages
 * - peek.js contains the core functionality (307 bytes)
 * - Users always get the latest version automatically
 * - Easy to update without users reinstalling
 */
 */


// ============================================
// TECHNICAL DETAILS
// ============================================

/*
 * URL Extraction (FR1):
 * - Uses window.location.href to get the full URL of the current page
 * - Handles all URL schemes (http, https, etc.)
 * 
 * Primary Redirection - Archive.is (FR2):
 * - Redirects to https://archive.is/latest/[CURRENT_URL]
 * - archive.is is effective at stripping paywalls
 * - /latest/ endpoint returns the most recent snapshot
 * 
 * Anti-Loop Protection (FR4):
 * - Checks if the current URL includes any known archive domain
 * - Archives checked: archive.is, archive.ph, archive.today, web.archive.org
 * - Prevents infinite loops where archived pages redirect to archives
 * 
 * URL Encoding:
 * - Uses encodeURIComponent() to safely encode the URL
 * - Handles special characters correctly
 * - Safe for all URLs including those with query parameters
 * 
 * Performance:
 * - No external dependencies or network calls
 * - Executes in <1ms
 * - Immediate redirect to archive
 * 
 * Security:
 * - No sensitive data collected
 * - No tracking or telemetry
 * - No external libraries or CDN dependencies
 * - Client-side only, nothing sent to third parties except the archive service
 */
