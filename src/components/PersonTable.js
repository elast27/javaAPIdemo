import React, { useEffect, useState } from 'react'
import TableComponent from './TableComponent'

export const PersonTable = ()=>{
    let [data, setData] = useState([]);
    // let data = axios.get('localhost:8083/')
    // .then((response)=>{return response.data})
    useEffect(_ =>{
        fetch('http://localhost:8083/').then(response => response.json()).then(dat=>setData(dat))
        .catch((err)=>{
            console.log(err);
        })
    },[data]);
    return <TableComponent records={data}></TableComponent>
}