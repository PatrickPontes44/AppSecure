const Database = require('./connection');

// os objetos user e report tem que ter os atributos com os mesmos nomes das colunas do banco de dados
const insertUser = (user) =>{
    const query = `INSERT INTO users SET ?`;
    
    Database.query(query, user, (err, result)=>{
        if(err) throw err;
        console.log("User CREATED!");
    })
}
const insertReport = (report) =>{
    const query = `INSERT INTO reports SET ?`;
    
    Database.query(query, report, (err, result)=>{
        if(err) throw err;
        console.log("Report CREATED!");
    })
}

// para inserir os dados no BD basta usar o require nessas funções
module.exports = [insertUser, insertReport];
