import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PaymentProcess from "../PaymentProcess/PaymentProcess";
import Sidebar from "../Sidebar/Sidebar";
import './Booking.css';

const Booking = () => {
    const {id} = useParams()
    console.log(id)
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://stark-scrubland-74947.herokuapp.com/serviceBook/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
        })  
  },[])
  console.log(data)

  const [serviceInfo, setServiceInfo] = useState({})
  const handleBlur = (e) => {
    const newService = { ...serviceInfo };
    newService[e.target.name] = e.target.value;
    setServiceInfo(newService);
};
    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <div class="login-box">
                    <form>
                        <h1 className="text-secondary mb-5">Booking Item</h1>
                        <div class="user-box">
                            <input onBlur={handleBlur} type="text" name="name" required="" />
                            <label>Username</label>
                        </div>
                        <div class="user-box">
                            <input onBlur={handleBlur} type="text" name="email" required="" />
                            <label>Email</label>
                        </div>
                        <div class="user-box">
                            <input onBlur={handleBlur} type="text" name="service" required="" value={data.name}/>
                            <label>Service</label>
                        </div>
                    </form>
                        <PaymentProcess serviceInfo={serviceInfo}/>
                </div>
            </div>
        </div>
    );
};

export default Booking;
