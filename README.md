
# User Database App

The App is a database for all the users worldwide. They can Add their info along with their Country, State and City. But only an Admin can Edit their data.

## Features

- 'client' folder contains all the Front end files and 'server' folder contains all the server side files.
- Fully working REST APIs created with ExpressJS
- Used Mongoose as an adapter/driver between Server and MongoDB
- User Authentication performed with help of libraries like 'bcryptjs' and 'jsonwebtoken'
- For incoming Profile pictures - jpeg/png files, Multer (a JS Library) is used


## Installation

Clone the repository

```
git clone https://github.com/yadav-pratik/User-Database.git
```
Install all the server dependencies

Go to the server directory

```bash
  cd server
```

Install Dependencies
```
npm install
```
And Start up the server by

```
node index.js
```

Install MongoDB Community Edition and run it by executing
```
mongod
```

Install all the client dependencies

Go to the server directory

```bash
  cd client
```

Install Dependencies
```
npm install
```

And Start up the Front end by

```
npm start
```

Note : Add all the environment variables for best experience.