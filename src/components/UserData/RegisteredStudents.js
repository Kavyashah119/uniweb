import React, {
    Component
} from 'react';
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css"
import ExportToExcel from './ExportToExcel';
// import 'react-table/dist/react-table.development.css'
// import ExportToExcel from './ExportToExcel'




class userdata extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3001/studentsData";
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(posts => {
            this.setState({
                posts: posts
            })
        })
    }

    render(){
        
        const columns = [
            {
                Header: "Student ID",
                accessor : "ID"
            },
            {
                Header: "Password",
                accessor : "SPassword"
            },
            {
                Header: "Branch",
                accessor : "Branch"
            },
            {
                Header: "FirstName",
                accessor : "FirstName"
            },
            {
                Header: "MiddleName",
                accessor : "MiddleName"
            },
            {
                Header: "LastName",
                accessor : "LastName"
            },
            {
                Header: "Charusat Email",
                accessor : "CharusatEmail",
                width : 200
            },
            {
                Header: "Contact Number",
                accessor : "MobileNumber"
            },
            {
                Header: "CGPA",
                accessor : "CGPA"
            },
            {
                Header: "SGPA1",
                accessor : "SGPA1"
            },
            {
                Header: "SGPA2",
                accessor : "SGPA2"
            },
            {
                Header: "SGPA3",
                accessor : "SGPA3"
            },
            {
                Header: "SGPA4",
                accessor : "SGPA4"
            },
            {
                Header: "SGPA5",
                accessor : "SGPA5"
            },
            {
                Header: "SGPA6",
                accessor : "SGPA6"
            },
            {
                Header: "SGPA7",
                accessor : "SGPA7"
            },
            {
                Header: "SGPA8",
                accessor : "SGPA8"
            },
            {
                Header: "Domain",
                accessor : "Domain"
            },
            {
                Header: "Preferred Location",
                accessor : "PrefferedLocation",
                width : 170
            },
            {
                Header: "Personal Email",
                accessor : "PersonalEmail",
                width : 250
            },
            {
                Header: "DOB",
                accessor : "DOB"
            },
            {
                Header: "Address",
                accessor : "Address"
            },
            {
                Header: "Pincode",
                accessor : "Pincode"
            },
            {
                Header: "Achievements",
                accessor : "Achievements"
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
                noDataText="No such Data Found..!!"
            >

            {(state,filteredData,instance) =>{
                this.ReactTable  = state.pageRows.map(post=> {return post._original});
                return(
                    <div>
                        {filteredData()}
                        <ExportToExcel posts={this.ReactTable}/>
                    </div>
                )
            }}


            </ReactTable>
        );
    }

}

export default userdata;