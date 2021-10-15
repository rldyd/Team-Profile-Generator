const createManager = function (data) {
  return `
  <div class="card col-6 border-dark bg-light shadow profile top-buffer" style="width: 18rem" id="employee">
  <div class="card-header mb-3 text-light" style="background-color: rgb(255, 0, 85)">
      <h4>${data.name}</h4>
      <h5>Manager</h5>
    </div>
    <div class="card-body">
  <ul class="list-group list-group-flush">
    <li class="list-group-item p-2">ID: ${data.id} </li>
    <li class="list-group-item p-2"><a href = "mailto: ${data.email}">Email: ${data.email}</a> </li>
    <li class="list-group-item p-2">Office Number: ${data.officeNumber}</li>
  </ul>
  </div>
  </div>`;
};

const createEngineer = function (data) {
  return `
    <div class="card border-dark col-6 bg-light shadow profile top-buffer" style="width: 18rem" id="employee3">
    <div class="card-header mb-3 text-light" style="background-color: rgb(0, 255, 179);">
        <h4>${data.name}</h4>
        <h5>Engineer</h5>
    </div>
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item p-2">ID: ${data.id}</li>
            <li class="list-group-item p-2"><a href = "mailto: ${data.email}">Email: ${data.email}</a></li>
            <li class="list-group-item p-2"><a href = "https://github.com/${data.github}" target = "_blank">Github: ${data.github}</a> </li>
        </ul>
    </div>
  </div> `;
};

const createIntern = function (data) {
  return `
    <div class="card border-dark col-6 bg-light shadow profile top-buffer" style="width: 18rem" id="employee2" >
      <div class="card-header mb-3 text-light" style="background-color: rgb(0, 189, 196);">
        <h4>${data.name}</h4>
        <h5>Intern</h5>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-2">ID: ${data.id}</li>
          <li class="list-group-item p-2"><a href = "mailto: ${data.email}">Email: ${data.email}</a> </li>
          <li class="list-group-item p-2">School: ${data.school}</li>
        </ul>
      </div>
    </div >`;
};

getRole = (data) => {
  const team = [];

  for (let i = 0; i < data.length; i++) {
    const person = data[i];
    const role = person.getRole();
    // console.log(role);

    if (role === "Manager") {
      const manager = createManager(person);
      team.push(manager);
    } else if (role === "Engineer") {
      const engineer = createEngineer(person);
      team.push(engineer);
    } else if (role === "Intern") {
      const intern = createIntern(person);
      team.push(intern);
    }
  }
  const allEmployees = team.join("");
  const pageEl = genPage(allEmployees);
  return pageEl;
};

const genPage = function (pageEl) {
  return `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Profile Generator</title>
    </head>
    <body>
      <header>
      <h1>My Team</h1>
      </header>
      <div class="container">
          <div class="row" id="page">
          ${pageEl}
          </div>
          </div>
        </body>
      </html>`;
};

module.exports = getRole;
