import api from "../api/axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const List = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchItems = async () => {
    try {
      const res = await api.get("/api");
      setItems(res.data.data); 
      
    } catch (err) {
      console.log("Fetch failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // mark item as bought
  const handleBought = async (id, completed) => {
    try {
      const res = await api.put(`/api/${id}`, {
        completed: !completed,
      });

      const updatedItem = res.data.data;

     
      setItems(prev =>
        prev.map(item =>
          item._id === id ? updatedItem : item
        )
      );
      toast.success("Item purchased");
    } catch (err) {
      console.log("Update failed", err);
      toast.error(err)
    }
  };

  // UI states
  if (loading) {
    return <p className="p-4 text-center">Loading items...</p>;
  }

  if (items.length === 0) {
    return <p className="p-4 text-center">No items found</p>;
  }

  return (
    <div className="flex flex-col gap-4 border w-[25em] px-6 py-5 rounded-lg">
      {items
        .filter(item => !item.completed)
        .map(item => (
          <div
            key={item._id}
            className="border rounded p-4 flex items-center justify-between hover:bg-accent transition"
          >
            {/* Title */}
            <span className="font-medium">{item.title}</span>

            {/* Actions */}
            <div className="flex gap-3 items-center">
              <span className="inline-flex items-center justify-center rounded-md border px-3 py-1 text-sm">
                {item.quantity}
              </span>

              <button
                onClick={() =>
                  handleBought(item._id, item.completed)
                }
                className="bg-green-700 text-white px-3 py-2 rounded-md text-sm hover:bg-green-800 transition"
              >
                <i className="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default List;
