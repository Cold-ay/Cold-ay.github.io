# Cold-ay.github.io
Convert PDF to PNG.

## Feature
- Convert entire PDF file to separated PNG images
- Configurable scale/resolution (4 options)

## Basic Setup

```html
<!-- Include PDF.js library -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<!-- Include the converter module -->
<script src="pdfToPngConverter.js"></script>
```

**Parameters:**
- `pdfInput` (File|Blob|ArrayBuffer|Uint8Array): PDF file input
- `pageNum` (number): Page number (1-indexed)
- `options` (object):
- `scale` (number): Scale factor for rendering

## Password-Protected PDF 
- If password required, open a modal and waits for user input
- If password incorrect, error message return and lets user retry
- If user cancel input password, reutrn to upload state

## Notes
- Only designed for **browser environments** (DOM & Canvas)
- Processing happens in client-side (no server store)

## Future Update
- Other documents transformation (docx, jpeg, xlsx)
