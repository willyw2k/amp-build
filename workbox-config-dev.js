module.exports = {
  "globDirectory": "./src/",
  "globPatterns": [
    "images/**.*",
    "offline.html",
    "shell.html"
  ],
  "swSrc": "workbox-sw.js",
  "swDest": "src/sw.js",
  "globIgnores": [
    "./workbox-config.js"
  ]
};
