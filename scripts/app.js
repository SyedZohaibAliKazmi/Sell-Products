

// ================================\ Fires-auth/=======================


import { auth,onAuthStateChanged } from "./firebase.js";

// firebase function to check if user is logged-in or not
onAuthStateChanged(auth, (user) => {
        
  if (user) {
    // User is signed in


    console.log("login ha ya ", user);
    // window.location = "./index.html";

  } else {
    // User is logout

    setTimeout(() => {
      window.location = "./pages/signUp.html";
    }, );
  }
});





// ================================\ Fires-tore/=======================
import {
    db,
    collection,
    addDoc,
    serverTimestamp,
    getDocs,
    onSnapshot,
  } from "./fire-store.js"

// ====================================\ Fire-storage /===================

import {  uploadBytes, ref,storage,getDownloadURL } from "./fire-storage.js";









// =======================================\ Fire-store Works/=======================================  
  const form = document.querySelector(".product-form");
  const productName = document.querySelector(".product-name");
  const productPrice = document.querySelector(".product-price");
  const productDetail = document.querySelector(".product-detail");
  const productImg = document.querySelector(".product-img");
  const allProducts = document.querySelector(".all-products");
  
  const myCollectionReference = collection(db, "products");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();


    //  storage ka kaam ha 

    const myfile =productImg.files[0]
    // console.log("file",productImg.files[0]);

    const storageRef = ref(storage,myfile.name);
    

  const imgSnapShot= await  uploadBytes(storageRef,myfile)
  console.log("image uploaded", imgSnapShot)

  const url = await getDownloadURL(storageRef)

  // console.log("url:", url)



//  store ka kaam ha 

    // obj ko db ma document
    const myProduct = {
      productName: productName.value,
      productPrice: Number(productPrice.value),
      productImg: url,
      productDetail: productDetail.value,
      createdAt: serverTimestamp(),
    };
  console.log(myProduct);
  
    try {
     const result= await addDoc(myCollectionReference, myProduct);
  
     console.log("document add hogya hy",result);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
    form.reset()
    location.reload()
  });
  
  //
  
  // 1
  const querySnapshot = await getDocs(myCollectionReference);
  
  querySnapshot.forEach((doc) => {
    
    const product = doc.data();
  
    // date converted to "1 day ago | 20 min ago" (optional)
    const date = product.createdAt
      ? dateFns.formatDistance(product.createdAt?.toDate(), new Date(), {
          addSuffix: true, // true means ago add karna hy
        })
      : "";
   



    allProducts.innerHTML += `<section class="all-products">
    <div class="container">
          <img src="${product.productImg}" alt="" class="image"> 
          <h2>$ ${product.productPrice}</h2>
          <h3>${product.productName?.toUpperCase()}</h3>
          <p>${product.productDetail}</p>
          <p class="date">${date}</p>
        </div>
        </section>`; 
        
  }); 
  

  // =======================================\ Fire-storage  Works/=======================================  
