const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// dummy data for testing 

const mockData = {
  name: 'Lernantino',
  github: 'lernantino',
  confirmAbout: true,
  about:
    'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
  projects: [
    {
      name: 'Run Buddy',
      description:
        'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
      languages: ['HTML', 'CSS'],
      link: 'https://github.com/lernantino/run-buddy',
      feature: true,
      confirmAddProject: true
    },
    {
      name: 'Taskinator',
      description:
        'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
      languages: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/lernantino/taskinator',
      feature: true,
      confirmAddProject: true
    },
    {
      name: 'Taskmaster Pro',
      description:
        'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
      languages: ['JavaScript', 'jQuery', 'CSS', 'HTML', 'Bootstrap'],
      link: 'https://github.com/lernantino/taskmaster-pro',
      feature: false,
      confirmAddProject: true
    },
    {
      name: 'Robot Gladiators',
      description:
        'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
      languages: ['JavaScript'],
      link: 'https://github.com/lernantino/robot-gladiators',
      feature: false,
      confirmAddProject: false
    }
  ]
};

const pageHTML = generatePage(mockData);


// const promptUser = () => {
//   return inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is your name? (Required)',
//       validate: nameInput => {
//         if (nameInput) {
//           return true;
//         } else {
//           console.log('Please enter your name!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'input',
//       name: 'github',
//       message: 'Enter your GitHub Username (Required)',
//       validate: githubInput => {
//         if (githubInput) {
//           return true;
//         } else {
//           console.log('Please enter your GitHub username!');
//           return false;
//         }
//       }
//     },
//     {
//       type: 'confirm',
//       name: 'confirmAbout',
//       message: 'Would you like to enter some information about yourself for an "About" section?',
//       default: true
//     },
//     {
//       type: 'input',
//       name: 'about',
//       message: 'Provide some information about yourself:',
//       when: ({ confirmAbout }) => confirmAbout
//     }
//   ]);
// };

// const promptProject = portfolioData => {
//   console.log(`
// =================
// Add a New Project
// =================
// `);

//   // If there's no 'projects' array property, create one
//   if (!portfolioData.projects) {
//     portfolioData.projects = [];
//   }
//   return inquirer
//     .prompt([
//       {
//         type: 'input',
//         name: 'name',
//         message: 'What is the name of your project? (Required)',
//         validate: nameInput => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project name!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'input',
//         name: 'description',
//         message: 'Provide a description of the project (Required)',
//         validate: descriptionInput => {
//           if (descriptionInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project description!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'checkbox',
//         name: 'languages',
//         message: 'What did you this project with? (Check all that apply)',
//         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
//       },
//       {
//         type: 'input',
//         name: 'link',
//         message: 'Enter the GitHub link to your project. (Required)',
//         validate: linkInput => {
//           if (linkInput) {
//             return true;
//           } else {
//             console.log('You need to enter a project GitHub link!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'confirm',
//         name: 'feature',
//         message: 'Would you like to feature this project?',
//         default: false
//       },
//       {
//         type: 'confirm',
//         name: 'confirmAddProject',
//         message: 'Would you like to enter another project?',
//         default: false
//       }
//     ])
//     .then(projectData => {
//       portfolioData.projects.push(projectData);
//       if (projectData.confirmAddProject) {
//         return promptProject(portfolioData);
//       } else {
//         return portfolioData;
//       }
//     });
// };

// promptUser()
//   .then(promptProject)
//   .then(portfolioData => {
    
    
    // const pageHTML = generatePage(portfolioData);
    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out index.html in this directory to see it!');
    });
  // });

