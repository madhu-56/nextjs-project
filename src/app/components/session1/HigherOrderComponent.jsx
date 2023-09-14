"use client"
import {useState} from 'react'

function HigherOrderComponent(OriginalComponent) {
    function NewComponent()
    {
        const [num,setNum] = useState(1);
        const handleNumber=()=>{
        setNum(prevNum=> prevNum+2);
    }
        return <OriginalComponent name="Rahul" num={num} handleNumber={handleNumber} />
    }
    return NewComponent;
}

export default HigherOrderComponent
