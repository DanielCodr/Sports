const firebaseConfig = {
  apiKey: "AIzaSyCERW9DsSH71S6t8IIwIJ46INpYUIYtuR0",
  authDomain: "main-sports-website.firebaseapp.com",
  databaseURL: "https://main-sports-website-default-rtdb.firebaseio.com",
  projectId: "main-sports-website",
  storageBucket: "main-sports-website.appspot.com",
  messagingSenderId: "1094750937929",
  appId: "1:1094750937929:web:103665815a708b33e43098"
};


const app = initializeApp(firebaseConfig);

   
  var UserInputsRef=firebase.database().ref('UserInputs')
  document.getElementById('testForm').addEventListener('submit',submitForm);

  
  function submitForm(e){
     e.preventDefault();
    var fname =getInputVal('firstname');
    var lname =getInputVal('lastname');
    var profession =getInputVal('profession');
    var email =getInputVal('email');
    var mobile =getInputVal('mobile');
    var dateofbirth =getInputVal('dateofbirth');
    var province =getInputVal('province');
    var sportoptions =getSelectedCheckboxValues('sportoptions');

    readState(state);

    
    

    var selectedOption = document.querySelector('input[name = option]:checked').value;
    
    if(emailstatus)
    saveMessages(lname+ " " +fname,mobile,email,profession,dateofbirth,province,sportoptions);
}


function readState(state){     
  var centers;     
  var ref = firebase.database().ref(state);     
  ref.on('value', (data) => {      
    centers = data.val();      
    document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();    
   }) }



function getInputVal(id){
    return document.getElementById(id).value;
}



function saveMessages(name,mobile,email,profession,dateofbirth,province,sportoptions)
{     
  var newuserInputsRef = UserInputsRef.push();     
  newuserInputsRef.set({         
    name:name,         
    mobile:mobile,         
    email:email,         
    profession:profession,         
    dateofbirth:dateofbirth,               
    province:province,          
    sportoptions:sportoptions    
  })    
   alert("Thank you, find the list of centers nearby!  "); }




function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}


function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}