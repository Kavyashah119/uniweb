const { createPool } = require('mysql');
const express = require('express');
const cors= require('cors');
const {BrowserRouter,Route,Link} = require('react-router-dom');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(3001,()=>{
    console.log("Your server is running on port 3001");
})

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"Kirtan2303",
    database:"uniweb",
    connectionLimit:10
});

app.post('/login',(req,res)=>{
    const UserID = req.body.UserID;
    const UserPassword = req.body.UserPassword;

    // pool.query(`select * from userauth where UserID = ? AND UserPassword = ?`,[UserID,UserPassword],(err,result)=>{
    //     if(err){
    //         res.send({error : err})
    //     }else{
    //         if(result){
    //             res.send(result);
    //         }else{
    //             res.send({message : "Invalid Password!"})
    //         }
    //     }
    // })
    pool.query(`select UserID from userauth where UserID= ?`,[UserID],(err,result)=>{
        if(err){
            return "Something Went Wrong!!"
        }else{
            if(Object.keys(result).length ===0){
                console.log("User Not Found!! , Please SignUp to login!!");
            }else{
                pool.query(`select UserID,UserPassword from userauth where UserID= ? AND UserPassword = ?`,[UserID,UserPassword],(error,resultI)=>{
                    if (err){
                        return "Error"
                    }else{
                        if(Object.keys(resultI).length ===0 ){
                            console.log("Invalid Combination!!");
                        }else{
                            console.log(resultI)
                            res.send(resultI);
                            
                            // res.send(result)
                        }
                    }
                })
            }
        }
    })
    // pool.query(`select UserID,UserPassword from userauth where UserID= ? AND UserPassword = ?`,[UserID,UserPassword],(err,result)=>{
    //     if (err){
    //         return "Error"
    //     }else{
    //         if(Object.keys(result).length ===0 ){
    //             console.log("Invalid Combination!!");
    //         }else{
    //             console.log(result)
    //             res.send(result)
    //         }
    //     }
    // })
})

// pool.query(`select * from userauth`,(err,result,field)=>{
//     if(err){
//         return console.log("Error accured");
//     }
//     return console.log(result);
// })