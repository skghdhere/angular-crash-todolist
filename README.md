# AngularCrashTodolist

Test project to practice firebase auth, database and angular material.
This will be deployed to firebase hosting.

## Deploy to ghpages:

### <strong> Use Either one </strong>

### Using CLI

<li>Step 1: ``` ng add angular-cli-ghpages``` </li>
<li>Step 2: ```ng build --prod --output-path docs --base-href=/angular-crash-todolist/ ```</li>
<li>When the build is complete, make a copy of docs/index.html and name it docs/404.html</li>
<li>Then commit and push changes.</li>
<li>Step 3: From <strong>setting<strong> page > User Github Pages Choose source as Branch:master and folder:docs</li>
<br>

### Using angular-cli-ghpages

<li>```ng add angular-cli-ghpages```</li>
<li>```ng deploy --base-href=/angular-crash-todolist/  --repo=https://github.com/skghdhere/angular-crash-todolist.git```</li>

## Deploy to firebase

1. npm install -g firebase-tools
2. firebase init
3. firebase deploy
   Note: Add target ''' firebase target:apply hosting site angular-todolist-90850 ''' and make changes to firebase.json

https://angular-todolist-90850.web.app/

## Deploy to Heroku

TODO

Reference : https://angular.io/guide/deployment
