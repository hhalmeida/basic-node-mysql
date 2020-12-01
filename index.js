(async () => {
    const db = require("./config/database");
    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({name: "Maria", description: "PF"});
    console.log(result);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(5, {name: "Joh duo", description: "FAKE"});
    console.log(result2);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(3);
    console.log(result3);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();