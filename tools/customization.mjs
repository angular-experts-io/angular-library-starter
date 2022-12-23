import replaceInFile from 'replace-in-file';
import kebabcase from 'lodash.kebabcase';
import camelcase from 'lodash.camelcase';
import {exec} from 'child_process';
import inquirer from 'inquirer';
import {renameSync} from 'fs';
import ora from 'ora';

const LIBRARY_NAME = 'angular-library-starter';

const CUSTOMIZATION_DEPS = [
    'inquirer',
    'replace-in-file',
    'lodash.camelcase',
    'lodash.kebabcase',
    'ora'
]

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
    const {libraryName, cleanupNpmPackages} = await promptInputs();
    replaceAndRename(libraryName);
    replaceNpmPackages(cleanupNpmPackages);
}

function replaceNpmPackages(replace) {
    if (!replace) {
        return;
    }

    CUSTOMIZATION_DEPS.forEach(dep => exec(`npm uninstall ${dep}`,
        err => console.error(`An error occured while uninstalling ${dep}`)))
}

function replaceAndRename(libraryName) {
    renameDirectories(libraryName);
    renameKebabCases(libraryName);
    renameCamelCases(libraryName);
}

async function promptInputs() {
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
        },
        {
            name: 'cleanupNpmPackages',
            type: 'confirm',
            message: 'Do you want to uninstall the packages used for customization?'
        }
    ]);
    return answers;
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

    console.log('caps and capitalized', capitalize(camelcase(LIBRARY_NAME)));

    const capsReplaceOptions = {
        ignore: 'node_modules/**/*',
        files: '**/*.{ts,html,json,scss,js}',
        from: new RegExp(capitalize(camelcase(LIBRARY_NAME)), 'g'),
        to: capitalize(camelcase(libraryName))
    }

    try {
        spinner.start();
        replaceInFile.sync(replaceOptions);
        replaceInFile.sync(capsReplaceOptions);
        spinner.stop();
    } catch (error) {
        spinner.fail('Oh no, an error occurred while replacing class names, configs, styles')
        console.error(error);
    }
}

function capitalize(value) {
    return value.charAt(0).toUpperCase() + value.substring(1);
}

function generateSpinner(text) {
    return ora({
        text, spinner: 'christmas'
    })
}

customize()
    .then(() => console.log('Library customization successfully'))
    .catch(error => console.log('Library customization failed', error));
