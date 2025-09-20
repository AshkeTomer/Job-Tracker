import React from "react";
import { Button, Typography } from "@mui/material";
import picture from "../assets/404-kangoroo-colored.svg";
import { useNavigate } from "react-router-dom";

function noMatch() {
    const navigate = useNavigate();
    
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            padding: "20px", 
            textAlign: "center", 
            marginTop: "50px" }}>
            <Typography variant="h4" sx={{ color: '#e5e7eb', fontWeight: 'bold' }}>
                Oops!
            </Typography>
            <Typography variant="h5" sx={{ color: '#e5e7eb', fontWeight: 'bold' }}>
                The page you are looking for does not exist.
            </Typography>
            <Button
            color="contained"
            onClick={()=> navigate('/')} 
            sx={{ 
                backgroundColor: '#3b82f6', 
                color: '#e5e7eb',
                fontWeight: 'bold',
                marginTop: '20px' }}>
                    Back to main page!
            </Button>
            <div style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "30px"}}>
                <img
                    src={picture}
                    alt="404 illustration"
                    style={{
                        maxWidth: "50%",
                        height: "auto",
                        transform: "scale(1)",
                        display: "block",
                        margin: "0 auto"
                    }}
                />
            </div>
        </div>
    );
}

export default noMatch;
