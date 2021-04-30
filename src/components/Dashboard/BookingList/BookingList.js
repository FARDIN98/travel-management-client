import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // const [orderedProducts, setOrderedProducts] = useState([])
    // const { email } = loggedInUser
    
    useEffect(() =>{
        fetch('https://stark-scrubland-74947.herokuapp.com/bookingList')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    // const filteredOrder = (data) => {
    //     const filterData = data.filter((order) => order.email == loggedInUser.email)
    //     setOrderedProducts(filterData)
    // }

    return (
        <div className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <Sidebar />
            </div>
            <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-center mt-5 pt-5 pb-5">
                <h1>This is Booking List</h1>
                {/* <h1>{data.name}</h1> */}
            </div>
        </div>
    );
};

export default BookingList;