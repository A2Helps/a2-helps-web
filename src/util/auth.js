// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';

// var firebaseConfig = {
// 	apiKey: "AIzaSyBNw7iZSceM2W_wnnev-QAeStw_sqhWMHA",
// 	authDomain: "a2cares.firebaseapp.com",
// 	databaseURL: "https://a2cares.firebaseio.com",
// 	projectId: "a2cares",
// 	storageBucket: "a2cares.appspot.com",
// 	messagingSenderId: "12643715755",
// 	appId: "1:12643715755:web:d50e6ce431f6d88ea745ee",
// 	measurementId: "G-60KLEYE83R"
// };

var firebaseConfig = {
	apiKey: "AIzaSyDSRVTsV7WGERtOgMtixEVdSjczs0ORMac",
	authDomain: "a2cares-local.firebaseapp.com",
	databaseURL: "https://a2cares-local.firebaseio.com",
	projectId: "a2cares-local",
	storageBucket: "a2cares-local.appspot.com",
	messagingSenderId: "581955185890",
	appId: "1:581955185890:web:8a595e40b1481ac02742bb",
	measurementId: "G-8N0PBQJZ2X"
};

firebase.initializeApp(firebaseConfig);
export const auth = (email, password) => {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			// var displayName = user.displayName;
			var userEmail = user.email;
			// var emailVerified = user.emailVerified;
			// var photoURL = user.photoURL;
			// var isAnonymous = user.isAnonymous;
			var uid = user.uid;
			// var providerData = user.providerData;

			console.log(userEmail, uid);

			user.getIdToken().then(token => {
				console.log(token);
			})

			// ...
		} else {
			console.log('signed out');
		}
	});


	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// ...

		console.log(errorCode, errorMessage);
	});
}

