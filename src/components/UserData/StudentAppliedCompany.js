import React, {
    Component
} from 'react';
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css"
import ExportToExcel from './ExportToExcel';
import Axios from 'axios'
// import 'react-table/dist/react-table.development.css'
// import ExportToExcel from './ExportToExcel'
import Cryptr from 'crypto-js'


let ID, IsLogin, IsStudent, IsCompany;

class StudentAppliedCompany extends Component {    

    constructor(props) {
        super(props);      
        
        ID = sessionStorage.getItem('ID');
        IsLogin = sessionStorage.getItem('IsLogin');
        IsStudent = sessionStorage.getItem('IsStudent');
        IsCompany = sessionStorage.getItem('IsCompany');

        if(ID!=null){
            var bytes = Cryptr.AES.decrypt(ID, 'my-secret-key@123');
            ID= JSON.parse(bytes.toString(Cryptr.enc.Utf8));
        }

        this.state = {
            posts: []
        }
    }

    componentDidMount() {

        if(IsLogin!=null && IsLogin==1){
            if(IsStudent!=null && IsStudent==1){
                if(ID !=null && ID==this.props.match.params.id){
                    console.log(this.props.match.params.id)
                    const url = `http://localhost:3001/StudentAppliedCompanies/${this.props.match.params.id}`;
                    fetch(url, {
                        method: "GET"
                    }).then(response => response.json() ).then(posts => {
                        this.setState({
                            posts: posts
                        })
                    })
                }else{
                    window.location.href="/pagenotfoundAuthorization"
                }
            }else{
                window.location.href="/pagenotfoundAuthorization"    
            }

        }else{
            window.location.href="/pagenotfoundLogin"
        }       
        

        
    }

    // deletePoste(CName,CJobProfile){

    //     const index = this.state.posts.findIndex(post => {
    //       return (post.CName === CName)&&(post.CJobProfile===CJobProfile)
    //     });
    //     this.state.posts.splice(index, 1);
    //     this.setState({posts: this.state.posts})
    
    //   }


    render(){

        
        const columns = [
            // {
            //     Header: "Permission",
            //     Cell: props=>{
            //         return(
            //             <button className="" onClick={()=>{
            //                 console.log(props.original.CName)
            //                 console.log("hey there..")
            //                 if(alert(`${props.original.CName} for ${props.original.CJobProfile} has been approved.`)|true){
            //                     this.deletePoste(props.original.CUsername,props.original.CJobProfile);
            //                     Axios.post(`http://localhost:3001/ApprovedOpeningRequest/${props.original.CName}`,{
            //                         CJobProfile : props.original.CJobProfile
            //                     }).then((response)=>{
            //                     console.log("Data Updated")
            //                     })
            //                 }
            //                 // this.deletePoste(props.original.CUsername);

            //                 // Axios.post(`http://localhost:3001/companydata/${props.original.CUsername}`,{
            //                 //     CUsername : props.original.CUsername,
            //                 //     CPassword : props.original.CPassword
            //                 // }).then((response)=>{
            //                 //     console.log("Data Updated")
            //                 // })

            //             }} >Approve</button>
            //             // <button className="">Disapprove</button>
            //         )
            //     }
            // },
            {
                Header: "Company Name",
                accessor : "CompanyName"
            },
            {
                Header: "Job Profile",
                accessor : "CompanyJD"
            },
            {
                Header: "Status",
                accessor : "status"
            }
        ]
        // const columns = [
        //     {
        //         Header : "Name",
        //         accrssor : "Name"
        //     },
        //     {
        //         Header : "Surname",
        //         accrssor : "surname"
        //     },
        // ]

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

}

export default StudentAppliedCompany;