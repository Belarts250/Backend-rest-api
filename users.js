import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const users = [
    {
        firstname: "John",
        lastname: "Doe",
        age : 25
    },
    {
        firstname: "Jane",
        lastname: "Doe",
        age : 25
    }
] 

const router = express.Router();
//all routes in here are starting with /users
 router.get('/', (req,res) => {
    console.log(users);
    res.send(users);
 }); 

 router.post('/',(req,res) => {
    
     const user = req.body;
     users.push(user);  
     res.send(`user with the name ${user.firstname} added to the database!`)
 });
 export default router; 