# Basic-node-mysql

## Begin

- simple example node app with connection mysql.
- no frameworks

- use lib mysql2 (npm i mysql2) 

- Manipulation data 'CRUD' in database

- Print json result in console

## Script SQL
```sql
create database demoNode;

create table demoNode.clients(
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(100) NOT NULL,
   description VARCHAR(40) NOT NULL,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY ( id )
);
```

## What Run
- run thi project

```bash
node index.js
```