import React from 'react';
import { Button } from '@material-ui/core';
import Donation from '../models/Donation'; // unsure how to import via absolute path
import {loadStripe} from '@stripe/stripe-js';

const donationTest = () => {
	let donation = new Donation({ amount: 2500 });

	donation.save().then(() => {
		console.log(donation);

		loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY).then(stripe => {
			stripe.redirectToCheckout({
				sessionId: donation.co_session
			}).then(function (result) {
				// If `redirectToCheckout` fails due to a browser or network
				// error, display the localized error message to your customer
				// using `result.error.message`.
			});
		})
	})
}

export default function DonationTest() {
	return (
		<div>
			<Button onClick={donationTest} color="primary">
				Donation Test $25
			</Button>
		</div>
	);
}
