// src/components/EditUser.js

import React, { useState } from 'react';

const EditUser = ({ user, updateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState({ ...user });

  const handleChange = (e) => {
    setEditableUser({
      ...editableUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Data Validation
    if (editableUser.Load_Applied > 200) {
      alert('Load Applied must not exceed 200 KV');
      return;
    }

    // Automatically update Modified_Date
    const currentDate = new Date().toLocaleDateString('en-GB');
    editableUser.Modified_Date = currentDate;

    updateUser(editableUser);
    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    setEditableUser({ ...user });
  };

  return (
    <>
      {isEditing ? (
        <form className="edit-user-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="Applicant_Name"
            value={editableUser.Applicant_Name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="Load_Applied"
            value={editableUser.Load_Applied}
            onChange={handleChange}
            required
          />
          <select
            name="Status"
            value={editableUser.Status}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
          <button type="submit">Save</button>
          <button type="button" onClick={toggleEdit}>
            Cancel
          </button>
        </form>
      ) : (
        <button onClick={toggleEdit}>Edit</button>
      )}
    </>
  );
};

export default EditUser;
