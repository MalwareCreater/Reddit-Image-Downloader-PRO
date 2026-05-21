# Reddit Image Downloader PRO
Userscript for downloading Reddit single images &amp; galleries with ordered filenames, without clicking and saving each image separately.

It is also capable of renaming the file with the post title and adding a number to the filename to preserve the sequence in which the images have been posted in the Reddit post.

Eg :- 
- Post title `Cute cat 🥰🥰`. Suppose this post contains 10 pics.
- `Ctrl + Q` triggers the scripts. The downloaded files will be named as `cute-cat-v0-01-<image.id>.jpg`, `cute-cat-v0-02-<image.id>.jpg`, `...`, and `cute-cat-v0-10-<image.id>.jpg`
> Some users may face issues with the file renaming. Please refer [Known Issues](https://github.com/MalwareCreater/Reddit-Image-Downloader-PRO/tree/main#known-issues).

## Features

- Ctrl+Q download shortcut
- Ordered filenames
- Gallery support
- Single-image support
- Works with Tampermonkey / OrangeMonkey

## Installation
1. Install a userscript manager:
- [Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [OrangeMonkey](https://chromewebstore.google.com/detail/orangemonkey/ekmeppjgajofkpiofbebgcbohbmfldaf)

> I will suggest **OrangeMonkey** to avoid any additional setup from the userscript manager side.

2. Install the script:

- Open `reddit-image-downloader-pro.min.user.js` or click on [HERE](https://github.com/MalwareCreater/Reddit-Image-Downloader-PRO/blob/main/reddit-image-downloader-pro.min.user.js)
- Then click **Raw**

3. Your userscript manager will show an install prompt.

## Usage

Open a Reddit gallery post or a single image post and press:

`Ctrl + Q`

Images will download automatically.

## Current Capability Level

Right now the script supports:

| Features             | Status |
| -------------------- | ------ |
| JPG                  | ✅      |
| PNG                  | ✅      |
| WEBP                 | ✅      |
| Single image posts   | ✅      |
| Gallery posts        | ✅      |
| Mixed gallery (still images + gifs)       | ✅      |
| Reddit GIF → MP4     | ✅      |
| Animated gallery GIF | ✅      |
| Proper naming (subjected to browser compatibility)        | ✅      |
| old.reddit           | ✅      |
| TamperMonkey + OrangeMonkey              | ✅      |

## Tested On

- Tampermonkey
- OrangeMonkey
- Chromium
- Google Chrome

## Known Issues

- The script has no support for `sh.reddit`.
- Google Chrome (newer versions) may ignore custom filenames due to browser download restrictions. Older versions will support custom filenames.
- Chromium generally handles filename renaming better.
- File names in posts with single image or GIF may break in some browsers. This will be fixed separately later.

## Older Versions

Previous stable builds are available in the [Releases](https://github.com/MalwareCreater/Reddit-Image-Downloader-PRO/releases/tag/v2.1.1) section.

## Changelog

### v2.2.0
- Added support for `old.reddit`
- GIFs from single media posts and galleries can be downloaded in `.mp4` format, which is much smaller than the actual gif file (roughly 15x-20x reduction in file size)

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
