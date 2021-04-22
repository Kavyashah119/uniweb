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

app.post('/Clogin',(req,res)=>{
    const CUsername = req.body.CUsername;
    const CPassword = req.body.CPassword;

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
    pool.query(`select CUsername from companyauth where CUsername= ?`,[CUsername],(err,result)=>{
        if(err){
            return "Something Went Wrong!!"
        }else{
            if(Object.keys(result).length ===0){
                console.log("User Not Found!! , Please SignUp to login!! or Administrator has not approved your company");
            }else{
                pool.query(`select CUsername,CPassword from companyauth where CUsername= ? AND CPassword = ?`,[CUsername,CPassword],(error,resultI)=>{
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

app.post('/companyRegister',(req,res)=>{

    const name = req.body.name;
    const Cusername = req.body.Cusername;
    const CPassword = req.body.CPassword;
    const ownername = req.body.ownername;
    const ceoname = req.body.ceoname;
    const yearofestablish = req.body.yearofestablish;
    const address = req.body.address;
    const noofbranch = req.body.noofbranch;
    const Clocation = req.body.Clocation;
    const noofemployee = req.body.noofemployee;
    const Ctools = req.body.Ctools;

    pool.query(`INSERT INTO uniweb.companybasicdetail (Cname,CUsername,CPassword,COwenerName,CCEOName,CAddress,CEastablishYear,CNoBranch,CLocation,CNoEmplyoee,CTools) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,[name,Cusername,CPassword,ownername,ceoname,address,yearofestablish,noofbranch,Clocation,noofemployee,Ctools],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            pool.query(`INSERT INTO uniweb.companyrequest (Cname,CUsername,CPassword,COwenerName,CCEOName,CAddress,CEastablishYear,CNoBranch,CLocation,CNoEmplyoee,CTools) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,[name,Cusername,CPassword,ownername,ceoname,address,yearofestablish,noofbranch,Clocation,noofemployee,Ctools],(error,resultS)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log("Company data entered in request table")
                }
            })
            console.log("Success..!!")
            res.send("result successful")
        }
    })
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
    const  password = req.body.password;
    const  PLocation = req.body.PLocation;

    pool.query(`INSERT INTO uniweb.studentinfofinal ( ID, Branch, FirstName, MiddleName, LastName, CharusatEmail, MobileNumber, CGPA, SGPA1, SGPA2, SGPA3, SGPA4, SGPA5, SGPA6, SGPA7, SGPA8, Domain, PreferredLocation, PersonalEmail, DOB, Address, Pincode, Achievements, SPassword) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,[ID,branch,firstName,middleName,lastName,charusatEmail,MobileNumber,CGPA,SGPA1,SGPA2,SGPA3,SGPA4,SGPA5,SGPA6,SGPA7,SGPA8,domain,PLocation,personalEmail,dob,address,pincode,achievements,password], (err,result)=>{
        if(err){
            console.log(err);
        }else{
            pool.query(`INSERT INTO uniweb.userauth (UserID,UserPassword) VALUES (?,?)`,[ID,password],(error,resultS)=>{
                if(error){
                    console.log(error)
                }else{
                    // res.send("Data Inserted in userauth also")
                    console.log("Data inserted in userauth also")
                }
            })
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
    const  password = req.body.password;
    const  PLocation = req.body.PLocation;

    pool.query(`UPDATE studentinfofinal set Branch=? , FirstName=?, MiddleName=?, LastName=?, CharusatEmail=? , MobileNumber=?, CGPA=?, SGPA1=?, SGPA2=?, SGPA3=?, SGPA4=?, SGPA5=?, SGPA6=?, SGPA7=?,SGPA8=? ,Domain=?, PreferredLocation=? ,PersonalEmail=?, DOB=?, Address=?, Pincode=?, Achievements=?, SPassword=? where ID=?  `,[branch,firstName,middleName,lastName,charusatEmail,MobileNumber,CGPA,SGPA1,SGPA2,SGPA3,SGPA4,SGPA5,SGPA6,SGPA7,SGPA8,domain,PLocation,personalEmail,dob,address,pincode,achievements,password,ID], (err,result)=>{
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

//Approved Company Data
app.get('/approvedCompany',(req,res)=>{
    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");

            pool.query(`select * from approvedcompanybasic`,(err,rows,fields)=>{
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

//Approved Company Data for a specific student
app.get('/ApprovedOpeningStudent/:ID',(req,res)=>{
    // req.params.ID
    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");

            pool.query(`select * from approvedcompanyopening d where not exists (select * from uniweb.applications t where d.CName=t.CompanyName and d.CJobProfile=t.CompanyJD and t.StudentID = ?)`,[req.params.ID],(err,rows,fields)=>{
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

//Insert Applicant's data into Application Table
app.post('/StudentApply/:CName',(req,res)=>{
    const CJobProfile = req.body.CJobProfile
    const ID = req.body.ID

    pool.query(`insert into applications (StudentID,CompanyName,CompanyJD) values (?,?,?)`,[ID,req.params.CName,CJobProfile],(error,result)=>{
        if(error){
            console.log("Error in inserting into application table")
        }else{
            console.log("Application Submitted")
            res.send("Application Submited")
        }
    })
})


//Company Selecting Student for the position
app.post('/StudentSelect/:CName',(req,res)=>{
    const CJobProfile = req.body.CJobProfile
    const ID = req.body.ID
    var status = "Selected"
    console.log(ID)

    pool.query(`update applications set status=? where StudentID=? and CompanyName=? and CompanyJD=?`,[status,ID,req.params.CName,CJobProfile],(error,result)=>{
        if(error){
            console.log("Error in inserting into application table")
        }else{
            console.log("Student wfnwe")
            res.send("Student Selected")
        }
    })
})

//showing students companies in where they have applied
app.get('/StudentAppliedCompanies/:ID',(req,res)=>{
    // req.params.ID
    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");
            var status="Selected"
            pool.query(`select CompanyName,CompanyJD,status from applications where StudentID=?`,[req.params.ID],(err,rows,fields)=>{
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

//Placed Students for Admin
app.get('/StudentAppliedCompanies',(req,res)=>{
    // req.params.ID
    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");
            var status="Selected"
            pool.query(`select * from applications where status=?`,[status],(err,rows,fields)=>{
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

// company request spesific basic data
app.post('/companydata/:CUsername',(req,res)=>{

    const username = req.body.CUsername
    const password = req.body.CPassword

    let sql = `insert into approvedcompanybasic select * from companyrequest where CUsername = ?`;
    let query  = pool.query(sql,[req.params.CUsername],(err,results) =>{
        if(err){
            throw err;
        } else{
            pool.query(`INSERT INTO uniweb.companyauth (CUsername,CPassword) VALUES (?,?)`,[username,password],(error,resultS)=>{
                if(error){
                    console.log(error)
                }else{
                    pool.query(`delete from uniweb.companyrequest where CUsername=?`,[username],(e,r)=>{
                        if(e){
                            console.log(e)
                        }else{
                            // res.send("Data Inserted in userauth also")
                            console.log("Data deleted from companyrequest also")
                        }
                    })
                    res.send("Data Inserted in userauth also")
                    console.log("Data inserted in companyauth also")
                }
            })
            console.log("results");
            // res.send("results transfered")
        }
        
    });
});

//Approve Opening Data
app.post('/ApprovedOpeningRequest/:CName',(req,res)=>{

   const CJobProfile = req.body.CJobProfile

    let sql = `insert into approvedcompanyopening select * from companyopeninginfo where CName = ? and CJobProfile =?`;
    let query  = pool.query(sql,[req.params.CName,CJobProfile],(err,results) =>{
        if(err){
            throw err;
        } else{
            pool.query(`delete from uniweb.companyopeninginfo where CName=? and CJobProfile =?`,[req.params.CName,CJobProfile],(e,r)=>{
                if(e){
                    console.log(e)
                }else{
                    // res.send("Data Inserted in userauth also")
                    console.log("Data deleted from companyopeninginfo also")
                }
            })
            console.log("Success in approved opening")
           res.send("Success in approve opening")
        }
        
    });
});

//get approved opening data
app.get('/ApprovedOpening',(req,res)=>{
    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");

            pool.query(`select * from approvedcompanyopening`,(err,rows,fields)=>{
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

//Opening for specific company
app.get('/ApprovedOpening/:CName',(req,res)=>{
   const CName = req.params.CName

    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");

            pool.query(`select * from approvedcompanyopening where CName=?`,[CName],(err,rows,fields)=>{
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

//Selecting applied students into specific company job profile
app.get('/StudentsApplication/:CName/:CJobProfile',(req,res)=>{
    const CName = req.params.CName
    const CJobProfile = req.params.CJobProfile
    console.log(CName)
    console.log(CJobProfile)
 
     pool.getConnection(function(error,tempCont){
         if(!!error){
             tempCont.release();
             console.log("Error");
         }else{
             console.log("Connected..!!");
 
             pool.query(`select * from studentinfofinal d where exists(select * from uniweb.applications t where d.ID=t.StudentID and t.CompanyName=? and t.CompanyJD = ? and t.status="Pending")`,[CName,CJobProfile],(err,rows,fields)=>{
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



app.post('/CompanyOpeningData',(req,res)=>{

    const  name = req.body.name;
    const  jobProfile = req.body.jobProfile;
    const  noOfOpenings = req.body.noOfOpenings;
    const  skills = req.body.skills;
    const  experience = req.body.experience;
    const  DOE = req.body.DOE;
    const  dueDate = req.body.dueDate;
    pool.query(`insert into uniweb.companyopeninginfo (CName,CJobProfile,noOfOpenings,CSkillsRequired,CExperienceRequired,CDateExams,CDueDate) values (?,?,?,?,?,?,?)`,[name,jobProfile,noOfOpenings,skills,experience,DOE,dueDate],(err,result)=>{
        if(err){
            console.log("Error occured during inserting opening data")
        }else{
            console.log("Success insert data into company opening")
            res.send("Hello there")
        }
    })
})

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

app.get('/companyData',(req,res)=>{
    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");

            pool.query(`select * from companyrequest`,(err,rows,fields)=>{
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

//Get Opening requests
app.get('/OpeningRequest',(req,res)=>{
    pool.getConnection(function(error,tempCont){
        if(!!error){
            tempCont.release();
            console.log("Error");
        }else{
            console.log("Connected..!!");

            pool.query(`select * from companyopeninginfo`,(err,rows,fields)=>{
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