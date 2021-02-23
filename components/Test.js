import React, {useState, useEffect} from 'react'

export default function Test() {
    const [test, setTest] = useState(false)
    useEffect(() => {
        setTest(true)
        setTimeout(()=>{console.log(test)},100)
        
    }, [])
    console.log(test)
    return (
        <div>
            
        </div>
    )
}
