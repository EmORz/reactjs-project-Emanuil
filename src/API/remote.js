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

  console.log(host+'login')
  const res = await fetch(host + "login", {
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

  return await res.json();
}

async function createHotel(hotel) {
  const res = await fetch(host + "hotels/create", {
    method: "POST",
    headers: {
      Authorization: "bearer " + localStorage.getItem("authToken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(hotel),
  });
  return await res.json();
}

async function getPage(page) {
  const res = await fetch(host + "hotels/all?page=" + page);
  return await res.json();
}

async function getDetails(id) {
  const res = await fetch(host + "hotels/details/" + id, {
    method: "GET",
    headers: {
      Authorization: "bearer " + localStorage.getItem("authToken"),
    },
  });
  return await res.json();
}

async function postReview(hotelId, comment, rating) {
  const res = await fetch(host + `hotels/details/${hotelId}/reviews/create`, {
    method: "POST",
    headers: {
      Authorization: "bearer " + localStorage.getItem("authToken"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment,
      rating,
    }),
  });
  return await res.json();
}

async function getReviews(hotelId) {
  const res = await fetch(host + `hotels/details/${hotelId}/reviews`, {
    method: "GET",
    headers: {
      Authorization: "bearer " + localStorage.getItem("authToken"),
    },
  });
  return await res.json();
}

async function deleteHotel(hotelId) {
  const res = await fetch(host + `hotels/${hotelId}`, {
    method: "DELETE",
    headers: {
      Authorization: "bearer " + localStorage.getItem("authToken"),
    },
  });
  return await res.json();
}

export {
  register,
  login,
  createHotel,
  getPage,
  getDetails,
  postReview,
  getReviews,
  deleteHotel,
};
