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
        const currentPath = window.location.href;
        const isLogInPage = currentPath.includes("auth/login")
        
        if(user){
            if(isLogInPage){
                window.open("../../","_self",false);
            }
            logOut(user)
        }else{
            if(!isLogInPage){
                window.open("../auth/login","_self",false);
            }
        }
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

function logOut (user) {
    const userControlParent = document.querySelector("#login-control");
    const aTag = document.createElement("a");
    aTag.setAttribute("id","user-btn");
    userControlParent.append(aTag)
    if(user){
        aTag.textContent="LogOut"
        aTag.addEventListener("click",(e)=>{
            firebase
            .auth()
            .signOut()
            .then(()=>{},(error)=>{
                console.log("error",error)
            })
        })
    }
}

})();