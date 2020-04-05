import { loadStripe } from '@stripe/stripe-js';
import Donation from '../../models/donation';

export const submitDonation = ({
  amount,
  isPublic,
  public_name,
  onError = () => {},
}) => {
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
      }).catch((e) => {
        console.log(e);
        onError();
      });
    });
  });
};

export const submitWire = ({
  amount,
  isPublic,
  public_name,
  wired_from,
  email,
  callback,
  onError = () => {},
}) => {
  let donation = new Donation({
    wired: true,
    amount,
    public_name,
    public: isPublic,
    wired_from,
    email,
  });
  donation.save()
    .then(() => {
      callback();
    })
    .catch((e) => {
      console.log(e);
      onError();
    });
};
