# Reddit Image Downloader PRO
Userscript for downloading Reddit single images &amp; galleries with ordered filenames.

## Features

- Ctrl+Q download shortcut
- Ordered filenames
- Gallery support
- Single-image support
- Works with Tampermonkey / OrangeMonkey

## Installation
1. Install a userscript manager:
- Tampermonkey
- OrangeMonkey

2. Install the script:

- Open `reddit-image-downloader-pro.min.js` or click on [HERE](https://github.com/MalwareCreater/Reddit-Image-Downloader-PRO/blob/main/reddit-image-downloader-pro.min.js)
- Then click **Raw**

3. Your userscript manager will show an install prompt.

## Usage

Open a Reddit gallery post or a single image post and press:

`Ctrl + Q`

Images will download automatically.

## Known Issues

- Google Chrome may occasionally ignore custom filenames provided by `GM_download()` due to browser download restrictions.
- This behavior depends on the browser version, userscript manager, and Chromium download API implementation.
- Chromium and some Chromium forks may preserve filenames correctly.

## Changelog

### v2.1.1
- Tweaked some functions to make the script work faster.

### v2.1.0
- Capable of renaming downloaded images from single image posts in `<post-title>-v0-<mediaID>.jpg` format.

### v2.0.0
- Support for the script to be used in multiple Userscript Managers, mainly **OrangeMonkey** & **TamperMonkey**.

### v1.4.0
- Made the extension detection universal within Reddit.
- Added support for downloading images from posts with Single image with a random file name.

### v1.3.1
- Capable of renaming downloaded images in `<post-title>-v0-<image.numbering.in.same.sequence.as.posted.with.num.padding>-<mediaID>.jpg` format.

### v1.3.0
- Capable of renaming downloaded images in `<post-title>-v0-<image.numbering.in.same.sequence.as.posted>-<mediaID>.jpg` format.

### v1.2.0
- Capable of renaming downloaded images in `<post-title>-<mediaID>.jpg` format.

### v1.1.0
- Improved extension detection
- Fixed some broken logic, mainly false triggering.

### v1.0.0
- Initial launch. Just capable of downloading images in .jpg format only from galleries.

## Security / Transparency

- VirusTotal scan available for the current release
- No external trackers
- No remote code loading
- No data collection

## Disclaimer

This script is intended for personal archival and educational purposes only.

Users are responsible for complying with Reddit's Terms of Service and applicable copyright laws.

Do not use this project for large-scale scraping or redistribution of copyrighted content.

The author is not responsible for misuse of this software.

## License

MIT License
