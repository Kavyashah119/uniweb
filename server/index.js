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

app.post('/studentRegister',(req,res)=>{

    const  firstName = req.body.firstName;
    // console.log(firstName);
    const  middleName = req.body.middleName;
    const  lastName = req.body.lastName;
    const  dob = req.body.dob;
    const  personalEmail = req.body.personalEmail;
    const  MobileNumber = req.body.MobileNumber;
    const  address = req.body.address;
    const  pincode = req.body.pincode;

    const  ID = req.body.ID;
    const  branch = req.body.branch;
    const  charusatEmail = req.body.charusatEmail;
    const  SGPA1 = req.body.SGPA1;
    const  SGPA2 = req.body.SGPA2;
    const  SGPA3 = req.body.SGPA3;
    const  SGPA4 = req.body.SGPA4;
    const  SGPA5 = req.body.SGPA5;
    const  SGPA6 = req.body.SGPA6;
    const  SGPA7 = req.body.SGPA7;
    const  SGPA8 = req.body.SGPA8;
    const  CGPA = req.body.CGPA;
    const  domain = req.body.domain;
    const  achievements = req.body.achievements;
    const  PLocation = req.body.PLocation;

    pool.query(`INSERT INTO uniweb.studentinfofinal ( ID, Branch, FirstName, MiddleName, LastName, CharusatEmail, MobileNumber, CGPA, SGPA1, SGPA2, SGPA3, SGPA4, SGPA5, SGPA6, SGPA7, SGPA8, Domain, PreferredLocation, PersonalEmail, DOB, Address, Pincode, Achievements) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[ID,branch,firstName,middleName,lastName,charusatEmail,MobileNumber,CGPA,SGPA1,SGPA2,SGPA3,SGPA4,SGPA5,SGPA6,SGPA7,SGPA8,domain,PLocation,personalEmail,dob,address,pincode,achievements], (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Hello!!");
            console.log("Data Inserted!!");
        }
    })
})

app.post('/studentDataUpdate',(req,res)=>{

    const  firstName = req.body.firstName;
    // console.log(firstName);
    const  middleName = req.body.middleName;
    const  lastName = req.body.lastName;
    const  dob = req.body.dob;
    const  personalEmail = req.body.personalEmail;
    const  MobileNumber = req.body.MobileNumber;
    const  address = req.body.address;
    const  pincode = req.body.pincode;

    const  ID = req.body.ID;
    const  branch = req.body.branch;
    const  charusatEmail = req.body.charusatEmail;
    const  SGPA1 = req.body.SGPA1;
    const  SGPA2 = req.body.SGPA2;
    const  SGPA3 = req.body.SGPA3;
    const  SGPA4 = req.body.SGPA4;
    const  SGPA5 = req.body.SGPA5;
    const  SGPA6 = req.body.SGPA6;
    const  SGPA7 = req.body.SGPA7;
    const  SGPA8 = req.body.SGPA8;
    const  CGPA = req.body.CGPA;
    const  domain = req.body.domain;
    const  achievements = req.body.achievements;
    const  PLocation = req.body.PLocation;

    pool.query(`UPDATE studentinfofinal set Branch=? , FirstName=?, MiddleName=?, LastName=?, CharusatEmail=? , MobileNumber=?, CGPA=?, SGPA1=?, SGPA2=?, SGPA3=?, SGPA4=?, SGPA5=?, SGPA6=?, SGPA7=?,SGPA8=? ,Domain=?, PreferredLocation=? ,PersonalEmail=?, DOB=?, Address=?, Pincode=?, Achievements=? where ID=?  `,[branch,firstName,middleName,lastName,charusatEmail,MobileNumber,CGPA,SGPA1,SGPA2,SGPA3,SGPA4,SGPA5,SGPA6,SGPA7,SGPA8,domain,PLocation,personalEmail,dob,address,pincode,achievements,ID], (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Hello!!");
            console.log("Data Updated!!");
        }
    })
})

//UPDATE studentinfofinal set Branch=${branch} , FirstName=${firstName}, MiddleName=${middleName}, LastName=${lastName}, CharusatEmail=${charusatEmail} , MobileNumber=${MobileNumber}, CGPA=${CGPA}, SGPA1=${SGPA1}, SGPA2=${SGPA2}, SGPA3=${SGPA3}, SGPA4=${SGPA4}, SGPA5=${SGPA5}, SGPA6=${SGPA6}, SGPA7=${SGPA7},SGPA8=${SGPA8} ,Domain=${domain}, PreferredLocation=${PLocation} ,PersonalEmail=${personalEmail}, DOB=${dob}, Address=${address}, Pincode=${pincode}, Achievements=${achievements} where ID=${ID} 

//( ID, Branch, FirstName, MiddleName, LastName, CharusatEmail, MobileNumber, CGPA, SGPA1, SGPA2, SGPA3, SGPA4, SGPA5, SGPA6, SGPA7, SGPA8, Domain, PreferredLocation, PersonalEmail, DOB, Address, Pincode, Achievements) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) where ID=?`,[ID,branch,firstName,middleName,lastName,charusatEmail,MobileNumber,CGPA,SGPA1,SGPA2,SGPA3,SGPA4,SGPA5,SGPA6,SGPA7,SGPA8,domain,PLocation,personalEmail,dob,address,pincode,achievements],[ID],


app.get('/studentsData/:ID',(req,res)=>{
    let sql = `select * from studentinfofinal where ID = ?`;
    let query  = pool.query(sql,[req.params.ID],(err,results) =>{
        if(err) throw err;
        console.log(results);
        res.send(results)
    });
});

app.get('/studentsData',(req,res)=>{
    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");

            pool.query(`select * from studentinfofinal`,(err,rows,fields)=>{
                tempCont.release();
                if(err){
                    throw err;
                }else{
                    res.json(rows);
                }
            })
        }
    })
})

// pool.query(`select * from userauth`,(err,result,field)=>{
//     if(err){
//         return console.log("Error accured");
//     }
//     return console.log(result);
// })