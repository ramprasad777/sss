import React, {useState, useEffect} from 'react';


const radioLabels = [
    {
        name: "Used",
        id: 1
    },
    {
        name: "New",
        id: 2
    },
    {
        name: "Old",
        id: 3
    }
];
export default function Contact(){
    
    const [setRadio, setActiveRadio] = useState({
        value:"Used",
        checked: false
    });
    const handleActiveRadio = (e) => {
        // const value = e.target.value
        setActiveRadio({
            value : e.target.value
            // ...setRadio,
            // [value]: value
        })
        // console.log(e.target.value)
        // console.log(value)
    }
    useEffect(()=>{
        let radioIndex = 0;
        const interval = setInterval(()=>{
            console.log(radioLabels[radioIndex++].name);
            // radioIndex += 1;
            if (radioIndex == radioLabels.length) {
                radioIndex = 0;
            }
        }, 2000);
        return()=> clearInterval(interval);
    }, []);
    return(
        <>
            <p>contact form and details will go here</p>
            {
                radioLabels.map((item, index) => {
                    return(
                        <label key={index}>
                            <input type="radio" name="category" onChange={handleActiveRadio} value={item.name} />
                            {item.name}
                        </label>
                    )
                })
            }
            {
                setRadio.value==="Used"?
                <div>Used data block</div>
                :
                setRadio.value==="New"?
                <div>New data block</div>
                :
                
                <div>Old data block</div>
                
            }
        </>
    )
}