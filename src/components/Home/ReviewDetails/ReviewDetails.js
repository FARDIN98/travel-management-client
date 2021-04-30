import React from 'react';

const ReviewDetails = ({ review }) => {
    return (
        <div className='col-md-4 text-center'>
            <div className="mt-5">
                <img style={{height: '300'}} src={review.imageURL} alt="" />
                <h4 className="mt-4 mb-4">{review.name}</h4>
                <small className="text-secondary">{review.description}</small>
            </div>
        </div>
    );
};

export default ReviewDetails;