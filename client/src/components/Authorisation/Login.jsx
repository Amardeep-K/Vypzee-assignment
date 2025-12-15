import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "@/api/axios";
import { useAuth } from "@/context/AuthContext";

const Login = () => {
    const {login}=useAuth();
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        username: "",
        password:""
    })
   
    
    const LoginUser =async(e)=>{
        try{
            e.preventDefault() ;
            const res = await login({ username:formData.username,
                password:formData.password})
       
        

        toast.success("Login Successfull") 
        navigate("/")
    
        }catch(err){
            console.log("Error",err)
            toast.error("Login Failed") 

        }
    }

    return (
        <>
            <div className="w-full max-w-md border shadow-lg p-8 rounded">


                <form  onSubmit={LoginUser} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                        value={formData.username}
                            name="username"
                            type="text"
                            placeholder="Username"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            onChange={(e)=>setFormData({...formData,username:e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            name="password"
                            value={formData.password}
                            onChange={(e)=>setFormData({...formData,password:e.target.value})}
                            type="password"
                            placeholder="Password"
                            className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-shadow-white font-medium cursor-pointer hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Login;
