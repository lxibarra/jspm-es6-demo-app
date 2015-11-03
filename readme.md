jspm Demo APP
===

This repo has a basic es6 application using traceur and jspm to manage commonjs, amd and global dependencies.
Clone this repo and follow instructions.

### 1. Install jspm CLI:

  ```
    npm install jspm -g
  ```
  
### 2. Install packages from the jspm Registry, GitHub or npm:

Optionally lock down jspm for the project:

  ```
    npm install && jspm install
  ```
  
 For complete documentation go here https://github.com/jspm/jspm-cli
 ### 3. Run app:
 
 For this simple demo you can use live-server. Its avaliable on npm
  ```
    npm install live-server -g
  ``` 
  After installation just open the console, go to the app dir and run live-server. Different from other
  workflows, this project does not require you to have other background jobs to make the demo work.
  