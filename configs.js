// creating config object for all variable

//Get dotenv
require("dotenv").config();

const config = {  
  env: process.env.NODE_ENV,
  db: {
    remote: process.env.DB_REMOTE, 
  },
  PORT: process.env.PORT
  
};

module.exports = config;