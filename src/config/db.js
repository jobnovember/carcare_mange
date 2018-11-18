// db.js
import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCWa2Y4Kc6NGgzZ3lUDtWClZrTEnLT3uUQ",
    authDomain: "carcare-766fa.firebaseapp.com",
    databaseURL: "https://carcare-766fa.firebaseio.com",
    projectId: "carcare-766fa",
    storageBucket: "carcare-766fa.appspot.com",
    messagingSenderId: "204411264859"
};
let app = Firebase.initializeApp(config);
export const db = app.database();
