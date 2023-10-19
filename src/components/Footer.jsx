import React from 'react';
import './Footer.css'; // Add CSS styling for the Footer

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/causes">Causes</a></li>
                        <li><a href="/organizations">Organizations</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/donate">Donate</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 123-456-7890</p>
                </div>

                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://twitter.com/">Twitter</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-legal">
                <p>&copy; 2023 Your Charity Donation Platform. All rights reserved.</p>
                <ul>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

