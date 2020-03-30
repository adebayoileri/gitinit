const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inquirer  = require('./lib/inquirer');

// if (files.directoryExists('.git')) {
//   console.log(chalk.red('Already a Git repository!'));
//   process.exit();
// }

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};

run();
// console.log(
//     chalk.yellow(
//       figlet.textSync('Adebayo Ilerioluwa', { horizontalLayout: 'full' })
//     )
//   );