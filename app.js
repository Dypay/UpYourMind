(function(){
    
    const config = {
            apiKey: "AIzaSyAsdAo6u2XGmRl_xYxKPdpFKkvMzzasweo",
            authDomain: "upyourmind-eb7b8.firebaseapp.com",
            databaseURL: "https://upyourmind-eb7b8.firebaseio.com",
            storageBucket: "",
            
          };
          firebase.initializeApp(config);
          
          //Get Elements
          const txtEmail = document.getElementById('txtEmail');
          
          const txtPassword = document.getElementById('txtPassword');
          
          const btnLogin = document.getElementById('btnLogin');
          
          //Add login event
          btnLogin.addEventListener('click',e =>{
              //Get email and pass
              const email = txtEmail.value;
              const pass = textPassword.value;
              const aunt = firebase.auth();
              
              //Sign in
              const promise = auth.signInWithEmailAndPassword(email,pass);
              promise.cath(e => console.log(e.message));
          });
}());