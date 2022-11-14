// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";

// use hook to create database
const myContactsDB = openDatabase({name: 'MyContacts.db'});
const contactsTableName = 'contacts';
const groupsTableName = 'groups';
const groupContactsTableName = 'group_contacts';

module.exports = {
    // declare function that will create the contacts table
    createContactsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${contactsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    fullname TEXT,
                    phone TEXT,
                    email TEXT
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Contacts table created successfully');
                },
                error => {
                    console.log('Error creating contacts table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row into the contacts table
    addContact: async function (fullname, phone, email) {
        // declare a transaction that will execute an SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${contactsTableName} (fullname, phone, email) VALUES ("${fullname}", "${phone}", "${email}")`,
                // arguments passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(fullname + " added successfully");
                },
                error => {
                    console.log('Error adding contact ' + error.message);
                },
            );
        });
    },

    // declare function that will create the groups table
    createGroupsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${groupsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    description TEXT
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Groups table created successfully');
                },
                error => {
                    console.log('Error creating groups table ' + error.message);
                },
            );
        });
    },

    // declare function that will insert a row into the groups table
    addGroup: async function (name, description) {
        // declare a transaction that will execute an SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${groupsTableName} (name, description) VALUES ("${name}", "${description}")`,
                // arguments passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log(name + " added successfully");
                },
                error => {
                    console.log('Error adding group ' + error.message);
                },
            );
        });
    },

    createGroupContactsTable: async function () {
        // declare a transaction that will execute a SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `CREATE TABLE IF NOT EXISTS ${groupContactsTableName}(
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    contact_id INTEGER,
                    group_id INTEGER
                );`,
                // arguments needed when using an SQL prepared statement
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log('Group contacts table created successfully');
                },
                error => {
                    console.log('Error creating group contacts table ' + error.message);
                },
            );
        });
    },
    // declare function that will insert a row into the groups table
    addGroupContacts: async function (contact_id, group_id) {
        // declare a transaction that will execute an SQL statement
        (await myContactsDB).transaction(txn => {
            // execute the SQL
            txn.executeSql(
                `INSERT INTO ${groupContactsTableName} contact_id, group_id) VALUES (${contact_id}, ${group_id})`,
                // arguments passed when using SQL prepared statements
                [],
                // callback function to handle results of SQL query
                () => {
                    console.log("Group contact added successfully");
                },
                error => {
                    console.log('Error adding group contact ' + error.message);
                },
            );
        });
    },
};