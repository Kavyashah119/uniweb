import React, {Component} from 'react';
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css"
import ExportToExcel from './ExportToExcel';
import Axios from 'axios'
import Cryptr from 'crypto-js'
// import pagenotfoundAuthorized from '../../pagenotfoundAuthorized';
// import 'react-table/dist/react-table.development.css'
// import ExportToExcel from './ExportToExcel'
// const Key = new Cryptr("SuperSecret")

// const cryptr = new Cryptr("SuperSectet")

// let ID = sessionStorage.getItem('ID')
// console.log("ID")
// let IsStudent = sessionStorage.getItem('IsStudent')
// let IsCompany = sessionStorage.getItem('IsCompany')
// let IsLogin = sessionStorage.getItem('IsLogin')
// // console.log(ID)
// const demovariable = cryptr.encrypt("Hello World")
// const demodecr = cryptr.decrypt(demovariable)

let ID,IsStudent,IsLogin,IsCompany;

let Authorized=false,notAuthorized=false,doLogin=false;


// const demoID = cryptr.decrypt(ID)
// console.log(ID)
// IsStudent=cryptr.decrypt(IsStudent)
// IsCompany=cryptr.decrypt(IsCompany)
// IsLogin=cryptr.decrypt(IsLogin)

// ID=ID.toString();
// IsStudent=IsStudent.toString();
// IsLogin=IsLogin.toString();
class ApprovedOpeningStudent extends Component {
    constructor(props) {
        super(props);        

        ID = sessionStorage.getItem('ID')
        console.log(ID)
        IsStudent = sessionStorage.getItem('IsStudent')
        IsCompany = sessionStorage.getItem('IsCompany')
        IsLogin = sessionStorage.getItem('IsLogin')
        // ID = cryptr.decrypt(ID,"SuperSecret")

        if(ID!=null){
            var bytes = Cryptr.AES.decrypt(ID, 'my-secret-key@123');
            ID= JSON.parse(bytes.toString(Cryptr.enc.Utf8));
            console.log(ID)
        }
       
        // console.log(ID)

        this.state = {
            posts: []
        }
        // console.log(+"   Testing")
        
    }

    componentDidMount() {
    //    console.log("Hello Approved Company")
    //    console.log(this.props.userID+"  Testing"+this.props.id)
    // console.log(IsLogin)
        if(IsLogin!=null && IsLogin=='1'){
           if(IsStudent!=null && IsStudent=='1'){
                if(ID!=null && ID==this.props.id){
                    Authorized=true;
                    const url = "http://localhost:3001/ApprovedOpeningStudent"+`/${this.props.id}`;
                    fetch(url, {
                        method: "GET",
                    }).then(response => response.json() ).then(posts => {
                         this.setState({
                         posts: posts
                         })
                     })
                }else{
                    notAuthorized=true;
                   console.log("Not Authorized")
                }
           }else{
               notAuthorized=true
            console.log("Not Authorized")
           }
        }else{
            doLogin=true;
            console.log("Do Login First")
            console.log(doLogin+" "+notAuthorized+" "+Authorized)
        }
        // const url = "http://localhost:3001/ApprovedOpeningStudent"+`/${this.props.id}`;
        // fetch(url, {
        //     method: "GET",
        // }).then(response => response.json() ).then(posts => {
        //     this.setState({
        //         posts: posts
        //     })
        // })
    }

    // deletePoste(CName,CJobProfile){

    //     const index = this.state.posts.findIndex(post => {
    //       return (post.CName === CName)&&(post.CJobProfile===CJobProfile)
    //     });
    //     this.state.posts.splice(index, 1);
    //     this.setState({posts: this.state.posts})
    
    //   }


