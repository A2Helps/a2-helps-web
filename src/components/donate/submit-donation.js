import { loadStripe } from '@stripe/stripe-js';
import Donation from '../../models/donation';

export const submitDonation = ({ amount, isPublic, public_name }) => {
  let donation = new Donation({ amount, public_name, public: isPublic });
  donation.save().then(() => {
    loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY).then(stripe => {
      stripe.redirectToCheckout({
        sessionId: donation.co_session
      }).then(function (result) {
        console.log(result.error);

        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
    });
  });
};
