const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
// const inquirer  = require('./lib/inquirer');
const Configstore = require('configstore');
const conf = new Configstore('ginit');
const github = require('./lib/github');

// if (files.directoryExists('.git')) {
//   console.log(chalk.red('Already a Git repository!'));
//   process.exit();
// }

// const run = async () => {
//   const credentials = await inquirer.askGithubCredentials();
//   console.log(credentials);
// };

const run = async () => {
  try {
    let token = github.getStoredGithubToken();
    if(!token) {
      token = await github.getPersonalAccesToken();
    }
    console.log(token);
  } catch (error) {
    console.error(error);
  }
};



run();
// console.log(
//     chalk.yellow(
//       figlet.textSync('Adebayo Ilerioluwa', { horizontalLayout: 'full' })
//     )
//   );