const crypto = require('crypto');
const EventEmitter = require('events')

const hash = new EventEmitter();

const passwords = ['visital123', 'corponizer123', 'codex123']

hash.on('hashStart', (password) => {
    console.log(`Started event: ${password}`)
});

hash.on('hashEnd', (password) => {
    console.log(`Ending event: ${password}`)
})

function hashPassword(Password) {
    return new Promise((resolve, reject) => {
        hash.emit('hashStart', Password);

        crypto.scrypt('password', 'salt', 64, (err, derivedKey) => {
            if (err) throw err;

            hash.emit('hashEnd', Password);
            resolve(derivedKey.toString('hex'));
        });
    });
}

async function processPasswords() {
    for (let pwd of passwords) {
        const hash = await hashPassword(pwd);
        console.log(` Hashed Password for ${pwd}: ${hash}`);

        setTimeout(() => {
            console.log(` Simulated non-blocking log for ${pwd}`);
        }, 5000);
    }
}

processPasswords();