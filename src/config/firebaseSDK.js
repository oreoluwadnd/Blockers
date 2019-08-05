import firebase from 'firebase';

class FirebaseSDK {
	constructor() {
		if (!firebase.apps.length) {
			firebase.initializeApp({
				apiKey: "AIzaSyByFrTu8tiHr_Fqzq0wfnVqB18CeHuxpIw",
                authDomain: "blockers-aore.firebaseapp.com",
                databaseURL: "https://blockers-aore.firebaseio.com",
                projectId: "blockers-aore",
                storageBucket: "",
                messagingSenderId: "170692750285",
                appId: "1:170692750285:web:cadf3d4d43fd7e3e"
			});
		}
	}
	login = async (user, success_callback, failed_callback) => {
		await firebase
			.auth()
			.signInWithEmailAndPassword(user.email, user.password)
			.then(success_callback, failed_callback);
	};
}
const firebaseSDK = new FirebaseSDK();
export default firebaseSDK;