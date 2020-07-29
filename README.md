IWasNuts
===========
...**It's** a **W**eb **A**pp **S**tarter for **N**ode **U**sing **T**ypeScript and **S**ass

```
This project includes settings specifically set up for Visual Studio Code.
* The ./vscode/settings.json file tells Visual Studio code to hide .js and certain other files from the file list.
* The ./vscode/tasks.json file tells Visual Studio Code how to launch the gulp tasks for compiling TypeScript and Sass.

This project is meant for for getting developers off the ground quickly with basic boilerplate code. Currently it is tailored toward a VSCode environment. It is a work in progress, but so far I have TypeScript and Sass compilation along with Express, Express-Session, BodyParser, and EJS templating. I will be adding a login mechanism and a forgot password email function -- hopefully soon.

I want to keep it to the basics, so I probably won't be adding sample database connectivity since there are too many different options. 

As always, I'm open to feedback -- especially if I can make something more efficient or if I have done something the wrong way. 

If you like where the project is headed, please star it on GitHub. Enjoy!
```

Guide for Advanced Users of Node and VSCode
-----------
1. Install NodeJS and Visual Studio Code
1. git clone https://github.com/anthony-tietjen/iwasnuts.git
1. npm install
1. npm install gulp -g

Guide for Newcomers to Node and VSCode
-----------
1. Install [NodeJS](http://www.nodejs.org)
1. Install [Visual Studio Code](http://code.visualstudio.com)
1. Install [Git](https://git-scm.com/downloads)
1. In the command prompt, cd into the project folder
1. In the command prompt, run: **git clone https://github.com/anthony-tietjen/iwasnuts.git**
1. At the command prompt, run: **npm install**
1. At the command prompt, run: **npm install gulp -g**
1. Create a new folder to hold your project


Final Steps
-----------
1. Open the project folder in Visual Studio Code.
1. Configure your project-specific settings in /app/config.ts
1. Place your Google (or other) anlytics scripts in /views/partials/analytics.ejs
1. Press CTRL+SHIFT+B to launch the build task for compiling TypeScript and Sass. (Make sure to do this every time you open the project.)
1. Press F5 to start the project in Node
1. Open your browser to 127.0.0.1:3000 (This assumes you are using the default config settings)

Recommended Extensions for Visual Studio Code
-----------
1. **.ejs** - For better editor support when modifying .ejs files
1. **TSLint** - For keeping in line with standard TypeScript coding practices.
1. **Sass Lint** - For keeping in line with standard TypeScript coding practices.

Resources
-----------
My website: [anthonytietjen.blogspot.com](http://anthonytietjen.blogspot.com)
