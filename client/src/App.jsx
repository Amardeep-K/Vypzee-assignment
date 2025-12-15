import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Authorisation/Register";
import Profile from "./components/Authorisation/Profile";
import ShoppingItems from "./pages/ShoppingItems";
import Navbar from "./components/Navbar";
import Add from "./pages/Add";
import Login from "./components/Authorisation/Login";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <Toaster position="top-right" reverseOrder={false} />

   
      <main className="flex-1 w-full flex flex-col items-center justify-center">
      <h2 className='text-2xl font-bold mt-3 mb-3'> Shoping <span className='text-sky-500'>List</span> </h2>
        <Routes>
          <Route path="/" element={<ShoppingItems />} />
          <Route path="/add" element={<Add />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
