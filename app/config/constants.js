import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDvkX1iLVpO7xE2tsPjiwqSiFi8MAlQeag',
  authDomain: 'artpost-db.firebaseapp.com',
  databaseURL: 'https://artpost-db.firebaseio.com',
  storageBucket: 'artpost-db.appspot.com'
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth

// const firebaseUrl = 'https://artpost-db.firebaseio.com/'
// export const ref = new Firebase(firebaseUrl)

export const userPostsExperationLength = 100000
export const userExpirationLength = 100000
export const repliesExpirationLength = 100000

// https://artpost-db.firebaseio.com/

// var provider = new firebase.auth.FacebookAuthProvider();

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyBvosFUW9UXGU4FdFvkx4-Dsz7vzynyjB8",
//   authDomain: "artpost-redux.firebaseapp.com",
//   databaseURL: "https://artpost-redux.firebaseio.com",
//   storageBucket: "artpost-redux.appspot.com",
// };
// firebase.initializeApp(config);

// export const ref = firebase.database().ref();
// export const ref = new Firebase(firebaseUrl)
// const firebaseUrl = 'artpost-redux.firebaseio.com/

// const provider = new firebase.auth.FacebookAuthProvider();
//

// artPost.Auth = class {
//   get waitForAuth() {
//     return this._waitForAuthPromiseResolver.promise()
//   }

//   constructor() {
//     //Firesebase SDK
//     this.database = firebase.app().database();
//     this.auth = firebase.app().auth()
//     this._waitForAuthPromiseResolver = new $.Deferred();
//   }

//   ()
// }