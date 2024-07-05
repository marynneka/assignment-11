import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Users from "../components/users";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Access the environment variables
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100">
      <div className="flex justify-between items-center w-full max-w-md mb-4">
        <h2 className="text-3xl font-bold mb-4">Home Page</h2>
        <button
          onClick={handleLogout}
          className="bg-green-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-green-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Logout
        </button>
      </div>
      <Users data={users} />
    </div>
  );
};

export default HomePage;
