const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

//create the manager section
const generateManager = Manager => {
    return `
    <div class="card col-6 border-danger bg-light shadow profile top-buffer" style="width: 18rem" id="employee">
<div class="card-header mb-3 text-light" style="background-color: rgb(247, 65, 65);">
    <h4>${name}</h4>
    <h5>Manager</h5>
  </div>
  <div class="card-body">
<ul class="list-group list-group-flush">
  <li class="list-group-item p-2">ID: ${id} </li>
  <li class="list-group-item p-2"><a href = "mailto: ${email}">Email: ${email}</a></li>
  <li class="list-group-item p-2">Office Number: ${officeNumber}</li>
</ul>
</div>
</div>`;
};

const generateEgineer = Engineer => {
    return `
      <div class="card border-primary col-6 bg-light shadow profile top-buffer" style="width: 18rem" id="employee">
      <div class="card-header mb-3 text-light" style="background-color: rgb(48, 48, 245);">
          <h4>${name}</h4>
          <h5>Engineer</h5>
        </div>
        <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item p-2">ID: ${id}</li>
        <li class="list-group-item p-2"><a href = "mailto: ${email}">Email: ${email}</a></li>
        <li class="list-group-item p-2"><a href = "https://github.com/${github}" target = "_blank">Github: ${github}</a></li>
      </ul>
    </div>
    </div>`;
  };

  const generateIntern = Intern => {
    return `
      <div class="card border-success col-6 bg-light shadow profile top-buffer" style="width: 18rem" id="employee">
            <div class="card-header mb-3 text-light" style="background-color: rgb(52, 190, 52);">
                <h4>${name}</h4>
                <h5>Intern</h5>
              </div>
              <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-2">ID: ${id}</li>
              <li class="list-group-item p-2"><a href = "mailto: ${email}">Email: ${email}</a></li>
              <li class="list-group-item p-2">School: ${school}</li>
            </ul>
          </div>
          </div>`;
  };

























// `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
// </body>
// </html>
// `

