import React, {
    Component
} from 'react';
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css"
import ExportToExcel from './ExportToExcel';
import Axios from 'axios'
// import 'react-table/dist/react-table.development.css'
// import ExportToExcel from './ExportToExcel'




class CompanyOpeningDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3001/ApprovedOpening"+`/${this.props.name}`;
        fetch(url, {
            method: "GET"
        }).then(response => response.json() ).then(posts => {
            this.setState({
                posts: posts
            })
        })
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
            {
                Header: "Permission",
                Cell: props=>{
                    return(
                        <button className="" onClick={()=>{
                            // console.log(props.original.CName)
                            // console.log("hey there..")
                            // if(alert(`${props.original.CName} for ${props.original.CJobProfile} has been approved.`)|true){
                            //     this.deletePoste(props.original.CUsername,props.original.CJobProfile);
                            //     Axios.post(`http://localhost:3001/ApprovedOpeningRequest/${props.original.CName}`,{
                            //         CJobProfile : props.original.CJobProfile
                            //     }).then((response)=>{
                            //     console.log("Data Updated")
                            //     })
                            // }
                            window.location.href="/companyportal"+`/${props.original.CName}/${props.original.CJobProfile}`
                            // this.deletePoste(props.original.CUsername);

                            // Axios.post(`http://localhost:3001/companydata/${props.original.CUsername}`,{
                            //     CUsername : props.original.CUsername,
                            //     CPassword : props.original.CPassword
                            // }).then((response)=>{
                            //     console.log("Data Updated")
                            // })

                        }} >Check Applications</button>
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

export default CompanyOpeningDetail;