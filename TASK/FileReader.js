const fs = require("fs")
const EventEmitter = require("events");
const readline = require("readline");



const emitter = new EventEmitter();

emitter.on('start',()=>{

    console.log("File Started Reading");
})

emitter.on('line',()=>{
    console.log("Just read a line");
})

emitter.on('word',(count)=>{
    console.log(`Complete Words Count:${count}`);
})

function countWords(line) {
    return line.trim().split(/\s+/).filter(Boolean).length;
}

const fileRead = async (file)=>{
    const fileSt = fs.createReadStream(file);

    const read = readline.createInterface({
        input:fileSt,
        crlfDelay:Infinity,
    })

    emitter.emit('start');
    let count = 0;

    for await (const li of read) {
        emitter.emit('line');

        await new Promise ((resolve)=>{
            setImmediate(()=>{
                const words = countWords(li);
                count = count+words;
                resolve();
            });
        });
    }
emitter.emit('word',count)
}

fileRead('file.txt');