import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div >
                <h1>About Us</h1>
                <hr/>
                <div className="aboutCopy center-align">
                    <p>Etnica believes in sustainable, timeless, natural wear.We believe in a link between
                    style and storytelling, that the best stories, like the best garments withstand the test
                    of time.</p>
                    <img alt="" className="responsive-img "src=" /imgs/about.jpg"/>
                    <h3>Our Product</h3>
                    <p>Our alpaca line is ethically sourced and produced in family-owned workshops in Peru.
                        We use the highest quality alpaca wool, referred to as baby alpaca wool. This natural
                        fibre has been named the finest in the world due to its longevity, soft texture,
                        hypoallergenic features, and thermal capacities.</p>
                    <p>Baby alpaca wool is the wool that results from the three first shearings of the alpaca’s coat.
                        Compared to other luxury materials, baby alpaca wool is rarer than cashmere, and warmer than
                        sheep’s wool.</p>
                    <img alt="" className="responsive-img " src=" /imgs/about2.jpg" />    
                    <h3>Our Mission</h3>
                    <p>We aspire to share some of the best fabrics and textiles crafted by some of Latin America's
                        most talented artisans, while encouraging a less is more approach in sustainable, quality
                        fashion. We want to educate the world on the meaning behind this craft, the craftsman behind
                        it, and share the stories that make up the beautiful and valuable folkloric culture in South America.</p>
                </div>
            </div>
        )
    }
}




export default About;