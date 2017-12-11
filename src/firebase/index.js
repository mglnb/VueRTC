import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyB8IA-RSENAa9JyjdQCswvxS0Z8Q11Y6nA",
  authDomain: "vuertc.firebaseapp.com",
  databaseURL: "https://vuertc.firebaseio.com",
  projectId: "vuertc",
  storageBucket: "vuertc.appspot.com",
  messagingSenderId: "496043402260"
};
  let firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database()
  const auth = firebaseApp.auth()
  
export default {db, auth}