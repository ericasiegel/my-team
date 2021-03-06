
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
        <header class="bg-info bg-gradient">
            <div class="container flex-row header">
                <h1 class="page-title text-secondary d-flex justify-content-center text-dark">My Team</h1>
            </div>
        </header>
        <main class="container main">
            <div class="row row-cols-1 row-cols-md-4 g-4 justify-content-center">
                <div><div>
            </div>
        </main>
        <footer class="text-center bg-light">
            <h5 class="text-muted footer">Team Member Generator created by Erica Siegel</h5>
        </footer>
    </body>
    
    </html>
    `;
};
