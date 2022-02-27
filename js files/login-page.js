
//----------------------------Validation Code for Inputs ---------------------------

// var email=document.forms['form']['email'];
// var password=document.forms['form']['password'];
// var email_error=document.getElementById('email_error');
// var pass_error=document.getElementById('pass_error');

// email.addEventListener('textInput',emil_Verify);
// email.addEventListener('textInput',pass_Verify);

// function validated(){
//     if(email.value.lenght<9){
//         email.style.border="1px solid red";
//         email_error.style.display="block";
//         email.focus();
//         return false;
//     }


//      if(password.value.lenght<9){
//         password.style.border="1px solid red";
//         password_error.style.display="block";
//         password.focus();
//         return false;
//     }
// }

// function emil_Verify(){
//         if(email.value.lenght>=8){
//         email.style.border="1px solid silver";
//         email_error.style.display="none";
//         alert("Would you save  your email...");
//         return true;
//     }
// }

// function pass_Verify(){
//        if(password.value.lenght>=8){
//         password.style.border="1px solid silver";
//         password_error.style.display="none";
//         alert("Would you  save your password");
//          return true;
// }
// }



//------------------------------------------------------------------------------------------------------------
// document.getElementById("submit").addEventListener("click",checkSubmit1);

window.onload = function() {
    console.log(localStorage.getItem('loginUser'));
    if(localStorage.getItem('loginUser') !== "null") {
        console.log('here');
    // user was logged in
    window.location.href= "home.html";
    }
}

var form , Email , Password;
var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error'); 
let div = document.createElement("div");
    div.setAttribute("id","pass_error");
let div2 = document.createElement("div");
    div.setAttribute("id","email_error");

    getElements();
form.addEventListener("submit",(e)=>{
    e.preventDefault();
     checkEmail();
     checkPassword();
    checkSubmit1();
});

window.addEventListener("load",function(){

Email.addEventListener("blur",checkEmail);

Password.addEventListener("blur",checkPassword);

});

 
function getElements() {
    form=document.getElementById("form");
    Email=document.getElementById("email");
    Password=document.getElementById("password");
}

function checkPassword(){
    if (Password.value.toString().length >= 5 && Password.value.toString().length <= 10) {
        Password.setCustomValidity("");
        div.innerHTML="";
   }
   else{
    div.innerHTML="Please Enter your password range 5-10";
    Password.setCustomValidity("Please Enter your password range 5-10");
    
    ps.append(div);
        console.log(pass_error);
       return false;
   }

}

    function checkEmail(){
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      
       console.log(emailPattern.test(Email.value));
    if(emailPattern.test(Email.value)){
        div2.innerHTML="";
        Email.setCustomValidity("");
        return true;
    }
    else{
        div2.innerHTML="Enter correct Email format";
        Email.setCustomValidity("Enter correct Email format");
        em.append(div2);
        console.log(email_error);
        return false;
    } 

    
}

function checkSubmit1() {
    getElements();
    if (form.checkValidity() == true) { 
        var keys = Object.keys(localStorage);
        let users = [];
        keys.forEach(element => {
            if(element !== "loginUser") {
                let user = JSON.parse(localStorage.getItem(element));
                console.log(user);
                users.push(user);
            }

        });

        //  lamda
        if(users.some(user=> user.email == Email.value && user.password == Password.value)) {
            // found on storage
            localStorage.setItem('loginUser', Email.value);
            open("home.html","","width:auto,height:auto");
        }
        else {
            document.getElementById("submit_error").innerText = "your username or password not found";
            // show error you are not registered
        }
    }

}




























// ********************************************************************************************

// document.getElementById("submit").addEventListener("click",checkSubmit1);

// const form=document.querySelector("form");
// eField= form.querySelector(".email");
// eInput=eField.querySelector(".input");
// pField= form.querySelector(".password");
// pInput=pField.querySelector(".input");


