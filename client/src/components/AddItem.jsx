import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddItem = () => {
  const navigate =useNavigate();
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const decrease = () => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      setLoading(true);

      const res=await api.post("/api/create", {
        title,
        quantity,
      });
      toast.success("Item added")
      navigate("/")

      // reset after success
      setTitle("");
      setQuantity(1);
    } catch (error) {
      console.log("Error adding item:", error);
      toast.error("Unauthorised")
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  flex-col gap-4 p-4 border rounded-lg w-fit"
    >
        <div className="flex gap-2">
      {/* Item name */}
      <input
        type="text"
        placeholder="Item name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Quantity control */}
      <div className="flex items-center gap-3 border rounded-lg px-3 py-1 w-fit">
        <button
          type="button"
          onClick={decrease}
          disabled={quantity === 1}
          className="text-xl font-semibold px-2 disabled:opacity-40"
        >
          −
        </button>

        <span className="min-w-[24px] text-center font-medium">
          {quantity}
        </span>

        <button
          type="button"
          onClick={increase}
          className="text-xl font-semibold px-2 shadow-lg"
        >
          +
        </button>
      </div></div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-sky-500 hover:bg-sky-700 text-black rounded-md py-2 disabled:opacity-60"
      >
        {loading ? "Adding..." : "Add Item"}
      </button>
    </form>
  );
};

export default AddItem;
