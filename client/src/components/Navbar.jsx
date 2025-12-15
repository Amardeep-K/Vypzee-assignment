import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

const Navbar = () => {
  const { user, logout } = useAuth();
  useEffect(()=>{

  },[user])

  return (
    <div className="w-full flex items-center justify-center p-5">
      <div className="border-2 py-2 px-4 w-[20em] rounded-full flex items-center justify-evenly">
        
        <Link className="text-lg font-semibold" to="/">
          List
        </Link>

        
        {user ? (
          <Link className="text-lg font-semibold" to="/add">
            Add
          </Link>
        ):(null)}
        {user?( <Link to={"/profile"}> <i className="fa-solid fa-circle-user text-2xl"></i> </Link>):( <Link className="text-md font-semibold border rounded-full px-4 py-1 bg-sky-500 text-black" to="/login">
            Login
          </Link>)}

       
        
      </div>
     
    </div>
  );
};

export default Navbar;
