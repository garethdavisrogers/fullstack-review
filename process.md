# Process for creating this repo #
  Below is the brief step by step process I used to set up this repo. I hope it gives you a feel for how I go about starting a barebones fullstack app. You can look at commit history on github to see some of the changes I've made.


## Step by step ##
  - Run npm init and git init
  - Follow steps on github to add the repository
  - Think of packages that I know I will use and install using npm (don't worry too much here... can always install later)
  - make server, database, and client folder
  - in root directory make a .gitignore and webpack.config.js file
  - write webpack.config.js file
  - add a dist folder for static files inside of client
  - add a simple index.html file to client/dist folder with a div with id="app"
  - add dist/bundle.js to .gitignore
  - add build script to package.json
  - make the simplest possible component in App.jsx that renders something like "hello world"
  - add react dom render method to index.jsx to render App to id="app" in html
  - run build script and confirm that there are no errors in webpack.config.js or react
  - make an index.js file for server in server folder
  - add express bodyParser and path.
  - create an app with express and set it to listen on 3000
  - use express.static and path to serve client/dist to browser
  - create start script
  - run npm start and open up localhost:3000 in browser to see if we can see hello world
  - At this stage we have confirmed that our react is properly bundling, our server is properly working, and that we are serving static files to clients
  - add a database config file (same process for both databases mongo/mysql)
  - for mongoose go to next step for mysql create a database with a .sql file or in the shell so you can specify it in connection
  - create a connection configuration and call connect
  - Check the connection by console.logging either success or failure
  - if not successful always try restarting the service (mongodb or mysql) on your computer. Check if you can get into the shell. Try the easy fixes first unless you get an error message with more information
  - now we have confrimed that we are connecting to the database
  - Create a basic get route sending back something like "hello world"
  - test it in the browser, with postman, or with curl
  - upon success we know that our server is working for api calls not only static file service
  - modify the get route to have the simplest database query possible (get all records from a table)
  - console.log your errors/ send your errors or results
  - At this point there's no data in our database so we should get something like an empty array
  - test it with postman, curl, or the browser
  - make a simple post route to insert one item into your database again console.log your errors or data and send it to the client for testing
  - test it with postman or curl
  - after successfully posting, test your get route again, check to see if the data is there
  - At this point our server and database are essentially good to go. More functionality could definitely be added but we have basic functionality. We can get all the records and we can add a single record to the database. From here I would move onto the client my process would look something like this
  - add state to our simple App component to hold data from the server
  - add a component did mount function to query your get route for data upon render
  - check that data was successfully added to state in react dev tools
  - create a component you can pass the array of data to (e.g., <People />)
  - create a component that renders one element of that array (e.g., <Person />)
  - map each item from the array to render in the single element component
  - test by refreshing, looking at react dev tools and adding more items to the db via postman or curl post requests
  - If you're components are rendering you have successfully connect the whole app together. Now you can add more functionality!


## Conclusion ##
  I hope this repo/outline of my process was useful to you. This is just how I would go about making a fullstack app (a specific kind of fullstack app) from scratch. I do not claim this is the right way or the best way but simply the way that makes the most sense to me. After completing the above steps to add more functionality I would use the same process. The process for adding new features and functionality essentially looks like this:
  - modify the database if necessary
  - add the route on my server
  - test with postman or curl
  - add the request functionality from my client
  - test in the browser
  - add it to the ui

