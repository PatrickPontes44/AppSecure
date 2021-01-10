const Database = require('./connection');

const queryCreateDB = 'CREATE DATABASE app_db;';
const queryCreateTable = `CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(40) NOT NULL, 
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile_image VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);
CREATE TABLE IF NOT EXISTS reports (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(30) NOT NULL,
    creator_id INT NOT NULL,
    latitude VARCHAR(10) NOT NULL,
    longitude VARCHAR(10) NOT NULL,
    confirms INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);`

// Database.query(queryCreateDB, (err, result)=>{
//     if(err) throw err;
//     console.log("DB CREATED!");
// })

// Database.query(queryCreateTable, (err, result)=>{
//     if(err) throw err;
//     console.log("TABLES CREATED!");
// })