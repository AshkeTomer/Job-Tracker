import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function Qna() {
    
    const [expanded, setExpanded] = useState(false);

    const handleChange = (isExpanded, panel) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" sx={{ color : '#e5e7eb', padding : 2, marginTop: 4 }}>
                    Frequent Q&A
                </Typography>
                <Typography variant="subtitle1" sx={{ color : '#e5e7eb' }}>
                    Below you can find answers to some common questions asked before or during the interview process.
                </Typography>
                <Typography variant="subtitle1" sx={{ color : '#e5e7eb' }}>
                    Take your time to go through it all and feel free to reach out to us upon any further questions.
                </Typography>
            </Box>
            
            <Box sx={{ display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 4}}>
                <Card sx={{ maxWidth: 800, width: '100%', padding: 2, backgroundColor: '#303030' }}>
                    <Accordion
                        expanded={expanded === 'panel1'}
                        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
                        sx={{
                            backgroundColor: '#161b22',
                            border: '1px solid #2a2a3c',
                            color: '#e5e7eb',
                            boxShadow: 'none',
                            '&.Mui-expanded': {
                                margin: 'auto',
                            }
                        }}>
                        <AccordionSummary
                            id="panel1-header"
                            aria-controls="panel1-content"
                            expandIcon={<ExpandMoreIcon sx={{ color: '#e5e7eb' }} />}
                            sx={{
                                backgroundColor: '#0d1117',
                                '& .MuiTypography-root': {
                                    fontWeight: 'bold',
                                },
                            }}>
                            <Typography sx={{ fontWeight: 'bold'}}>
                                Tell me about a time you handled a conflict at work.
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            backgroundColor: '#1f2937',
                            borderTop: '1px solid #2a2a3c',
                        }}>
                            <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                Why it’s important:
                            </Typography>
                            Interviewers use this to assess your interpersonal skills, emotional intelligence, and how you handle stress or disagreement. <br/>
                            They want to see that you can navigate challenges professionally and constructively.
                            <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                What’s a good response?
                            </Typography>
                            Use the STAR method (Situation, Task, Action, Result). <br/>
                            Focus on a real conflict, ideally one that shows you being proactive, empathetic, and focused on a solution. Avoid placing blame — instead, emphasize communication and collaboration.
                        </AccordionDetails>
                    </Accordion>
                    
                    <Accordion
                        expanded={expanded === 'panel2'}
                        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
                        sx={{
                            backgroundColor: '#161b22',
                            border: '1px solid #2a2a3c',
                            color: '#e5e7eb',
                            boxShadow: 'none',
                            '&.Mui-expanded': {
                                margin: 'auto',
                            }
                        }}>
                        <AccordionSummary
                            id="panel2-header"
                            aria-controls="panel2-content"
                            expandIcon={<ExpandMoreIcon sx={{ color: '#e5e7eb' }} />}
                            sx={{
                                backgroundColor: '#0d1117',
                                '& .MuiTypography-root': {
                                    fontWeight: 'bold',
                                },
                            }}>
                            <Typography sx={{ fontWeight : 'bold'}}>
                                What are your greatest strengths and weaknesses?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            backgroundColor: '#1f2937',
                            borderTop: '1px solid #2a2a3c',
                        }}>
                            <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                Why it’s important:
                            </Typography>
                                This question reveals self-awareness and honesty. 
                                Employers want to know if you’re reflective and willing to grow - not just bragging or avoiding real flaws.
                            <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                What’s a good response?
                            </Typography>
                            Pick a genuine strength that’s relevant to the job and back it up with a short story. <br/>
                            For your weakness, mention something real but not a deal-breaker, and explain how you’re working to improve it. <br/>
                            For example: “I used to struggle with delegating, but I’ve been practicing team trust and gradually improving through mentorship.”
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        expanded={expanded === 'panel3'}
                        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
                        sx={{
                            backgroundColor: '#161b22',
                            border: '1px solid #2a2a3c',
                            color: '#e5e7eb',
                            boxShadow: 'none',
                            '&.Mui-expanded': {
                                margin: 'auto',
                            }
                        }}>
                        <AccordionSummary
                            id="panel3-header"
                            aria-controls="panel3-content"
                            expandIcon={<ExpandMoreIcon sx={{ color: '#e5e7eb' }} />}
                            sx={{
                                backgroundColor: '#0d1117',
                                '& .MuiTypography-root': {
                                    fontWeight: 'bold',
                                },
                            }}>
                            <Typography sx={{ fontWeight : 'bold'}}>
                                Why do you want to work here?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            backgroundColor: '#1f2937',
                            borderTop: '1px solid #2a2a3c',
                        }}>
                            <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                Why it’s important:
                            </Typography>
                            This tests your motivation and whether you've done your homework. <br/>
                            Interviewers want someone who’s genuinely interested in their company and mission and not just job-hunting blindly.

                            <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                What’s a good response?
                            </Typography>
                            Show specific knowledge about the company’s goals, culture, or product. <br/>
                            Mention how they align with your values or career goals. <br/>
                            For instance: “I admire your focus on sustainability and innovation in fintech - those are values I deeply care about.”
                        </AccordionDetails>
                    </Accordion>

                    <Accordion
                        expanded={expanded === 'panel4'}
                        onChange={(event, isExpanded) => handleChange(isExpanded, 'panel4')}
                        sx={{
                            backgroundColor: '#161b22',
                            border: '1px solid #2a2a3c',
                            color: '#e5e7eb',
                            boxShadow: 'none',
                            '&.Mui-expanded': {
                                margin: 'auto',
                            }
                        }}>
                        <AccordionSummary
                            id="panel4-header"
                            aria-controls="panel3-content"
                            expandIcon={<ExpandMoreIcon sx={{ color: '#e5e7eb' }} />}
                            sx={{
                                backgroundColor: '#0d1117',
                                '& .MuiTypography-root': {
                                    fontWeight: 'bold',
                                },
                            }}>
                            <Typography sx={{ fontWeight : 'bold'}}>
                                What do you know about our product or mission?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            backgroundColor: '#1f2937',
                            borderTop: '1px solid #2a2a3c',
                        }}>
                            <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                Why it’s important:
                            </Typography>
                            Shows how much research you've done and whether you care enough to understand the company’s work. <br/>
                            Passionate candidates stand out!
                            <Typography sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                                What’s a good response?
                            </Typography>
                            Mention specific products, services, or recent news about the company. <br/>
                            Highlight how you relate to or admire their work, ideally with a personal or professional connection to it.
                        </AccordionDetails>
                    </Accordion>
                </Card>
            </Box>
        </>
    );
}

export default Qna;