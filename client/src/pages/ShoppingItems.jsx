import List from "../components/List"
import { useNavigate } from 'react-router'
const ShoppingItems = () => {
    const navigate = useNavigate();
    const navigateToCreate=()=>{
        navigate("/create");
    }
  return (
    <>
   
    
    
    <List/>

    <button className='cursor-pointer flex justify-center items-center bg-sky-500 w-15 h-15 fixed bottom-10 right-10 text-xl font-bold rounded-full' onClick={navigateToCreate}><i className="fa-solid fa-plus"></i></button>
    </>

  )
}

export default ShoppingItems