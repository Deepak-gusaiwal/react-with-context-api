import React, { useState } from 'react'
import { userContextProvider } from '../context/Context'

const About = () => {
    const { name, setName } = userContextProvider();

    const [inputVal, setInputVal] = useState('');
    const changeName = () => {
        setName(inputVal)
    }
    return (
        <div>
            <h1>This is About Page And Your Name : {name} </h1>
            <input type="text" placeholder='set Name' onChange={(e) => { setInputVal(e.target.value) }} />
            <button onClick={changeName}>save</button>
        </div>
    )
}

export default About
