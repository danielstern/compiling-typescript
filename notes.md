# CompilingTypeScript2

## Notes
###  Q Where does the JS file that is served come from? Is build done automatically?
### A npm run build is automatically run when the web server button is clicked

### Why does send not work? Because its http not express

### why is "install new packages" grayed out?
That's a real mystery. Use npm install instead maybe.

### Running in wathc mode?
- VsCode offers a good built in terminal

Opening Code menu: CTRL + SHIFT + P
 - Configure task runner (creates tasks.json)
 - typescript "watch" mode may be availabile
    - -w flag,
    - is watching flag

VScode uses tasks.json

Building: CMD + SHIFT + B
  - can also be used to run watch mode
  - necessary if you are not using "watch" mode

Dealing with CAN'T OVERWRITE ERRORS
When TSC refuses to overwrite something like a d.ts file, it's because the directory is not properly specified in the config. If it tries overwriting something in a directory and sees that it's the outDir, it will do so.

## Common error when importing one app into another : "Cannot find type definition file for 'node'."
https://github.com/microsoft/TypeScript/issues/16772

- To refer to "document" you need to include the DOM library

//https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files