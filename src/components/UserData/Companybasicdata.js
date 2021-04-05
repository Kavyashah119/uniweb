import React, {
    Component
} from 'react';
import ReactTable from 'react-table-6'
import "react-table-6/react-table.css"
import ExportToExcel from './ExportToExcel';
// import 'react-table/dist/react-table.development.css'
// import ExportToExcel from './ExportToExcel'




class Companybasicdata extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        const url = "http://localhost:3001/companyData";
        fetch(url, {
            method: "GET"
        }).then(response => response.json() ).then(posts => {
            this.setState({
                posts: posts
            })
        })
    }


    render(){

        
        const columns = [
            {
                Header: "Permission",
                Cell: props=>{
                    return(
                        <button className="">Approve</button>
                        // <button className="">Disapprove</button>
                    )
                }
            },
            {
                Header: "Name",
                accessor : "Cname"
            },
            {
                Header: "Username",
                accessor : "CUsername"
            },
            {
                Header: "Password",
                accessor : "CPassword"
            },
            {
                Header: "Owner",
                accessor : "COwenerName"
            },
            {
                Header: "CEO",
                accessor : "CCEOName",
                width : 200
            },
            {
                Header: "Address",
                accessor : "CAddress"
            },
            {
                Header: "Establishment Year",
                accessor : "CEastablishYear"
            },
            {
                Header: "No of Branch",
                accessor : "CNoBranch"
            },
            {
                Header: "Locations",
                accessor : "CLocation"
            },
            {
                Header: "No of employess",
                accessor : "CNoEmplyoee"
            },
            {
                Header: "Tools and Technology",
                accessor : "CTools"
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

export default Companybasicdata;