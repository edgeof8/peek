# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-05-04

### Changed
- **Architecture Refactor:** Migrated from monolithic bookmarklet to remote loader pattern
- **Auto-updating:** Bookmarklet now dynamically loads the latest script from GitHub
- **Loader Size:** Reduced bookmarklet size from 307 bytes to 147 bytes (loader only)
- **Core Script:** Extracted core functionality into separate `peek.js` file

### Added
- Remote script loading with cache-busting (`?v=` + timestamp)
- Automatic updates for all users without reinstallation
- Improved maintainability and deployment workflow

## [1.0.0] - 2026-05-04

### Added
- Initial release of peek bookmarklet
- URL extraction and redirection to archive.is/latest/
- Anti-loop protection for archive domains
- URL encoding for safe transmission
- GitHub Pages landing page with drag-and-drop installation
- Comprehensive README with installation and usage instructions
- Contributing guidelines
- MIT License
- Full source code documentation

### Features
- Lightweight bookmarklet (307 bytes minified)
- Zero external dependencies
- No tracking or telemetry
- Works on all modern browsers (desktop and mobile)
- Instant redirection (<1ms)
- Bypasses soft paywalls
- Access to archived/deleted content

## Future Improvements

- [ ] Support for multiple archive services (user choice)
- [ ] Shift+click modifier for Wayback Machine
- [ ] Browser extension version for advanced features
- [ ] Keyboard shortcut support
- [ ] Custom archive service configuration
