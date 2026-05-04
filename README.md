# peek

A lightweight JavaScript bookmarklet to bypass soft paywalls and access archived versions of web pages instantly.

## What is peek?

**peek** helps you read paywalled articles, check archived versions of deleted content, and avoid intrusive paywalls—with a single click.

- 🚀 **Instant.** One click redirects you to the latest archived snapshot of any webpage.
- 🔒 **Private.** No tracking, no telemetry, no external libraries.
- 📱 **Universal.** Works on Chrome, Safari, Firefox, Edge, and mobile browsers.

## Installation

### Option 1: Drag-and-Drop (Easiest)

1. Bookmark this page (or open it in your browser)
2. Find the **Peek** button below
3. Drag it to your bookmarks bar

**👉 [Peek](javascript:(function(){const url=window.location.href;const archives=['archive.is','archive.ph','archive.today','web.archive.org'];if(archives.some(a=>url.includes(a))){alert("You're already on an archive page!");return;}window.location.href='https://archive.is/latest/'+encodeURIComponent(url);})();)** ← Drag this link to your bookmarks bar

### Option 2: Manual Installation

1. Create a new bookmark in your browser
2. Set the name to `Peek`
3. Paste the following code into the URL field:

```javascript
javascript:(function(){const url=window.location.href;const archives=['archive.is','archive.ph','archive.today','web.archive.org'];if(archives.some(a=>url.includes(a))){alert("You're already on an archive page!");return;}window.location.href='https://archive.is/latest/'+encodeURIComponent(url);})();
```

## How to Use

1. Navigate to any website
2. Click the **Peek** button in your bookmarks bar
3. You'll be instantly redirected to the latest archived snapshot on **archive.is**

### What It Does

- ✅ Captures the current page's URL
- ✅ Checks if you're already on an archive site (prevents infinite loops)
- ✅ Redirects to `archive.is/latest/[URL]` for instant access to the archived page
- ✅ Automatically encodes the URL for safe transmission

### What It Doesn't Do

- ❌ Create new snapshots (archive.is will prompt you if needed)
- ❌ Handle local URLs like `localhost` or `file://`

## Use Cases

### 1. Bypass Soft Paywalls 📰
Hit a paywall on a news site? Click **Peek** to read the article via the archive.

### 2. Recover Deleted Content 🔄
Website removed or changed an article? **Peek** shows you what it used to say.

### 3. Avoid Tracking Cookies 🍪
Read articles without accepting targeted tracking cookies.

### 4. Research & Citation 🔍
Journalists and researchers can quickly access immutable versions of web pages.

## How It Works

```javascript
// Step 1: Get the current URL
const url = window.location.href;

// Step 2: Check if already on an archive (anti-loop protection)
const archives = ['archive.is', 'archive.ph', 'archive.today', 'web.archive.org'];
if(archives.some(a => url.includes(a))) {
  alert("You're already on an archive page!");
  return;
}

// Step 3: Redirect to archive.is
window.location.href = 'https://archive.is/latest/' + encodeURIComponent(url);
```

## FAQ

**Q: Is this legal?**  
A: Yes. Peek doesn't bypass encryption or authentication—it simply redirects to publicly accessible archived snapshots, similar to visiting archive.is directly in your browser.

**Q: Will it work on all websites?**  
A: Archive.is works on most websites, but some with heavy JavaScript or dynamic content may not archive perfectly. Peek does its best!

**Q: Is my data being tracked?**  
A: No. Peek contains zero tracking code. It's 100% client-side and runs entirely in your browser.

**Q: What if the archive doesn't exist?**  
A: Archive.is will show a form asking if you'd like to create one. Just click "Save page" to create the snapshot.

**Q: Can I use this on mobile?**  
A: Yes! Mobile bookmarklets work on all modern browsers (Chrome, Safari, Firefox). Installation steps may vary slightly.

## Technical Details

- **Performance:** Executes in <1ms
- **Size:** 307 bytes (minified)
- **Dependencies:** None
- **Browser Support:** All modern browsers (Chrome, Safari, Firefox, Edge, Opera, etc.)

## License

MIT

## Contributing

Found a bug or have a suggestion? Open an issue or submit a pull request!

---

**Made with ❤️ for readers who just want to read**
