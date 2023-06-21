import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDOesIkiKdMB3YHvQctzG2gvrKgAGWbwc8',
  authDomain: 'sistem-manage.firebaseapp.com',
  projectId: 'sistem-manage',
  storageBucket: 'sistem-manage.appspot.com',
  messagingSenderId: '96939669222',
  appId: '1:96939669222:web:b12d26c3c6e72549d46d27'
}

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
export { db }
