# 18-NoSQL

## This is a app using MongoDB to create Users who can make thoughts and react to other users thoughts, while being able to add and remove friends 

### Installation 
1. Express
2. Mongoose
3. Dayjs
4. Nodemon


### Folder/File Structure & Usage

I have a config folder 
with a connection file in it, this connection file sets up mongoose and makes our db in mongo.

Next I have a controller folder with thought and user controller.js files. These two files hold my CRUD's CREATE, READ UPDATE and DELETE all of these directly interact with my models.

Now to my models folder. This folder holds a index.js, a reaction.js, a thought.js and a user.js file. These files set rules to and create schema's for our databsae. They require the mongoose then the controller files require these models.

Then my Routes folder, the is one hold another api folder within it, but there is a index.js outside of the api folder linking our api (express) to our other api routes. The files inside the api foler are thoughtRoutes.js userRoutes.js and a index.js. This index sets the routes to router to be used, then the other files set the CRUD params and routes 

To make everything go full circle is the server.js file. This sets up our port and middleware making everthing interact with eachother.


1. [My repo Link](https://github.com/bmallar/NoSQL-SoicalNetwork)
2. [My Video](https://drive.google.com/file/d/17026bXLTgbhoTFT18LG7CLRG9cO054y8/view)