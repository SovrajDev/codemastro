const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');

registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');

});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');

});
document.getElementById('search-form').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const searchTerm = document.getElementById('search-input').value;
  const searchpass = document.getElementById('search-pass').value;
  
  
  try {
    const response = await fetch('/login1', {
      method: 'POST', // Assuming you are searching via POST method
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ searchTerm ,searchpass})
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.text();

    if (result) {
      window.location.href=result;
    } else {
      document.getElementById('search-input').value = "invalid ";
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
});
// Get the cross icon element
// Get the sign-up form
//const signUpForm = document.getElementById('signup-form');

// Add an event listener to the form
//signUpForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  //event.preventDefault();

  // Get the user's sign-up credentials from the form fields
  //const username = document.getElementById('username').value;
  //const password = document.getElementById('password').value;
  //const  email = document.getElementById('email').value;
  //const fullname=document.getElementById("fullname").value;

  // Send a POST request to the /signup endpoint with the user's credentials
  //fetch('/login', {
   // method: 'POST',
    //headers: {
      //'Content-Type': 'application/json'
    //},
    //body: JSON.stringify({ username, password , email,fullname})
  //})
 //.then(response => {
    // If the request is successful, redirect the user to the index page
   // if (response.ok) {
     // window.location.href = 'index.html';
    //} else {
      // If the request is not successful, display an error message
      //alert('An error occurred while signing up');
    //}
  //});
//});
//const btn=document.getElementsByClassName('btn');
//btn.addEventListener('click',()=>{
  //window.location.href="index.html";
//});