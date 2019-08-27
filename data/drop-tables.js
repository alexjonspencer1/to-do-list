const client = require('../lib/client');

client.connect()
    .then(() => {
        return client.query(`
            DROP TABLE IF EXISTS todos;
        `);
    })
    .then(
        () => console.log('drop tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });