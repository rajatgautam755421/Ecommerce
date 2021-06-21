import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './payment.css'

const PayMents = () => {
    const onToken = (token) => {
        console.log(token)
    }
    return (
        <div>
            <StripeCheckout
                classname="checkout"
                token={onToken}
                stripeKey="pk_test_51Ixrg9BBqgSGuWDagGtTX7tCAVBloO9Q8k8rKI74QytoVr4YmxvHbB9sY8NwqIgw3QBPMV10RkXGDEHXnpgNaqfr000j3EwXfy"
            />
        </div>
    )
}

export default PayMents
