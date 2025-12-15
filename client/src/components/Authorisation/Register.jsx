import { Link } from "react-router-dom";
import api from "@/api/axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Register = () => {
   
    const navigate=useNavigate()
    const [user,setUser]=useState({
        username: "",
        email:"",
        password:""
    })
   
    
    const registerUser =async(e)=>{
        try{
            e.preventDefault() ;
    const res = await api.post("/api/auth/register",{
        username:user.username,
        email:user.email,
        password:user.password
        })
        toast.success(res.data.message) 
        navigate("/login")
    
        }catch(err){
            console.log("Error",err)
            toast.error(err.message) 

        }
    }
    

    return (
        <>
            <div className="w-full max-w-md border shadow-lg p-8 rounded">


                <form className="space-y-4" onSubmit={registerUser}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                        value={user.username}
                            name="username"
                            type="text"
                            placeholder="Username"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={(e)=>setUser({...user,username:e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            name="email"
                            value={user.email}
                            type="email"
                            placeholder="example@mail.com"
                            onChange={(e)=>setUser({...user,email:e.target.value})}
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            name="password"
                            value={user.password}
                            onChange={(e)=>setUser({...user,password:e.target.value})}
                            type="password"
                            placeholder="Password"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    
                <button type="submit" className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"> Register</button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Already registered ?{" "}
                    <Link to="/login" className="text-shadow-white font-medium hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Register;
