import React from 'react';
import './HowItWorks.css'; // Add CSS styling for the How It Works Section

function HowItWorks() {
    return (
        <section className="how-it-works">
            <h2>How It Works</h2>
            <div className="steps">
                <div className="step">
                    <h3>Discover a Cause</h3>
                    <p>Explore various charitable causes and organizations.</p>
                </div>
                <div className="step">
                    <h3>Make a Donation</h3>
                    <p>Contribute to a cause by making one-time or recurring donations.</p>
                </div>
                <div className="step">
                    <h3>Track the Impact</h3>
                    <p>See how your donations are making a positive impact on the world.</p>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
