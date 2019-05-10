import firebase from "firebase";
class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyBKGaUaV3q_KcSIOoV8hJ4V7YILQHMigaY",
        authDomain: "cf-chatapp.firebaseapp.com",
        databaseURL: "https://cf-chatapp.firebaseio.com",
        projectId: "cf-chatapp",
        storageBucket: "cf-chatapp.appspot.com",
        messagingSenderId: "47995028531"
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
const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;
