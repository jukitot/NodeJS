const http = require('node:http');
const path = require('node:path')
const readline = require("node:readline/promises");
const fs = require('node:fs/promises')


const foo = async () => {
    //http module
    // const server = http.createServer((req, res) => {
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const url = req.url;
    //     if (url === '/about') {
    //         switch (req.method) {
    //             case  'GET':
    //                 return res.end(JSON.stringify({
    //                     data: 'About Page',
    //                 }));
    //             case 'POST' :
    //                 return res.end(JSON.stringify({
    //                     data: 'About Page',
    //                 }));
    //         }
    //
    //     }
    //     if (url === '/contact') {
    //         return res.end(JSON.stringify({
    //             data: 'Contact Page',
    //         }));
    //     }
    //     res.end(JSON.stringify({
    //         data: 'Hello World!',
    //     }));
    // });
    //
    // server.listen(8000);

    //path
    // const pathToHelper = path.join(__dirname, 'helpers', 'helper.js')
    // console.log(path.basename(pathToHelper));
    // console.log(path.dirname(pathToHelper));
    // console.log(path.extname(pathToHelper));
    // console.log(path.parse(pathToHelper));
    // console.log(path.normalize('D:/okten-study\\may-2024\\node-js\\NodeJS\\helpers\n'));
    // console.log(path.isAbsolute('D:\okten-study\may-2024\node-js\NodeJS\helpers'));

    //readline
    //
    // const rlInstance = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // })
    // const name = await rlInstance.question('What is your name?');
    // console.log(`Hello ${name}`)
    // const age = await rlInstance.question('What is your age?');
    // console.log(`You are ${age} years old`)
    // // rlInstance.close();
    // process.exit(1)

    //fs
    await fs.writeFile('test.txt', 'Hello World!')
    // await fs.writeFile('test.json', JSON.stringify({name: 'Anastasiia', age: 21}, null, 2))
    // await fs.mkdir('sdf/sdf')
    const data = await fs.readFile(path.join(process.cwd(), 'test.txt'), 'utf-8')
    console.log(data);
    // const data2 = await fs.readFile(path.join(process.cwd(), 'test.json'), 'utf-8')
    // console.log(data2);
    //
    // await fs.appendFile('test.txt', '\nhello2')
    // await fs.rename('test.json', 'helpers/test2.json')
    //
    // await fs.copyFile('test.txt', 'test2.txt')

    await fs.mkdir(path.join(process.cwd(), 'asd'))
}
void foo();