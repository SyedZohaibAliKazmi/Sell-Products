import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault(); 

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;

    // firebase se signup karne ka function

    const result = await signInWithEmailAndPassword(auth, email, password);

    Swal.fire({
      title: "Congragulation",
      text: "You have Successfully Login",
      icon: "success",
      confirmButtonText: "Ok",
    });

    // if user is login auto redirect in main page
    setTimeout(() => {
      // console.log(result.operationType   );
      window.location = "../index.html";
    }, 2300);
  } catch (error) {
    Swal.fire({
      title: "Failed!",
      text: "You Don't have an account",
      icon: "error",
      confirmButtonText: "Try Again",
      //   error.message
    });

    // if user in not signup auto redirect in signup page

    setTimeout(() => {
      window.location = "./signup.html";
      // console.log('hello');
    }, 2300);

    console.log("Email or Password Invalid", error.message);
  }
});
