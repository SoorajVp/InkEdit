const express = require('express');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const path = require('path');
const axios = require('axios');
const cors = require('cors')

const app = express();
const port = 5000;

app.use(cors())
app.use(express.static('public'));

// Endpoint to fetch DOCX file from URL and convert to HTML
app.get('/convert', async (req, res) => {
    const fileUrl = req.query.url;

    // Check if the file is a PDF or DOCX based on the URL extension
    const fileExtension = path.extname(fileUrl).toLowerCase();

    try {
        // Fetch file from the provided URL
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
        const fileBuffer = Buffer.from(response.data);

        // Handle PDF files
        if (fileExtension === '.pdf') {
            const pdfData = await pdfParse(fileBuffer);

            // Convert PDF text to basic HTML structure
            const htmlContent = `
                
                <div>
                    ${pdfData.text.split('\n').map(line => `<p>${line}</p>`).join('')}
                </div>
            `;

            res.send(htmlContent);
        }
        // Handle DOCX files
        else if (fileExtension === '.docx') {
            const result = await mammoth.convertToHtml({ buffer: fileBuffer });
            res.send(result.value); // Send the converted HTML for DOCX
        } else {
            // Unsupported file type
            res.status(400).send('Unsupported file type. Please use a .pdf or .docx file.');
        }
    } catch (error) {
        res.status(500).send('Error processing file: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
