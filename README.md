# pptx2pdf
Convert PPTX files to PDF with ease.

A pretty simple library which uses Google Slides to convert PPTX to PDF.
This library uses [node-fetch](https://www.npmjs.com/package/node-fetch) to fetch data from google slides.

Usage:
```js
var convert = require("./pptx2pdf.js");
async function main() {
var url = await convert("https://example.com/presentation.pptx");
console.log(url);
}
main();
```
