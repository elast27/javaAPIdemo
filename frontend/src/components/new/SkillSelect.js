import React, { useState } from 'react'

const SkillSelect = ()=>{

    let [value, setSelected] = useState("");
    function handleChange(e){
        setSelected(e.target.value);
    }

    return (
        <select onChange={handleChange} value={value}>
            <option value={0} >Java</option>
            <option value={1}>JavaScript</option>
            <option value={2}>Python</option>
            <option value={3}>Swift</option>
            <option value={4}>C#</option>
            <option value={5}>C++</option>
            <option value={6}>PHP</option>
            <option value={7}>HTML</option>
            <option value={8}>C</option>
        </select>
    )
}
export default SkillSelect