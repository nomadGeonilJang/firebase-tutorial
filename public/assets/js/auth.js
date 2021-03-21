'use strict';
(()=>{
    
const loginForm = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

const FIREBASE_CONFIG = {
    apiKey: "AIzaSyBsnOe6UBkYnY1TwaLvmdhvqCIoQxwqF2g",
    authDomain: "fir-test-e8620.firebaseapp.com",
    projectId: "fir-test-e8620",
    storageBucket: "fir-test-e8620.appspot.com",
    messagingSenderId: "458970807104",
    appId: "1:458970807104:web:6abf49af6494d634abd8a5",
    measurementId: "G-EXF2FWE9K8"
};
  
firebase.initializeApp(FIREBASE_CONFIG);


window.addEventListener("load",()=>{

    firebase.auth().onAuthStateChanged((user)=>{ //로그인이 성공하면 이쪽으로 접근이 됩니다.
        if(user){console.log(user)}
        else console.log(user)
    })

})


loginForm.addEventListener("submit",login)
function login(event){
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value

    firebase.auth().signInWithEmailAndPassword(email, password).catch((error)=>{
        alert(error)
    })
    
}

})();