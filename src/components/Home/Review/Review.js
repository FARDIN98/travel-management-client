import React, { useEffect, useState } from 'react';
import review1 from '../../Image/review1.png';
import review2 from '../../Image/review2.jpg'
import review3 from '../../Image/review3.jpg'
import review4 from '../../Image/review4jpg.jpg'
import review5 from '../../Image/review5.png'
import review6 from '../../Image/review6.jpg'
import ReviewDetails from '../ReviewDetails/ReviewDetails';




const Review = () => {
    const [reviewData, setReviewData] = useState([])
    useEffect(() => {
        fetch('https://stark-scrubland-74947.herokuapp.com/reviewList')
        .then (res => res.json())
        .then(data=> setReviewData(data))
    },[])
    return (
        <section className="container">
            <div className="text-center mt-5">
                <h5>REVIEW</h5>
                <h1 className="text-success">Our Most Valuable Review</h1>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            reviewData.map(review => <ReviewDetails review={review}></ReviewDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;