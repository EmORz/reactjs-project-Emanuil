const host = "http://localhost:9999/api/user/";

async function register(username, password) {
  const res = await fetch(host+'register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,      
      password,
    }),
  });

  return await res.json();
}

 async function login(username, password) {

  console.log('We are HERE!')

  const login = "http://localhost:9999/api/user/login";


  const res =  await fetch(login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password
    }),
     credentials: 'include'
  });


  return  await res.json();
}



async function getAllProducts(){

  const allProducts = "http://localhost:9999/api/product"

  const promise = await fetch(allProducts)
  const products = await promise.json()

  return products

}

export {
  register,
  login,
  getAllProducts
};
