import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyAlGRSymNg7KAdvh5aHuSQA0_3diMzTrAs",
    authDomain: "fir-demo-b9ce4.firebaseapp.com",
    databaseURL: 'fir-demo-b9ce4-default-rtdb.firebaseio.com/',
    projectId: "fir-demo-b9ce4",
    storageBucket: "fir-demo-b9ce4.appspot.com",
    messagingSenderId: "149024916576",

};
let app = Firebase.initializeApp(config);
export const db = app.database();