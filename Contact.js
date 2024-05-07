import React from 'react';

function Contact() {
    return (
        <div className="contact-form">
            <div className="container">
                <h1 className="lg-heading text-black">Contact Us</h1>
                <p className="text-gray">Let us know your questions, suggestions, and concerns by filling out the contact form below.</p>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" required />
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
        </div>
    );
}

export default Contact;
