/**
 * peek - Quick Access to Archived Web Pages
 * 
 * This file contains the bookmarklet code in both expanded and minified form.
 * Use the minified version (end of file) for the actual bookmarklet.
 */

// ============================================
// EXPANDED VERSION (for understanding)
// ============================================

(function() {
  // Get the current URL
  const url = window.location.href;

  // List of archive domains to detect (anti-loop protection)
  const archives = ['archive.is', 'archive.ph', 'archive.today', 'web.archive.org'];

  // Check if we're already on an archive page
  if (archives.some(domain => url.includes(domain))) {
    alert("You're already on an archive page!");
    return;
  }

  // Redirect to archive.is/latest/ with the current URL encoded
  window.location.href = 'https://archive.is/latest/' + encodeURIComponent(url);
})();


// ============================================
// MINIFIED VERSION (copy this for the bookmarklet)
// ============================================

// javascript:(function(){const url=window.location.href;const archives=['archive.is','archive.ph','archive.today','web.archive.org'];if(archives.some(a=>url.includes(a))){alert('You\'re already on an archive page!');return;}window.location.href='https://archive.is/latest/'+encodeURIComponent(url);})();

// Size: 307 bytes (minified)


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
 * Now click the bookmark on any website to instantly redirect to its archive!
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
