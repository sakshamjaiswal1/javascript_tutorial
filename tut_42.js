console.log("this is 42");
// button with id myBtn
let myBtn = document.getElementById("myBtn");
// container
let content = document.getElementById("content");

// function getData() {
//   console.log("started get data");

//   fetch("saksham.txt")
//     .then((response) => {
//       console.log("inside first then");

//       return response.text();
//     })
//     .then((data) => {
//       console.log("inside second then");

//       console.log(data);
//     });
// }

function getData() {
  console.log("started get data");

  fetch("https://api.github.com/users")
    .then((response) => {
      console.log("inside first then");

      return response.json();
    })
    .then((data) => {
      console.log("inside second then");

      console.log(data);
    });
}
function postData() {
  let url = "https://reqres.in/api/users";
  let data = { name: "saksham", job: "leader" };
  let params = {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  };
  fetch(url, params)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

postData();
