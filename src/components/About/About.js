import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className = "about">
                <div>
                    <h1 className = "title">
                    Helping millions grow better.
                    </h1>
                </div>
                <div>
                    <img className = "image1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWmaIj1Wvug_QDBC4xksU-76Hf2DMF8zZGNA&usqp=CAU" alt="" />
                </div>
            </div>
            <div className = "about">
                <div>
                    <img className = "image2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2ki1vdVvySTV0AghunawG6oENXYttU1yRw&usqp=CAU" alt="" />
                </div>
                <div>
                    <h1 className = "title">
                        Our Aim
                    </h1>
                    <p>There's this notion that to grow a business, you have to be ruthless. But we know there's a better way to grow. One where what's good for the bottom line is also good for customers. We believe businesses can grow with a conscience, and succeed with a soul — and that they can do it with inbound. That's why we've created an ecosystem uniting software, education, and community to help businesses grow better every day.</p>
                </div>
            </div>
            <div className = "about">
                <div>
                    <h1 className = "title">
                        Our Story
                    </h1>
                    <p>As fellow graduate students at MIT in 2004, Brian and Dharmesh noticed a shift in the way people shop and buy. Consumers were no longer tolerating interruptive bids for their attention — in fact, they'd gotten really, really good at ignoring them.From this shift, a company was born: HubSpot. It was founded on "inbound", the notion that people don't want to be interrupted by marketers or harassed by salespeople — they want to be helped.Today, the inbound movement continues to empower businesses around the world to stop interrupting, start helping, and return their focus to the customer.
</p>
                </div>
                <div>
                    <img className = "image3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWtNPxKOAW8-haGerUq8kX-lS-e8LEFqj6nw&usqp=CAU" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;