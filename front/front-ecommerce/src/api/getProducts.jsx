 const getProducts = async ()=>{  
     try{
         const url = 'https://product-service-uvfl.onrender.com/products/'
         const prodJson = await fetch(url)
         const prod = await prodJson.json()
         return prod
     }

     catch (err) {
         console.log(err);
     }
 }

 export {getProducts}

