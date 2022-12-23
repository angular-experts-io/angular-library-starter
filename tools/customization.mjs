import replaceInFile from 'replace-in-file';
import kebabcase from 'lodash.kebabcase';
import camelcase from 'lodash.camelcase';
import inquirer from 'inquirer';
import {renameSync} from 'fs';
import ora from 'ora';

const LIBRARY_NAME = 'ng-if-responsive';

async function customize() {
    console.log(`
                               *     .--.
                                / /  \`
               +               | |
                      '         \\ \\__,
                  *          +   '--'  *
                      +   /\\
         +              .'  '.   *
                *      /======\\      +
                      ;:.  _   ;
                      |:. (_)  |
                      |:.  _   |
            +         |:. (_)  |          *
                      ;:.      ;
                    .' \\:.    / \`.
                   / .-'':._.'\`-. \\
                   |/    /||\\    \\|
             jgs _..--"""\`\`\`\`"""--.._
           _.-'\`\`                    \`\`'-._
         -'                                '-
         Angular library starter customization wizard
    `)
    const libraryName = await promptNewLibraryName();
    replaceAndRename(libraryName);
}

function replaceAndRename(libraryName) {
    renameDirectories(libraryName);
    renameKebabCases(libraryName);
    renameCamelCases(libraryName);
}

async function promptNewLibraryName() {
    const answers = await inquirer.prompt([
        {
            name: 'libraryName',
            type: 'input',
            message: 'Please enter a new library name',
            validate: function (value) {
                if (!value) {
                    console.error('Please provide a library name')
                }
                return true;
            }
        }
    ]);
    return answers.libraryName;
}

function renameDirectories(libraryName) {
    const spinner = generateSpinner('Rename directories');
    try {
        spinner.start();
        renameSync(`./projects/${LIBRARY_NAME}`, `./projects/${kebabcase(libraryName)}`);
        renameSync(`./projects/${LIBRARY_NAME}-showcase`, `./projects/${kebabcase(libraryName)}-showcase`);
        spinner.stop();
    } catch (error) {
        spinner.fail('Oh no, an error occurred while renaming the library or the showcase directories')
        console.error(error);
    }

}

function renameKebabCases(libraryName) {
    const spinner = generateSpinner('Replacing configs, import paths, selectors, HTML component usage, styles');

    const replaceOptions = {
        ignore: 'node_modules/**/*',
        files: '**/*.{ts,html,json,scss,js}',
        from: new RegExp(LIBRARY_NAME, 'g'),
        to: kebabcase(libraryName)
    }

    try {
        spinner.start();
        replaceInFile.sync(replaceOptions);
        spinner.stop();
    } catch (error) {
        spinner.fail('Oh no, an error occurred while replacing configs, import paths, selectors, HTML component usage')
        console.error(error);
    }
}

function renameCamelCases(libraryName) {
    const spinner = generateSpinner('Replacing class names, configs, styles');

    const replaceOptions = {
        ignore: 'node_modules/**/*',
        files: '**/*.{ts,html,json,scss,js}',
        from: new RegExp(camelcase(LIBRARY_NAME), 'g'),
        to: camelcase(libraryName)
    }

    try {
        spinner.start();
        replaceInFile.sync(replaceOptions);
        spinner.stop();
    } catch (error) {
        spinner.fail('Oh no, an error occurred while replacing class names, configs, styles')
        console.error(error);
    }
}

function generateSpinner(text) {
    return ora({
        text, spinner: 'christmas'
    })
}

customize()
    .then(() => console.log('Library customization successfully'))
    .catch(error => console.log('Library customization failed', error));
