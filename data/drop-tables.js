const client = require('../lib/client');

client.query(`
        DROP TABLE IF EXISTS todos;
        DROP TABLE IF EXISTS users;
    `)
    .then(
        () => console.log('drop tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });