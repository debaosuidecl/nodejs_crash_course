// NODEJS AND SQL DATABASES
// install mysql

const mysql = require("mysql");

// create a connection to the database;

const connection = mysql.createConnection({
    host: "SG-nodejs-tutorial-course-9914-mysql-master.servers.mongodirector.com",
    user: "sgroot",
    password: "DDX5a@Dd4yudQniZ",
    database: "my_pizzeria",
    port: 3306,
})

connection.connect(err=>{
    if(err) throw err;
    console.log("Connected to MySQL")

    //CRUD

    // CREATE A TABLE
    // const createTableQuery = `
    // CREATE TABLE app_users (
    //     id INT AUTO_INCREMENT PRIMARY KEY,
    //     name VARCHAR(255) NOT NULL,
    //     age INT NOT NULL,
    //     email VARCHAR(255) NOT NULL
    // )
    // `;

    // connection.query(createTableQuery, (err, result)=>{
    //     if(err) throw err;
    //     console.log(result, "table created");
    // })

    // CREATE 
    // const createUserQuery = `
    //     INSERT INTO app_users (name, age, email)
    //     VALUES ('Jacob', 25, 'jacob25@gmail.com')
    // `;

    // connection.query(createUserQuery, (err, result)=>{
    //     if(err) throw err;

    //     console.log(result, "user created")
    // })

    // READ

    const readUsersQuery = `
        SELECT * FROM app_users
    `

    connection.query(readUsersQuery, (err,result)=>{
        if(err) throw err;
        console.log(result, "users found")
    })


    // READ SPECIFIC ITEM
    // const name = "Jacob";
    // const readspecifyuserquery = `
    //     SELECT * FROM app_users WHERE name = ?
    // `

    // connection.query(readspecifyuserquery, [name], (err,result)=>{
    //     if(err) throw err;
    //     console.log(result, "results")
    // })


    // UPDATE DATA

    // const updateuserquery = `
    //     UPDATE app_users
    //     SET age = 26
    //     WHERE name = 'Jacob'
    // `
    // connection.query(updateuserquery, (err, result)=>{
    //     if(err) throw err;
    //     console.log(result, "results");
    // })

    // DELETE DATA

    // const deleteUserQuery = `
    // DELETE FROM app_users
    // WHERE name =  'Jacob'
    // `


    // connection.query(deleteUserQuery, (err, result)=>{
    //     if(err) throw err;
    //     console.log(result, "results of delete operation")
    // })


})