import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { PDFDocument } from 'pdf-lib';
import dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '.env') });
const app = express();
const upload = multer({ storage: multer.memoryStorage() });
app.use(cors());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function extractTextFromPdf(buffer) {
    const pdfDoc = await PDFDocument.load(buffer);
    const pages = pdfDoc.getPages();
    const text = pages.map((page) => page.getTextContent?.()).filter(Boolean);
    
    const resolvedText = await Promise.all(
        text.map(async (contentPromise, i) => {
        const content = await contentPromise;
        return content.items.map((item) => item.str).join(' ');
    }));

    return resolvedText.join('\n');
}

let isAnalyzing = false;

app.post('/coverletter', async (req, res) => {
    if (isAnalyzing) {
        return res.status(429).json({ message: 'Too many requests. Please wait.' });
    }

    isAnalyzing = true;

    try {
        const { jobTitle, companyName, jobDescription } = req.body;

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
            {
                role: 'user',
                content: 
                    `You are a professional cover letter writer focused on clarity, relevance, and job-market competitiveness.
                    Your job is to write cover letters with the precision of a hiring manager or recruiter at a top tech company.
                    Avoid all buzzwords or vague language like “dynamic,” “synergy,” “go-getter,” etc.
                    Prioritize clear, measurable impact, and well-structured phrasing.
                    Write a cover letter for the following job:\n\n${jobTitle} at ${companyName}\n\n${jobDescription}\n\n`,
            },
            ],
        });

        res.json({ coverLetter: response.choices[0].message.content });
    } catch (err) {
        console.error(err.response?.data || err);
        res.status(500).send('Cover letter generation failed.');
    } finally {
        isAnalyzing = false;
    }
});

app.post('/analyze', upload.single('resume'), async (req, res) => {
    if (isAnalyzing) {
        return res.status(429).json({ message: 'Too many requests. Please wait.' });
    }

    isAnalyzing = true;

    try {
        const { buffer } = req.file;
        const data = await extractTextFromPdf(buffer);
        const resumeText = data.text;

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
            {
                role: 'user',
                content: 
                    `You are a professional resume analyzer focused on clarity, relevance, and job-market competitiveness.
                    Your job is to review resumes with the precision of a hiring manager or recruiter at a top tech company.
                    Avoid all buzzwords or vague language like “dynamic,” “synergy,” “go-getter,” etc.
                    Prioritize clear, measurable impact, and well-structured phrasing.
                    Review resumes in the following format :
                    Strengths, Areas to Improve and Suggestions edits.
                    Analyze this resume according to above mentioned demands:\n\n${resumeText}\n\n`,
            },
            ],
        });

    res.json({ feedback: response.choices[0].message.content });
    } catch (err) {
        console.error(err.response?.data || err);
        res.status(500).send('Resume analysis failed.');
    } finally {
        isAnalyzing = false;
    }
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));