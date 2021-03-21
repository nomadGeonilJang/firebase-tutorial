'use strict';
(()=>{

    class User{

        #FIREBASE_CONFIG = {
            apiKey: "AIzaSyBsnOe6UBkYnY1TwaLvmdhvqCIoQxwqF2g",
            authDomain: "fir-test-e8620.firebaseapp.com",
            projectId: "fir-test-e8620",
            storageBucket: "fir-test-e8620.appspot.com",
            messagingSenderId: "458970807104",
            appId: "1:458970807104:web:6abf49af6494d634abd8a5",
            measurementId: "G-EXF2FWE9K8"
        };

         #loginForm = document.querySelector("#login-form");
         #signUpBtn = document.querySelector("#sign-up");
         #facebookBtn = document.querySelector("#facebook");
         #googleBtn = document.querySelector("#google")
         emailInput = document.querySelector("#email");
         passwordInput = document.querySelector("#password");


        constructor(){
            firebase.initializeApp(this.#FIREBASE_CONFIG);

            const currentPath = window.location.href;
            if(currentPath.includes("auth/login")){
                this.#loginForm.addEventListener("submit",this.login.bind(this));
                this.#signUpBtn.addEventListener("click",this.signUp.bind(this));
                this.#facebookBtn.addEventListener("click",this.logInWithFacebook.bind(this));
            }
            
        }

        login (event)  {
            event.preventDefault();
            const email = this.emailInput.value;
            const password = this.passwordInput.value
        
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((error)=>{
                alert(error)
            })
        }




        logOut (user) {
            const userControlParent = document.querySelector("#login-control");
            const logOutControlATag = document.createElement("a");
            logOutControlATag.setAttribute("id","user-btn");
            userControlParent.append(logOutControlATag)
            if(user){
                logOutControlATag.innerHTML=`<u style="font-weight:bold;">${user.email}</u> Log Out`
                
                logOutControlATag.addEventListener("click",(e)=>{
                    firebase
                    .auth()
                    .signOut()
                    .then(()=>{},(error)=>{
                        console.log("error",error)
                    })
                })
            }
        }

        signUp  ()  {
            const email = this.emailInput.value;
            const password = this.passwordInput.value
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(error=>{
                console.log(error)
            })
        }

        logInWithFacebook(){
            const user = firebase.auth().currentUser;
            if(!user){
                const provider = new firebase.auth.FacebookAuthProvider();
                firebase.auth().signInWithPopup(provider).then((res)=>{
                    console.log("logged in with fabsebook")
                })
            }
        }

        logInWithGoogle(){

        }
    }

window.addEventListener("load",()=>{

    const userStore =new User();
    firebase.auth().onAuthStateChanged((user)=>{ //로그인이 성공하면 이쪽으로 접근이 됩니다.
        const currentPath = window.location.href;
        const isLogInPage = currentPath.includes("auth/login")
        
        if(user){
            if(isLogInPage){
                window.open("../../","_self",false);
            }
            userStore.logOut(user)
        }else{
            if(!isLogInPage){
                window.open("../auth/login","_self",false);
            }
        }
    })
})

})();