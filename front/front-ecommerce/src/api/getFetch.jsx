// const getFetch = async ()=>{  
//     try{
//         const url = 'https://64ee10061f87218271424186.mockapi.io/data'
//         const prodJson = await fetch(url)
//         const prod = await prodJson.json()
//         // setProducts(products)
//         return prod
//     }

//     catch (err) {
//         console.log(err);
//     }
// }

// export {getFetch}



import data from './api.json';

const getFetch = async () => {
  try {
    return data;
  } catch (err) {
    console.error(err);
  }
}

export { getFetch };
