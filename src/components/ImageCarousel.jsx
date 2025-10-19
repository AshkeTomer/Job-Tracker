import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import dashboardImage from "../assets/Dashboard_commercial.png";
import resumeImage from "../assets/Resume_commercial.png";
import coverLetterImage from "../assets/Coverletter_commercial.png";

function ImageCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
    };

    return (
        <div className="carousel-container" style={{ width: '100%', overflow: 'hidden' }}>
            <Slider {...settings}>

                <div style={{ position: 'relative' }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        padding: '10px' 
                    }}>
                        <img 
                            src={dashboardImage} 
                            alt="Dashboard Feature" 
                            style={{
                                width: '90%',
                                height: 'auto',
                                margin: '0 auto',
                                borderRadius: '12px',
                            }}
                        />
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        maxWidth: '80%',
                        zIndex: 10,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Track your job applications effortlessly
                    </div>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        padding: '10px' 
                    }}>
                        <img 
                            src={resumeImage} 
                            alt="Resume Feature" 
                            style={{
                                width: '90%',
                                height: 'auto',
                                margin: '0 auto',
                                borderRadius: '12px',
                            }}
                        />
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        maxWidth: '80%',
                        zIndex: 10,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Optimize your resume with AI
                    </div>
                </div>


                <div style={{ position: 'relative' }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        padding: '10px' 
                    }}>
                        <img 
                            src={coverLetterImage} 
                            alt="Cover Letter Feature" 
                            style={{
                                width: '90%',
                                height: 'auto',
                                margin: '0 auto',
                                borderRadius: '12px',
                            }}
                        />
                    </div>
                    <div style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: '#fff',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        maxWidth: '80%',
                        zIndex: 10,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        Craft personalized cover letters
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default ImageCarousel;
