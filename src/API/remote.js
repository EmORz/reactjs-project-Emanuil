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

  const login = "http://localhost:9999/api/user/login";

  const res =  await fetch(login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password
    })
  });
  console.log(res +"poooooooooooooooooooooooikl")

  return  await res.json();
}


export {
  register,
  login
};