    render(){

        if((ID!=null && ID!=this.props.id)){
            console.log("Inside not Authorized part")
            return(
                // <div>
                //     <h1>You are not Authorized tho access this information</h1>
                // </div>
                window.location.href="/pagenotfoundAuthorization"
                
            )
        }else if(IsLogin==null){
            console.log("Inside do Login part")
            return(
                // <div>
                //     <h1>You haven't logged in</h1>
                //     <br/>
                //     <h1>Login First</h1>
                // </div>
                window.location.href="/pagenotfoundLogin"
            )
        }else{
            console.log("Inside else part")
            console.log(this.doLogin+" "+notAuthorized +"  "+doLogin)
            const columns = [
                {
                    Header: "Application",
                    Cell: props=>{
                        return(
                            <button className="" onClick={()=>{
                                console.log(props.original.CName)
                                console.log("hey there..")
                                if(alert(`Your Application for ${props.original.CName} for ${props.original.CJobProfile} has been submitted.`)|true){
                                    // this.deletePoste(props.original.CUsername,props.original.CJobProfile);
                                    Axios.post(`http://localhost:3001/StudentApply/${props.original.CName}`,{
                                        CJobProfile : props.original.CJobProfile,
                                        ID : this.props.id
                                    }).then((response)=>{
                                    console.log("Data Inserted into Application")
                                    })
                                }
                                // this.deletePoste(props.original.CUsername);
    
                                // Axios.post(`http://localhost:3001/companydata/${props.original.CUsername}`,{
                                //     CUsername : props.original.CUsername,
                                //     CPassword : props.original.CPassword
                                // }).then((response)=>{
                                //     console.log("Data Updated")
                                // })
    
                            }} >Apply</button>
                            // <button className="">Disapprove</button>
                        )
                    }
                },
                {
                    Header: "Name",
                    accessor : "CName"
                },
                {
                    Header: "Job Profile",
                    accessor : "CJobProfile"
                },
                {
                    Header: "No of Openings",
                    accessor : "CJobProfile"
                },
                {
                    Header: "Skills Required",
                    accessor : "CSkillsRequired"
                },
                {
                    Header: "Experience Required",
                    accessor : "CExperienceRequired",
                    width : 200
                },
                {
                    Header: "Date of Exam",
                    accessor : "CDateExams"
                },
                {
                    Header: "Due date of application",
                    accessor : "CDueDate"
                }
            ]
            return(
                <ReactTable
                    columns={columns}
                    data={this.state.posts} 
                    showPaginationTop
                    showPaginationBottom={false}
                    filterable
                    sortable={true}
                    noDataText="No pending requests!!"
                >
    
                {/* {(state,filteredData,instance) =>{
                    this.ReactTable  = state.pageRows.map(post=> {return post._original});
                    return(
                        <div>
                            {filteredData()}
                            <ExportToExcel posts={this.ReactTable}/>
                        </div>
                    )
                }} */}
    
    
                </ReactTable>
            );
        }
        

        // const columns = [
        //     {
        //         Header: "Application",
        //         Cell: props=>{
        //             return(
        //                 <button className="" onClick={()=>{
        //                     console.log(props.original.CName)
        //                     console.log("hey there..")
        //                     if(alert(`Your Application for ${props.original.CName} for ${props.original.CJobProfile} has been submitted.`)|true){
        //                         // this.deletePoste(props.original.CUsername,props.original.CJobProfile);
        //                         Axios.post(`http://localhost:3001/StudentApply/${props.original.CName}`,{
        //                             CJobProfile : props.original.CJobProfile,
        //                             ID : this.props.id
        //                         }).then((response)=>{
        //                         console.log("Data Inserted into Application")
        //                         })
        //                     }
        //                     // this.deletePoste(props.original.CUsername);

        //                     // Axios.post(`http://localhost:3001/companydata/${props.original.CUsername}`,{
        //                     //     CUsername : props.original.CUsername,
        //                     //     CPassword : props.original.CPassword
        //                     // }).then((response)=>{
        //                     //     console.log("Data Updated")
        //                     // })

        //                 }} >Apply</button>
        //                 // <button className="">Disapprove</button>
        //             )
        //         }
        //     },
        //     {
        //         Header: "Name",
        //         accessor : "CName"
        //     },
        //     {
        //         Header: "Job Profile",
        //         accessor : "CJobProfile"
        //     },
        //     {
        //         Header: "No of Openings",
        //         accessor : "CJobProfile"
        //     },
        //     {
        //         Header: "Skills Required",
        //         accessor : "CSkillsRequired"
        //     },
        //     {
        //         Header: "Experience Required",
        //         accessor : "CExperienceRequired",
        //         width : 200
        //     },
        //     {
        //         Header: "Date of Exam",
        //         accessor : "CDateExams"
        //     },
        //     {
        //         Header: "Due date of application",
        //         accessor : "CDueDate"
        //     }
        // ]

        // return(
        //     <ReactTable
        //         columns={columns}
        //         data={this.state.posts} 
        //         showPaginationTop
        //         showPaginationBottom={false}
        //         filterable
        //         sortable={true}
        //         noDataText="No pending requests!!"
        //     >

        //     {/* {(state,filteredData,instance) =>{
        //         this.ReactTable  = state.pageRows.map(post=> {return post._original});
        //         return(
        //             <div>
        //                 {filteredData()}
        //                 <ExportToExcel posts={this.ReactTable}/>
        //             </div>
        //         )
        //     }} */}


        //     </ReactTable>
        // );
    }

}

export default ApprovedOpeningStudent;