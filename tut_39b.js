console.log("this is tut 39b");
// pretend that this response is coming from server
const students = [
  { name: "Saksham", subject: "Javascript" },
  { name: "Aviroop", subject: "Animation" },
];

function enrollStudent(student) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      students.push(student);
      console.log("sunny is enrolled");
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
}

//  function getStudents()

function getStudents() {
  setTimeout(function () {
    let str = "";
    students.forEach(function (student) {
      str += `<li> Name:${student.name}   Subject: ${student.subject} </li>`;
    });
    document.getElementById("students").innerHTML = str;
  }, 1000);
  console.log("students have been fetched");
}

let newStudent = { name: "Shubham", subject: "gaming" };
enrollStudent(newStudent)
  .then(getStudents)
  .catch(function () {
    console.log("some error occured");
  });
// getStudents();
