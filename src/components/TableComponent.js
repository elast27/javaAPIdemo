import axios from 'axios'
import React from 'react'
import {Table} from 'reactstrap'


const TableComponent = (props) => {
    function deleteButton(e){
        let id = parseInt(e.target.value);
        let formData = new FormData();
        formData.append("id", id);
        formData.append("fName", "");
        formData.append("lName", "");
        formData.append("skill", 0);
        formData.append("experience", 0);
        fetch('http://localhost:8083/', {
            method: "DELETE",
            body: formData
        }).then(response=>{
            console.log(response)
        }).catch(_=>{
            console.log(_)
        });
    }
    if (props.records && props.records.length > 0){ return (
        <Table>
            <thead>
                <tr>
                    {Object.keys(props.records[0]).map((colname, index)=>{
                        return (<th key={index}>{colname}</th>);
                    })}
                </tr>
            </thead>
            <tbody>
                {props.records.map((record)=>{
                    return (
                        <tr key={record.id}>
                            {Object.keys(record).map((dat, index)=>{
                                return (<td key={index}>{record[dat]}</td>)
                            })}
                            <td><button value={record.id} onClick={deleteButton}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )}
    else {
        return <span>No data to show</span>;
    }
}

export default TableComponent;
