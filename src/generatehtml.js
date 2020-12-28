// generate employees
const generateTeam = employeesArr => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">

        ${employeesArr
          .filter(({ manager }) => manager)
          .map(({ name, role, id, email, officeNumber }) => {
            return `
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <div>
                        <h5 class="card-title">${name}</h5>
                    </div>
                    <div>
                        <h5 class="card-title"><i class="fas fa-mug-hot"></i>${role}</h5>
                    </div>
                </div>
                <div class="card-body card-bg">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${email}">${email}</a>
                            </li>
                            <li class="list-group-item">Office Number: ${officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
          `;
          })
          .join('')}
  
          ${employeesArr
            .filter(({ engineer }) => engineer)
            .map(({ name, role, id, email, github }) => {
              return `
              <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                  <div class="card-header">
                        <div>
                            <h5 class="card-title">${name}</h5>
                        </div>
                        <div>
                            <h5 class="card-title"><i class="fas fa-glasses"></i>${role}</h5>
                        </div>
                  </div>
                  <div class="card-body card-bg">
                      <div class="card" style="width: 18rem;">
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item">ID: ${id}</li>
                              <li class="list-group-item">
                                Email: <a href="mailto:${email}">${email}</a>
                              </li>
                              <li class="list-group-item">
                                <a href="${github}" class="btn btn-outline-primary"><i class="fab fa-github mr-2"></i>View GitHub</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
            `;
            })
            .join('')}

            ${employeesArr
                .filter(({ intern }) => intern)
                .map(({ name, role, id, email, school }) => {
                  return `
                  <div class="card text-white bg-primary.bg-gradient mb-3" style="max-width: 18rem;">
                      <div class="card-header">
                        <div>
                            <h5 class="card-title">${name}</h5>
                        </div>
                        <div>
                            <h5 class="card-title"><i class="fas fa-user-graduate"></i>${role}</h5>
                        </div>
                      </div>
                      <div class="card-body bg-light">
                          <div class="card" style="width: 18rem;">
                              <ul class="list-group list-group-flush">
                                  <li class="list-group-item">ID: ${id}</li>
                                  <li class="list-group-item">
                                    Email: <a href="mailto:${email}">${email}</a>
                                  </li>
                                  <li class="list-group-item">School: ${school}</li>
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


module.exports = templateData => {
    console.log(templateData);

    // destructure projects and about data from templateData based on their property key names
    const { header, ...employees } = templateData;


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
            <h1 class="page-title text-secondary bg-danger.bg-gradient text-white">${header.name}'s Team</h1>
            </div>
        </header>
        <main class="container">
            ${generateTeam(employees)}
        </main>
        <footer class="container text-center bg-light text-dark">
            <h3 class="text-dark">&copy; ${new Date().getFullYear()}. Team Member Generator created by Erica Siegel</h3>
        </footer>
    </body>
    </html>
    `;
};
