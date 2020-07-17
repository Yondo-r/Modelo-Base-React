const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
        apiKey: "AIzaSyBtPJEdPZaXc2pyl6m0-_AMZrN_LnOivfs",
        authDomain: "ricardo-portifolio.firebaseapp.com",
        databaseURL: "https://ricardo-portifolio.firebaseio.com",
        projectId: "ricardo-portifolio",
        storageBucket: "ricardo-portifolio.appspot.com",
        messagingSenderId: "576667033889",
        appId: "1:576667033889:web:f04f80ee1859bdfb84de60",
        measurementId: "G-X51E64D5JL"
      };
      // Initialize Firebase


      const app = firebase.initializeApp(FirebaseConfig)
      const config = Rebase.createClass(app.database())

      export const storage = app.storage() 
      export const auth = app.auth()

export default config;