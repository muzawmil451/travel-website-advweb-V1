import React from 'react';

function About() {
    return (
        <div className="about">
            <section className="container">
                <h2 className='lg-heading text-black about-heading'>About Us</h2>
                <p className="text-gray">Hi, I'm Muhammad Muzammil! Welcome to our travel platform where you can effortlessly book your dream destination. Our mission is to simplify travel planning and provide you with the best experiences possible.</p>
                
                <div className="about-wrapper">
                    <div className="left">
                        <h3 className="sub-heading">Our Vision</h3>
                        <p>We envision a world where traveling is straightforward and accessible to everyone, helping to create unforgettable memories without the hassle of complex travel planning.</p>
                    </div>
                    <div className="right">
                        <h3 className="sub-heading">Why Choose Us?</h3>
                        <ul>
                            <li>Personalized travel recommendations.</li>
                            <li>Seamless booking experiences.</li>
                            <li>24/7 customer support for your peace of mind.</li>
                        </ul>
                    </div>
                </div>

                <div className="counts">
                    <div className="count-item count-item1">
                        <span>2500+</span>
                        <p>Happy Travelers</p>
                    </div>
                    <div className="count-item count-item2">
                        <span>500+</span>
                        <p>Destinations</p>
                    </div>
                    <div className="count-item count-item3">
                        <span>400+</span>
                        <p>Guides</p>
                    </div>
                    <div className="count-item count-item4">
                        <span>20+</span>
                        <p>Sport Adventures</p>
                    </div>
                </div>

                <div className="cta-banner">
                    <p className="cta-line">Ready to explore? Reach out to us and let's make your travel dreams a reality!</p>
                    <a href="#contact" className='btn-cta'>Contact Us</a> {/* Ensure this links to your Contact page or section */}
                </div>
            </section>
        </div>
    );
}

export default About;
