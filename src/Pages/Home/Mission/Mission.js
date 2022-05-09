import React from 'react';
import './Mission.css'
import imageofSection from '../../../images/section-2.png'

const Mission = () => {
    return (
        <div className='bg-dark bg-gradient bg-opacity-50'>
            <section className="about-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img className='img-fluid' src={imageofSection} alt="" />
                                <div className="about_img_text">
                                    <div className="about-texr-inner">
                                        <h2>15</h2>
                                        <h6>Years of Experience</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">
                                <div className="finix-text">
                                    <h6>My Mission</h6>
                                    <h2>BE A BETTER​ YOU</h2>
                                    <p>I love helping people stick with something that they not only get great results from but that they enjoy too. Nowadays, people know that their physical and mental health is worth investing in, recognising the benefits of outsourcing all the management of their health and fitness to a professional. I am 100% committed to helping you build better relationships with food and your own body, while building strength and confidence that will take not just your fitness, but your whole life to the next level.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;