import React from 'react';
import imageofSection from '../../../images/section-3.png'

const Mission = () => {
    return (
        <div className='bg-dark bg-gradient bg-opacity-50'>
            <section className="about-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-text">
                                <div className="finix-text">
                                    <h6>Your Confidence</h6>
                                    <h2>Professional Strength Coaching Equipments</h2>
                                    <p>How much have you spent trying to improve your health and fitness over the years only for the supplements to go in the bin, the home workout equipment to go in the cupboard or the gym memberships running unused? Have you ever calculated how much money has gone to waste to date? At Strength Coach Glasgow, we work on actually getting your return on investment, you are paying for the result and we’ll make sure we deliver.<br></br>

                                        My training programmes are designed not only to help you learn correct exercise form, but also to help you improve your strength, lose weight if needed and create a quality of life you can enjoy. This way your confidence will soar, your body will feel and look amazing and there won't be anything you can't achieve with dedication and commitment.. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img className='img-fluid' src={imageofSection} alt="" />

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;