console.log("Ajax tutorial in one video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
  console.log("you have clicked the fetchBtn");

  // Instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // Open the object
  // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

  // USE THIS FOR POST REQUEST
  xhr.open("POST", "https://reqres.in/api/users", true);
  xhr.getResponseHeader("Content-type", "application/json");

  // What to do on progress (optional)
  xhr.onprogress = function () {
    console.log("On progress");
  };

  // xhr.onreadystatechange = function () {
  //     console.log('ready state is ', xhr.readyState);

  // }

  // What to do when response is ready
  xhr.onload = function () {
    if (this.status === 200 || this.status === 201) {
      console.log(this.responseText);
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  params = `{
  
    "id": "113",
    "createdAt": "2021-06-11T19:02:45.729Z"
}`;
  xhr.send(params);

  console.log("We are done!");
}

let backupBtn = document.getElementById("backupBtn");
backupBtn.addEventListener("click", button2ClickHandler);

function button2ClickHandler() {
  console.log("button 2 is clicked");
  // What to do when response is ready
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
  // xhr.getResponseHeader("Content-type", "application/json");
  xhr.onload = function () {
    if (this.status === 200 || this.status === 201) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let list = document.getElementById("list");
      str = "";
      str += `<li>${obj.title}</li>`;
      list.innerHTML = str;
    } else {
      console.log("Some error occured");
    }
  };

  // send the request
  params = `{
  
    "id": "113",
    "createdAt": "2021-06-11T19:02:45.729Z"
}`;
  xhr.send(params);

  console.log("We are done fetching title");
}
