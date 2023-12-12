import { useState } from "react";

const SampleComponent = ({color}) => {
    const [data, setData] = useState([]);
    const [name, setName] = useState(color);
    const [age, setAge] = useState(0);

    const handleChange = () => {
        setData({
            name: name,
            age: age
        })
    }

    return (
        <div style={{textAlign: "center"}}>
        <h1 style={{color : "blue"}}>you selected color.</h1>
        <input type="text" placeholder="Enter Name" onChange={(event)=>setName(event.target.value)}/>
        <input type="text" placeholder="Enter Age" onChange={(event)=>setAge(event.target.value)}/>
        <button onClick={handleChange}>Click to start</button>

            {data.map((d,index) => {
                return (
                    <div key={index}>
                        <h1> Name: {d.name} </h1>
                        <h1> Age: {d.age} </h1>
                    </div>
                ); 
            })}
        </div>
    );
};

export default SampleComponent;