// generate employees
const generateTeam = employeesArr => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">

        ${employeesArr.forEach(employee => {
                let roleSpec = '';
                let icon = '';
                switch (employee.getRole()) {
                    case "Manager":
                        roleSpec = `Office Number: ${employee.getOfficeNumber()}`;
                        icon = `mug-hot`;
                        break;
                    case "Engineer":
                        roleSpec = `<a href="${employee.getGithub()}" class="btn btn-outline-primary"><i class="fab fa-github mr-2"></i>View GitHub</a>`;
                        icon = `glasses`;
                        break;
                    case "Intern":
                        roleSpec = `School: ${employee.getSchool()}`;
                        icon = `user-graduate`;
                        break;
                }
          
            return `
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <div>
                        <h5 class="card-title">${employee.getName()}</h5>
                    </div>
                    <div>
                        <h5 class="card-title"><i class="fas fa-${icon}"></i>${employee.getRole()}</h5>
                    </div>
                </div>
                <div class="card-body card-bg">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.getId()}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
                            </li>
                            <li class="list-group-item">${roleSpec}</li>
                        </ul>
                    </div>
                </div>
            </div>
          `;
          })
          .join('')}
  
        </div>
      </section>
    `;
  };


module.exports = (data) => {
    // console.log(data);


    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">

        <title>Team Member List Demo</title>

    </head>

    <body>
        <header>
            <div class="container flex-row justify-space-between align-center">
            <h1 class="page-title text-secondary bg-danger.bg-gradient text-white">My Team</h1>
            </div>
        </header>
        <main class="container">
            ${generateTeam(data.employees)}
        </main>
        <footer class="container text-center bg-light text-dark">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()}. Team Member Generator created by Erica Siegel</h3>
        </footer>
    </body>
    </html>
    `;
};
