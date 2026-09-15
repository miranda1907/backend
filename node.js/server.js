// Starter file — add your code here
const fs = require("fs");
const fsPromises = require('fs/promises')
const crypto = require("crypto");
const os = require("os");
const path = require("path");
const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
console.log(fs);

async function main() {
    const data = await fsPromises.readFile('./assets/poem.txt', {
        encoding : 'utf8'     
    });

    console.log(data);
} 

main();

fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\nSecond line");
console.log(fs.existsSync("assets/output.txt"));
console.log(fs.readdirSync("assets"));
const buf = Buffer.from("Hello, Node!"); 
console.log(buf);
console.log(buf.toString("hex")); 
console.log(buf.toString("base64"));

const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);

console.log(Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8"));

console.log(crypto.createHash('sha256').update("freeCodeCamp!").digest("hex"));

console.log(crypto.randomBytes(16).toString("hex"));

console.log(crypto.randomUUID());

console.log(os.platform());

console.log(os.arch());

console.log(os.hostname());

console.log(os.totalmem());

console.log(os.freemem());

console.log(os.uptime());

console.log(os.cpus().length)

const filePath = path.join(__dirname, "assets", "poem.txt");
console.log(filePath);

console.log(path.basename(filePath));

console.log(path.dirname(filePath));

console.log(path.extname(filePath));

console.log(path.join('assets', '..', 'server.js'));

console.log(path.resolve('assets', '..', 'server.js'));

console.log(path.parse(filePath));

console.log(process.version);

console.log(process.platform);

console.log(process.env.NODE_ENV);

console.log(process.argv);

console.log(process.stdout.write('Hello from stdout\n'));

console.log(process.stderr.write('Hello from stderr\n'));

readable.on(
    "data", (chunk) => {
        console.log(chunk);
    }
);

readable.on(
    "end", () => {
        console.log("Done reading");
    }
);

readable.pipe(writable);
