import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({serviceInfo}) => {
    console.log(serviceInfo)
    const stripe = useStripe();
    const elements = useElements();

    const handleOrder = (paymentId)=>{
        const order = {...serviceInfo,paymentId}
        fetch('https://stark-scrubland-74947.herokuapp.com/bookOrder',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body:JSON.stringify(order)
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            handleOrder(paymentMethod.id);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            {/* <a type="submit" disabled={!stripe} href="/">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Payment
            </a> */}
            <button className="buttonStyle" type="submit" disabled={!stripe}>
        Pay
      </button>
        </form>
    );
};

export default SimpleCardForm;