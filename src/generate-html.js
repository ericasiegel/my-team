// // generate employee cards from array
// const generateTeam = dataArr => {
//     return `
//     ${console.log(dataArr)}
//         ${dataArr
//           .filter(({ Manager }) => Manager)
//           .map(({ name, id, email, officeNumber }) => {
//             return `
//             <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
//                 <div class="card-header">
//                     <div>
//                         <h5 class="card-title">${name}</h5>
//                     </div>
//                     <div>
//                         <h5 class="card-title"><i class="fas fa-mug-hot"></i>Manager</h5>
//                     </div>
//                 <div class="card-body card-bg">
//                     <div class="card" style="width: 18rem;">
//                         <ul class="list-group list-group-flush">
//                             <li class="list-group-item">ID: ${id}</li>
//                             <li class="list-group-item">
//                                 Email: <a href="mailto:${email}">${email}</a>
//                             </li>
//                             <li class="list-group-item">Office Number: ${officeNumber}</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//           `;
//           })
//           .join('')}
  
//           ${dataArr
//             .filter(({ Engineer }) => Engineer)
//             .map(({ name, id, email, github }) => {
//               return `
//               <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
//                   <div class="card-header">
//                       <div>
//                           <h5 class="card-title">${name}</h5>
//                       </div>
//                       <div>
//                           <h5 class="card-title"><i class="fas fa-glasses"></i>Engineer</h5>
//                       </div>
//                   </div>
//                   <div class="card-body card-bg">
//                       <div class="card" style="width: 18rem;">
//                           <ul class="list-group list-group-flush">
//                               <li class="list-group-item">ID: ${id}</li>
//                               <li class="list-group-item">
//                                   Email: <a href="mailto:${email}">${email}</a>
//                               </li>
//                               <li class="list-group-item"><a href="https://github.com/${github}" class="btn btn-outline-primary"><i class="fab fa-github mr-2"></i>View GitHub</a></li>
//                           </ul>
//                       </div>
//                   </div>
//               </div>
//             `;
//             })
//             .join('')}

//             ${dataArr
//                 .filter(({ Intern }) => Intern)
//                 .map(({ name, id, email, school }) => {
//                   return `
//                   <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
//                       <div class="card-header">
//                           <div>
//                               <h5 class="card-title">${name}</h5>
//                           </div>
//                           <div>
//                               <h5 class="card-title"><i class="fas fa-user-graduate"></i>Intern</h5>
//                           </div>
//                       </div>
//                       <div class="card-body card-bg">
//                           <div class="card" style="width: 18rem;">
//                               <ul class="list-group list-group-flush">
//                                   <li class="list-group-item">ID: ${id}</li>
//                                   <li class="list-group-item">
//                                       Email: <a href="mailto:${email}">${email}</a>
//                                   </li>
//                                   <li class="list-group-item">School: ${school}</li>
//                               </ul>
//                           </div>
//                       </div>
//                   </div>
//                 `;
//                 })
//                 .join('')}
//     `;
//   };

// generate employees from dataArr
let generateTeam = dataArr => {
    return dataArr.forEach(employee => {
            console.log(employee);
                let roleSpec = '';
                let icon = '';
                switch (employee) {
                    case "Manager":
                        roleSpec = `Office Number: ${employee.officeNumber}`;
                        icon = `mug-hot`;
                        break;
                    case "Engineer":
                        roleSpec = `<a href="https://github.com/${employee.github}" class="btn btn-outline-primary"><i class="fab fa-github mr-2"></i>View GitHub</a>`;
                        icon = `glasses`;
                        break;
                    case "Intern":
                        roleSpec = `School: ${employee.school}`;
                        icon = `user-graduate`;
                        break;
                }
            let cards = `
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header">
                    <div>
                        <h5 class="card-title">${employee.name}</h5>
                    </div>
                    <div>
                        <h5 class="card-title"><i class="fas fa-${icon}"></i>${employee.role}</h5>
                    </div>
                </div>
                <div class="card-body card-bg">
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${employee.email}">${employee.email}</a>
                            </li>
                            <li class="list-group-item">${roleSpec}</li>
                        </ul>
                    </div>
                </div>
            </div>
          `;
          cards
    })
        //   .join('')
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
    <header class="bg-primary bg-gradient">
        <div class="container flex-row">
            <h1 class="page-title text-secondary d-flex justify-content-center text-white">My Team</h1>
        </div>
    </header>
    <main class="container ">
        <div class="flex-row justify-space-between" id="cards">
            <div><div>
        </div>
    </main>
    <footer class="text-center bg-light text-dark">
        <h5 class="text-dark">&copy; ${new Date().getFullYear()}. Team Member Generator created by Erica Siegel</h5>
    </footer>
</body>

</html>
    `;
};
