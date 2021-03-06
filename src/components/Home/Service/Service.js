import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import gown from '../../Image/gown.jpg';
import accessories from '../../Image/accessories.jpg'
import stationary from '../../Image/stationary.jpg';





const Service = () => {

    const [services, setServices]= useState([])
    useEffect(() =>{
        fetch('https://stark-scrubland-74947.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=> {
            setServices(data);
        })
    },[])

    

    return (
        <section className="service-container">
            <div className="text-center mt-5">
                <h5>Service</h5>
                <h1>Our Service</h1>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            services.map(service => <ServiceDetails service={service}></ServiceDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;