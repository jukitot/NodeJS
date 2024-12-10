const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
let users = [
    {id: 1, name: 'Maksym', email: 'feden@gmail.com', password: 'qwe123'},
    {id: 2, name: 'Alina', email: 'alindosik@gmail.com', password: 'ert345'},
    {id: 3, name: 'Anna', email: 'ann43@gmail.com', password: 'ghj393'},
    {id: 4, name: 'Tamara', email: 'tomochka23@gmail.com', password: 'afs787'},
    {id: 5, name: 'Dima', email: 'taper@gmail.com', password: 'rtt443'},
    {id: 6, name: 'Rita', email: 'torpeda@gmail.com', password: 'vcx344'},
    {id: 7, name: 'Denis', email: 'denchik@gmail.com', password: 'sdf555'},
    {id: 8, name: 'Sergey', email: 'BigBoss@gmail.com', password: 'ccc322'},
    {id: 9, name: 'Angela', email: 'lala@gmail.com', password: 'cdd343'},
    {id: 10, name: 'Irina', email: 'irka7@gmail.com', password: 'kkk222'},
];

//get-list-users -> users(GET)

app.get('/users', (req, res) => {
    res.status(200).json(users)
})


//create-users -> users(POST)

app.post('/users', (req, res)=>{
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    users.push(newUser)
    res.status(201).json(newUser)
    }
)

//get-user-by-id -> users/:id(GET)

app.get('/users/:userId', (req,res)=>{
    // console.log('params: ', req.params)
    // console.log('query: ', req.query)
    // console.log('body: ', req.body)

    const user = users.find(user=>user.id === Number(req.params.userId))
    res.json(user)
})

//delete-user -> users/:id(DELETE)

app.delete('/users/:userId' ,(req, res)=>{
    users = users.filter(user=> user.id !== Number(req.params.userId));
    res.sendStatus(204).json({message: 'User was deleted'})
})
//update-user -> users/:id(PUT)


//CRUD
// Create -> POST
// Read -> GET
// Update -> PUT
// Delete -> DELETE


const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server has been started on port ${port} `)
})