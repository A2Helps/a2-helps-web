import { loadStripe } from '@stripe/stripe-js';
import Donation from '../../models/donation';

export const submitDonation = (amount) => {
  let donation = new Donation({ amount });
  donation.save().then(() => {
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY).then(stripe => {
      stripe.redirectToCheckout({
        sessionId: donation.co_session
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
    });
  });
};
