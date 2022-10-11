
const fs = require('fs/promises');
const inquirer = require('inquirer');
const Employee = require('./libs/employee');
const Engineer = require('./libs/engineer');
const Intern = require('./libs/intern');
const Manager = require('./libs/manager');


const team = [];
const page = [];


const getTeam = async() => {
  inquirer.prompt([
    {
      type:'list',
      name:'employee',
      message: 'What team member would you like to add?',
      choices:['Manager', 'Engineer', 'Intern'],
      validate: (value) => {if(value){return true} else{return "Must choose one!"}},
    },
    {
      type:'input',
      name:'name',
      message: 'What is the employee name?',
      validate: (value) => {if(value){return true} else{return "Must give an employee name!"}}
    },
    {
      type:'input',
      name:'id',
      message: 'What is the employee id number?',
      validate: (value) => {if(value){return true} else{return "Must enter id number!"}}
    },
    {
      type:'input',
      name:'email',
      message: 'What is the employee email?',
      validate: (value) => {if(value){return true} else{return "Must enter email!"}}
    },
    {
      type:'input',
      name:'school',
      message: 'What school did the intern attend?',
      when: (answers) => answers.employee === 'Intern',
      validate: (value) => {if(value){return true} else{return "Must enter school!"}}
    },
    {
      type:'input',
      name:'github',
      message: 'What is the engineers github account?',
      when: (answers) => answers.employee === 'Engineer',
      validate: (value) => {if(value){return true} else{return "Must enter github!"}}
    },
    {
      type:'input',
      name:'officeNum',
      message: 'What is the team managers office number?',
      when: (answers) => answers.employee === 'Manager',
      validate: (value) => {if(value){return true} else{return "Must enter office number!"}}
    },
    {
      type:'confirm',
      name:'members',
      message: 'Would you like to add another team member?',
      validate: (value) => {if(value){return true} else{return "Must enter email!"}}
    },
 
 
  
])
.then(async (answers) => {

    const htmlFile =   createHtml();
    const endFile = endOfHtml();

   



      if (answers.employee === 'Manager'){
           
    
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum))

     }

     if( answers.newEmployee === 'Manager'){



      team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNum))

     }
          
      if (answers.employee  === 'Engineer'){

      

      team.push(new Engineer(answers.name, answers.id, answers.email, answers.github))
     }

          
     if( answers.newEmployee === 'Engineer'){


      team.push(new Engineer(answers.name, answers.id, answers.email, answers.github))

      
     }
        
      if (answers.employee === 'Intern') {

 
      team.push(new Intern(answers.name, answers.id, answers.email, answers.school))


    }

      if( answers.newEmployee === 'Intern'){

    
      team.push(new Intern(answers.name, answers.id, answers.email, answers.school))

        
      }
          
        
      if(answers.members === false){
        page.push(htmlFile)
        
        for (let i = 0; i < team.length; i++){
          switch(team[i].getRole()){
            case 'Manager':
                 page.push(managerHtml(team[i]));
            break; 

            case 'Intern':
              page.push(internHtml(team[i]));
            break;

            case 'Engineer':
              page.push(engineerHtml(team[i]));
            break;

            default:
              console.log('Nothing Detected!');
          }
        }

      
        page.push(endFile)

        fs.writeFile('team.html', page, (err) => {

          err ? console.log('error!') : console.log('success!');

          return team;
      })

      } else{
        
        return getTeam();
      }


    })


    }

    getTeam();




const createHtml = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./dist/style.css"/>
        <title>My Team</title>
    </head>
    <body>
        <nav class="jumbotron col-12" id="nav">
       
            <h1>My Team</h1> 
         
          </nav>


    `}


   const endOfHtml = () => {
      return`

      <script src="./index.js"></script>
      </body>
      </html>
      `
      }


    const internHtml = (intern) => {
        return`
        <div class="container">
    
            <nav class="navbar">
                <h3 class="name">${intern.name}</h3>
                <h4 class="role"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg> Intern</h4>
            </nav>
    
            <ul class="list-group" id="intern-card">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
              
            </ul>
        </div>


        `}




    const managerHtml = (manager) => {
      return`
      <div class="container">
        
                <nav class="navbar">
                  <h3 class="name">${manager.name}</h3>
                  <h4 class="role"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cup-hot" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"/>
                    <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
                    </svg> Manager</h4>
                  </nav>
          
                  <ul class="list-group" id="manager-card">

                        <li class="list-group-item">ID:${manager.id}</li>
                        <li class="list-group-item">Email: ${manager.email}</li>
                        <li class="list-group-item">Office Number: ${manager.officeNum}</li>
                    
                  </ul>
              </div>
              
              
              `
    }   



    
    const engineerHtml = (engineer) => {
            return`
        <div class="container">
            
            <nav class="navbar">
                <h3 class="name">${engineer.name}</h3>
                <h4 class="role"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16">
                  <path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"/>
                  </svg> Engineer</h4>
            </nav>
    
            <ul class="list-group" id="engineer-card">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">Github: ${engineer.github}</li>
              
            </ul>
    
          </div>
    
   
    `
}



