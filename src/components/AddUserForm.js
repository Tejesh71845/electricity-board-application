// src/components/AddUserForm.js

import React, { useState } from 'react';

const AddUserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Applicant_Name: '',
    Gender: 'Male',
    District: '',
    State: 'DELHI',
    Pincode: '',
    Ownership: 'INDIVIDUAL',
    GovtID_Type: '',
    ID_Number: '',
    Category: 'Residential',
    Load_Applied: '',
    Date_of_Application: '',
    Status: 'Pending',
    Reviewer_ID: '',
    Reviewer_Name: '',
    Reviewer_Comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If Load_Applied exceeds 200, prevent the change
    if (name === 'Load_Applied' && parseInt(value, 10) > 200) {
      alert('Load Applied must not exceed 200 KV');
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Automatically set Modified_Date to current date
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${
      (currentDate.getMonth() + 1).toString().padStart(2, '0')
    }/${currentDate.getFullYear()}`;
    const newUser = {
      ...formData,
      ID: Date.now(), // Unique ID
      Date_of_Approval: '',
      Modified_Date: formattedDate,
    };

    onSubmit(newUser);
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <label>Applicant Name:</label>
      <input
        type="text"
        name="Applicant_Name"
        value={formData.Applicant_Name}
        onChange={handleChange}
        required
      />

      <label>Gender:</label>
      <select name="Gender" value={formData.Gender} onChange={handleChange} required>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>

      <label>District:</label>
      <input
        type="text"
        name="District"
        value={formData.District}
        onChange={handleChange}
        required
      />

      <label>State:</label>
      <input
        type="text"
        name="State"
        value={formData.State}
        onChange={handleChange}
        required
      />

      <label>Pincode:</label>
      <input
        type="number"
        name="Pincode"
        value={formData.Pincode}
        onChange={handleChange}
        required
      />

      <label>Ownership:</label>
      <select name="Ownership" value={formData.Ownership} onChange={handleChange} required>
        <option value="INDIVIDUAL">INDIVIDUAL</option>
        <option value="JOINT">JOINT</option>
      </select>

      <label>Government ID Type:</label>
      <select
        name="GovtID_Type"
        value={formData.GovtID_Type}
        onChange={handleChange}
        required
      >
        <option value="">Select ID Type</option>
        <option value="AADHAR">AADHAR</option>
        <option value="VOTER_ID">VOTER_ID</option>
        <option value="PAN">PAN</option>
        <option value="PASSPORT">PASSPORT</option>
      </select>

      <label>ID Number:</label>
      <input
        type="number"
        name="ID_Number"
        value={formData.ID_Number}
        onChange={handleChange}
        required
      />

      <label>Category:</label>
      <select name="Category" value={formData.Category} onChange={handleChange} required>
        <option value="Residential">Residential</option>
        <option value="Commercial">Commercial</option>
      </select>

      <label>Load Applied (KV):</label>
      <input
        type="number"
        name="Load_Applied"
        value={formData.Load_Applied}
        onChange={handleChange}
        required
        min="1"
        max="200"
      />

      <label>Date of Application:</label>
      <input
        type="date"
        name="Date_of_Application"
        value={formData.Date_of_Application}
        onChange={handleChange}
        required
      />

      <label>Reviewer ID:</label>
      <input
        type="number"
        name="Reviewer_ID"
        value={formData.Reviewer_ID}
        onChange={handleChange}
        required
      />

      <label>Reviewer Name:</label>
      <input
        type="text"
        name="Reviewer_Name"
        value={formData.Reviewer_Name}
        onChange={handleChange}
        required
      />

      <label>Reviewer Comments:</label>
      <textarea
        name="Reviewer_Comments"
        value={formData.Reviewer_Comments}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
