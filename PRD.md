# Product Requirements Document: `peek`

## 1. Overview
**`peek`** is a lightweight JavaScript bookmarklet designed to help users quickly bypass soft paywalls, avoid intrusive cookie/GDPR banners, or recover deleted content. With a single click, it captures the URL of the active browser tab and redirects the user to the latest snapshot of that page on an internet archiving service.

## 2. Problem Statement
Readers frequently encounter friction when browsing the web:
1. **Soft Paywalls / Registration Walls**: News sites and blogs requiring an account or subscription to read a single article.
2. **Link Rot / Stealth Edits**: Content is removed or modified, and the user wants to see what the page *used* to say.
3. **Friction**: Manually copying a URL, opening a new tab, navigating to an archive site, pasting the URL, and hitting search takes 15–30 seconds. 

## 3. Target Audience
*   **Researchers & Journalists** who need to cite immutable versions of web pages.
*   **Avid Readers** who frequently hit article limits on news platforms.
*   **Privacy-Conscious Users** who want to read an article without accepting a site's targeted tracking cookies.

## 4. User Stories
*   **US1:** As a reader, I want to click a single button in my bookmarks bar to instantly read a paywalled article via an archive.
*   **US2:** As a researcher, I want a way to quickly check the Wayback Machine for older versions of the current page.
*   **US3:** As a user, I want the tool to be completely native to the browser, requiring no heavy extensions or background processes.

## 5. Functional Requirements
*   **FR1: URL Extraction.** The script must accurately capture the full `window.location.href` of the active tab.
*   **FR2: Primary Redirection (Archive.is).** By default, clicking the bookmarklet should redirect the current tab to `https://archive.is/latest/[CURRENT_URL]`. (Archive.is is generally the most effective at stripping paywalls).
*   **FR3: Secondary Redirection (Wayback Machine).** If the user holds the `Shift` key while clicking the bookmarklet, it should instead redirect to `https://web.archive.org/web/*/[CURRENT_URL]`.
*   **FR4: Anti-Loop Protection.** If the user is *already* on an `archive.is` or `web.archive.org` domain, the script should silently fail or alert the user, preventing an infinite loop of archiving the archive.

## 6. Non-Functional Requirements
*   **Performance:** Execution must be instantaneous (<100ms).
*   **Compatibility:** Must work on all modern desktop and mobile browsers that support bookmarklets (Chrome, Safari, Firefox, Edge).
*   **Security:** Must not require external libraries or CDNs. No tracking or telemetry.

## 7. Technical Implementation details

### Logic Flow:
1. Capture `currentUrl = window.location.href`.
2. Check if `currentUrl` includes `archive.is`, `archive.ph`, or `web.archive.org`. If true, exit.
3. Listen for the `Shift` key state (via the `window.event` object if possible in the context). *Note: capturing modifier keys in a standard bookmarklet can be tricky without an active event listener. A simpler fallback: use `confirm()` for user choice, or just stick to one service per bookmarklet.* 
    *   *Simpler Alternative:* Stick to `archive.is` as the universal default, as it solves 95% of the user stories. Let's design the MVP around `archive.is/latest/`.

### Draft MVP Code (Minified for Bookmarklet):
```javascript
javascript:(function(){
  const url = window.location.href;
  const archives = ['archive.is', 'archive.ph', 'archive.today', 'web.archive.org'];
  if(archives.some(a => url.includes(a))) {
    alert("You're already on an archive page!");
    return;
  }
  window.location.href = 'https://archive.is/latest/' + encodeURIComponent(url);
})();
```

## 8. Out of Scope (For MVP)
*   Creating a brand new snapshot if one doesn't exist (this requires bypassing CAPTCHAs on archive.is, so we will rely on `/latest/` which prompts the user to archive it manually if it's missing).
*   Handling local URLs (e.g., `localhost:` or `file://`).

## 9. Launch Strategy
*   **Repository:** Create a GitHub repo named `peek` (following `bttn`).
*   **Landing Page:** A simple `README.md` or GitHub Page with a draggable "Peek" link.
*   **Demonstration:** A GIF showing a user hitting a New York Times/Bloomberg paywall, clicking the bookmarklet, and instantly reading the clean article.