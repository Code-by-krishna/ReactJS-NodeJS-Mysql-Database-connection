import React, { useState } from "react";
import axios from "axios";

const Form = () => {
    const [values,setValues] = useState({
        name: '',
        email: '',
        pass: '',
    })
    const Onchange = (event) => {
        setValues({...values,[event.target.name]:[event.target.value]})
    }
    const Submitdata = (event) => {  
        event.preventDefault();
        axios.post("http://localhost:8080/users",{values})
        .then(res => console.log("Registration Successfully",res))
        .catch(err => console.log(err))
    }
    return(
        <div className="w-full h-screen bg-blue-100 flex justify-center items-center">
            <div className="w-[30%] h-[70%] bg-white shadow-lg rounded-lg border border-gray-600 flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold text-red-400">
                    Log In Form
                </div>
                <div className=" text-lg font-normal mb-4">
                    Stored Data into Database.
                </div>
                <form onSubmit={Submitdata}>
                <div>
                   <label className="block text-lg font-normal text-gray-500 " htmlFor="name" >Name:-</label>
                   <input className="block p-1 w-[250px] bg-gray-300 rounded-lg outline-none border focus:border-blue-500 mb-2" type="text"  name="name" placeholder="Enter your name.." onChange={Onchange}/>
                </div>
                <div>
                   <label className="block text-lg font-normal text-gray-500 " htmlFor="email" >Email:-</label>
                   <input className="block p-1 w-[250px] bg-gray-300 rounded-lg outline-none border focus:border-blue-500 mb-2" type="email"  name="email" placeholder="Enter your email.." onChange={Onchange}/>
                </div>
                <div>
                   <label className="block text-lg font-normal text-gray-500 " htmlFor="pass" >Password:-</label>
                   <input className="block p-1 w-[250px] bg-gray-300 rounded-lg outline-none border focus:border-blue-500 mb-2" type="password" name="pass" placeholder="Enter your password.." onChange={Onchange}/>
                </div>
                <div className=" bg-blue-500 w-[250px] p-1 rounded-lg text-center text-white font-bold mt-2" >
                   <input type="submit" />
                </div>
                </form>
            </div>
        </div>
    )
}

export default Form