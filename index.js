const form = document.getElementById("form");
const username = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim(); 
  const emailValue = email.value.trim().toLocaleLowerCase();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  let regular_expressions_name = /^[a-zA-Z]+$/;
  let regular_expressions_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (usernameValue === "") {
    setErrorInput(username, "Introduce tu nombre");
    
  } else if (usernameValue.match(regular_expressions_name)) {
    setSuccessInput(username);
  } else {
    setErrorInput(username, "Nombre no válido");  
  } 

  //###################################
  if (emailValue === "") {
    setErrorInput(email, "Introduce un email");
    } else if (emailValue.match(regular_expressions_email)) {
    setSuccessInput(email);
    } else {
    setErrorInput(email, "Email no válido");  
  } 

  //###################################
  if (passwordValue === "") {
    setErrorInput(password, "Introduce una clave");
  } else if ( passwordValue.length>=8) {
    setSuccessInput(password);
  } else {
    setErrorInput(password, "Clave debe tener al menos 8 caracteres");
  }


  //###################################
  if (password2Value === "") {
    setErrorInput(password2, "Introduce una clave");
  } else if (password2Value !== passwordValue) {
    setErrorInput(password2, "Las claves deben coincidir");
  } else {
    setSuccessInput(password2);
  }
}

function setErrorInput(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = errorMessage;
  formControl.className = "form__control error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const clave = document.getElementById("clave");
const clave2 = document.getElementById("clave2");

function checkSubmit() {
    if ( nombre.className === "form__control success" && correo.className === "form__control success" && clave.className === "form__control success" && clave2.className === "form__control success") {
        alert("Formulario enviado con éxito");
        console.log("submit")
    }
}

