console.log('__________main.js___________')
console.log(__dirname)
console.log(__filename)
console.log(process.cwd())

const {foo} = require('./helpers/helper')

foo()

const readLine = require('node:readline')
const foo1 = async () => {
    const rlInstance = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rlInstance.question('What is your name?', (name)=>{
        console.log(`Hello ${name}`);
        rlInstance.close()
    })
}

void foo1();