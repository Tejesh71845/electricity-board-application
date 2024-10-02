// src/pages/AddUserPage.js

import React from "react";
import AddUserForm from "../components/AddUserForm.js";
import { useNavigate } from "react-router-dom";

const AddUserPage = ({ addUser }) => {
  const navigate = useNavigate();

  const handleAddUser = (newUser) => {
    addUser(newUser);
    navigate("/"); // Redirect back to the Home Page after adding
  };

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Add New User</h2>

      <div className="add-user-page">
        <AddUserForm onSubmit={handleAddUser} />
      </div>
    </div>
  );
};

export default AddUserPage;
