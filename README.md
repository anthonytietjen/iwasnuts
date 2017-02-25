IWasNuts
===========
...**I**s a **W**eb **A**pp **S**tarter for **N**ode **U**sing **T**ypeScript and **S**ass

```
This project includes settings specifically set up for Visual Studio Code.
* The ./vscode/settings.json file tells Visual Studio code to hide .js and certain other files from the file list.
* The ./vscode/tasks.json file tells Visual Studio Code how to launch the gulp tasks for compiling TypeScript and Sass.
```

Guide for Advanced Users of Node and VSCode
-----------
1. Install NodeJS and Visual Studio Code
2. git clone https://github.com/anthony-tietjen/iwasnuts.git
3. npm install
4. npm install gulp -g

Guide for Newcomers to Node and VSCode
-----------
1. Install [NodeJS](http://www.nodejs.org)
2. Install [Visual Studio Code](http://code.visualstudio.com)
3. Install [Git](https://git-scm.com/downloads)
4. At the command prompt, run: **npm install**
5. At the command prompt, run: **npm install gulp -g**
6. Create a new folder to hold your project
7. In the command prompt, cd into the project folder
8. In the command prompt, run: **git clone https://github.com/anthony-tietjen/iwasnuts.git**

Final Steps
-----------
1. Open the project folder in Visual Studio Code.
2. Configure your project-specific settings in /app/config.ts
3. Place your Google (or other) anlytics scripts in /views/partials/analytics.ejs
4. Press CTRL+SHIFT+B to launch the build task for compiling TypeScript and Sass. (Make sure to do this every time you open the project.)

Recommended Extensions for Visual Studio Code
-----------
1. **.ejs** - For better editor support when modifying .ejs files
2. **TSLint** - For keeping in line with standard TypeScript coding practices.
2. **Sass Lint** - For keeping in line with standard TypeScript coding practices.
