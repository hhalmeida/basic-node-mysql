async function connect(){

    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:admin@localhost:3308/demoNode");
    console.log("Top MySQL Start!");
    global.connection = connection;
    return connection;
}

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM clients;');
    return rows;
}
 
async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO clients(name, description) VALUES (?,?);';
    const values = [customer.name, customer.description];
    return await conn.query(sql, values);
}

async function updateCustomer(id, customer){
    const conn = await connect();
    const sql = 'UPDATE clients SET name=?, description=? WHERE id=?';
    const values = [customer.name, customer.description, id];
    return await conn.query(sql, values);
}

async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM clients where id=?;';
    return await conn.query(sql, [id]);
}

module.exports = {selectCustomers, insertCustomer, updateCustomer, deleteCustomer}
