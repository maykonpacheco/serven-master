
import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBOL9UhLuV8g5-yF5TrX-Dfiw_OEWmg9k4",
  authDomain: "febsaude-4aa5b.firebaseapp.com",
  databaseURL: "https://febsaude-4aa5b.firebaseio.com",
  projectId: "febsaude-4aa5b",
  storageBucket: "febsaude-4aa5b.appspot.com",
  messagingSenderId: "224035018178"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
