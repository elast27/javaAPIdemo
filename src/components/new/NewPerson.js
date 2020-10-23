import React, { useState } from 'react'
import {Card, CardBody, Form, FormGroup, Input, Button} from 'reactstrap'
import SkillSelect from './SkillSelect'

export const NewPerson = ()=>{

    let [fName, setfName] = useState("");
    let [lName, setlName] = useState("");
    let [skill, setSkill] = useState(0);
    let [exp, setExp] = useState(0);

    function addPerson(e){
        let formData = new FormData();
        formData.append("id", 0);
        formData.append("fName", fName);
        formData.append("lName", lName);
        formData.append("skill", skill);
        formData.append("experience", exp);
        fetch('http://localhost:8083', {
            method: "PUT",
            body: formData
        }).then(_=>{console.log(_)}).catch(_=>{
            console.log(_);
        })
    }
    function handleChange(e){
        let func = e.target.name;
        if(func==="fName"){
            setfName(e.target.value);
        }
        else if(func==="lName"){
            setlName(e.target.value);
        }
        else if(func==='skill'){
            setSkill(e.target.value);
        }
        else {
            setExp(parseInt(e.target.value));
        }
    }
    return (
        <Card>
            <CardBody>
                <Form>
                    <FormGroup>
                        <label>First Name </label>
                        <Input type='text' name="fName" onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <label>Last Name </label>
                        <Input type='text' name="lName" onChange={handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <label>Top Skill </label>
                        <SkillSelect name="skill" onChange={handleChange}></SkillSelect>
                    </FormGroup>
                    <FormGroup>
                        <label>Experience </label>
                        <Input type='number' name="exp" onChange={handleChange}></Input>
                    </FormGroup>
                    <Button onClick={addPerson}>Submit</Button>
                </Form>
            </CardBody>
        </Card>
    )
}
