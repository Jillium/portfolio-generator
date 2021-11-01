// requires the module file system to be used 
const fs = require('fs');
const generatePage = require('./src/page-template');
// creates an array to hold info it gathers 
const profileDataArgs = process.argv.slice(2);

const [givenName, github] = profileDataArgs;





// what file type we are creating, what we are printing (html string), callback function to handle errors
fs.writeFile('./index.html', generatePage(givenName, github), err => {
  if (err) throw err;

  console.log("portfolio complete! Check out index.html to see the output");
});


