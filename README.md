# Compiling TypeScript

## Installing and Running the Completed Package

1. OPTIONAL - Install the TypeScript compiler globally (local install is also possible):
`npm install -g typescript`

2. Install this package with Git:
`git clone git@github.com:danielstern/compiling-typescript.git`

3. Install local packages with `npm`:
`npm install`

4. Run TypeScript compilation and start the server simultaneously with:
`npm start`

## Exploring the Project

### /legacy 
The legacy folder contains a JavaScript utlity that was made a long, long time ago. We have added a declaration file for this validator, allowing Visual Studio Code to provide us with code hints.

### /public
Contains HTML file which is served to the user - aggregates references to generated .js files.