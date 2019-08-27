const client = require('../lib/client');

client.connect()
    .then(() => {
        return client.query(`
            CREATE TABLE todos (
                id SERIAL PRIMARY KEY NOT NULL,
                name VARCHAR(256) NOT NULL UNIQUE,
                complete BOOLEAN NOT NULL DEFAULT FALSE
            );
        `);
    })
    .then(
        () => console.log('create tables complete'),
        err => console.log(err)
    )
    .then(() => {
        client.end();
    });