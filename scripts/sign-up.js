import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#signup-form");

//

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.children[1].value;
    const password = event.target.children[2].value;

    // firebase se signup karne ka function

    const result = await createUserWithEmailAndPassword(auth, email, password);

    Swal.fire({
      title: "Congragulation",
      text: "You have Successfully signIn",
      icon: "success",
      confirmButtonText: "Ok",
    });
    setTimeout(() => {
      window.location = "../index.html";
    }, 2300);

    console.log("You have Successfully signIn", result.operationType);
  } catch (error) {
    Swal.fire({
      title: "Failed!",
      text: "Email is Already in Use",
      icon: "error",
      confirmButtonText: "Try Again",
      //   error.message
    });

    console.log("Email is Already in Use", error.message);
  }
});
