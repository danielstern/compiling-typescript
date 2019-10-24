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