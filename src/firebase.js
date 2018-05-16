import * as firebase from 'firebase'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCtL8D5vn5k0q43MnDbuynbDb1dWXZ5nFU",
  authDomain: "auth-sample-5db27.firebaseapp.com",
  databaseURL: "https://auth-sample-5db27.firebaseio.com",
  projectId: "auth-sample-5db27",
  storageBucket: "auth-sample-5db27.appspot.com",
  messagingSenderId: "315231003307"
}

firebase.initializeApp(config)

export default firebase
