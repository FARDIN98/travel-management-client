import React from 'react';
import feature from '../../Image/feature.jpg'
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <section className="container">
            <div className="row d-flex mt-5">
                <div className="col-md-6">
                    <h1 style={{color: 'black'}}>Memories you never forget</h1>
                    <p>Set your travel destination with us & enjoy the beauty of nature.We are always here for you to make your trip memorable.</p>
                    <div class="svg">
                        <a class="button" href="/">
                            <svg>
                                <rect height="40" width="130" fill="transparent" />
                            </svg>
                            <span>Book Event</span>
                        </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <img style={{ width: '100%' }} src={feature} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;