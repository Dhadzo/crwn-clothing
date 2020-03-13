import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_kfXP1YLCFujMG1WZ7Xr2TAiF00D9mfToxu";
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
           label = "Pay Now"
           name = "Crwn Clothing Ltd."
           billingAddress
           shippingAddress
           image = ""
           description = {`Your total is is $${price}`}
           amount = {priceForStripe}
           panelLabel = "Pay Now"
           token = {onToken}
           stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;
