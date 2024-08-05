
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

// import { storage, ref, uploadBytes, getDownloadURL } from "./fire-storage.js";









// =======================================\ Fire-store Works/=======================================  
  const form = document.querySelector(".product-form");
  const productName = document.querySelector(".product-name");
  const productPrice = document.querySelector(".product-price");
  const productDetail = document.querySelector(".product-detail");
  const allProducts = document.querySelector(".all-products");
  
  const myCollectionReference = collection(db, "products");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    // obj ko db ma document
    const myProduct = {
      productName: productName.value,
      productPrice: Number(productPrice.value),
      productImg: null,
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
          <!-- <img src="" alt=""> -->
          <h2>$ ${product.productPrice}</h2>
          <h3>${product.productName?.toUpperCase()}</h3>
          <p>${product.productDetail}</p>
          <p class="date">${date}</p>
        </div>
        </section>`; 
        
  }); 
  

  // =======================================\ Fire-storage  Works/=======================================  
