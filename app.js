// requires that inquirer be used 
const inquirer = require('inquirer');

inquirer 
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));


// // requires the module file system to be used 
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// // creates an array to hold info it gathers 

// const pageHTML = generatePage(givenName, github);







// // what file type we are creating, what we are printing (html string), callback function to handle errors
// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log("portfolio complete! Check out index.html to see the output");
// });