// function checkSubmit1(){
//     // alert("Would be create an account ?");
//     // open("Register_Page.html","","width:auto,height:auto");
//     if(checkEmail()&& checkPassword()){
//          alert("Would be create an account ?");
//          open("Register_Page.html","","width:auto,height:auto");
//         // alert("Are you sure from data to make account ?");
//         return true;  
//     }
//     else{
//         alert("That all required ... should be fill data");
//         return false;
//     }

    
// }


// form.onsubmit=(e)=>{
//     e.preventDefault(); // preventing form from submiiting
//      if(eInput.value==""){ // if email is empty
//         eField.classList.add("error");
//         alert("May Be Fill Email Feild");
//     } else{
//         checkEmail();
//     }

//     if(pInput.value==""){ // if password is empty
//         pField.classList.add("error");
//         alert("May Be Fill Password Feild");
//     }

//     setTimeout(()=>{
//         eField.classList.remove("error");
//         pField.classList.add("error");

//     },500);

//     // let's work on input keyup
//         eInput.onkeyup=()=>{
//             checkEmail();
//         // let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // pattern to validate email
//         // if(!eInput.value.match(pattern)){ // if pattern not matching with email
//         //     eField.classList.add("error");
//         //     alert(" Email Is Not Be Valid");
//         //     let errorTxt=eField.querySelector(".error-txt");
//         //     // if email is not empty the show enter a vaild address until the email vaild else show Email can not br blank
//         //     (eInput.value!= "")?errorTxt.innerText="Enter a vaild email address":errorTxt.innerText="Email can not be blank"
//         // }
//         // else{
//         // eField.classList.remove("error");
//         // alert(" Email Is Valid");
//         // }
//         }

//         function checkEmail(){
//             let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // pattern to validate email
//             if(!eInput.value.match(pattern)){ // if pattern not matching with email
//                 eField.classList.add("error");
//                 alert(" Email Is Not Be Valid");
//                 let errorTxt=eField.querySelector(".error-txt");
//                 // if email is not empty the show enter a vaild address until the email vaild else show Email can not br blank
//                 (eInput.value!= "")?errorTxt.innerText="Enter a vaild email address":errorTxt.innerText="Email can not be blank"
//             }
//             else{
//             eField.classList.remove("error");
//             alert(" Email Is Valid");
//             }
//         }


//         pInput.onkeyup=()=>{
//             if(pInput.value==""){ // if password is empty 
//                 alert(" Password Is Not Be Valid");
//             }
//             else{
//             pField.classList.remove("error");
//             alert(" Password Is Valid");
    
//             }
//             }
//     if(!eField.classList.contains("error")&&!pField.classList.contains("error")){
//         window.location.href="Register_Page.html";
//         open("Register_Page.html","","width:auto,height:auto");
//         console.log("Form Submitted ....");
//     }



// }

// ********************************************************************************************

// const form=document.getElementById("form");
// const email=document.getElementById("email");
// const password=document.getElementById("password");
// form.addEventListener("submit",e=>{
//     e.preventDefault();
//     validateInputs();
// });
// const setError=(element,message)=>{
//     const inputControl=element.parentElement;
//     const errorDisplay=inputControl.querySelector('.error');
//     errorDisplay.innerText=message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success');
// }
// const setSuccess=element=>{
//     const inputControl=element.parentElement;
//     const errorDisplay=inputControl.querySelector('.error');
//     errorDisplay.innerText='';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }

// const isValidEmail=email=>{
//     // const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+\.)+[a-zA-Z]{2,}))$/;
//     const re= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return re.test(String(email).toLowerCase());
// }


// const validateInputs=()=>{
// const emailValue=email.value.trim();
// const passwordValue=password.value.trim();

// if(emailValue===''){
// setError(email,'Email is required');
// }else if(! isValidEmail(emailValue)){
// setError(email,'Provide a vaild email address');
// }else{
//     setSuccess(email);
// }


// if(passwordValue===''){
//     setError(password,'Password is required')
// }else if(passwordValue.length<8){
//     setError(password,'Password must be at the least 8 character')
// }else{
//     setSuccess();
// }

// };
