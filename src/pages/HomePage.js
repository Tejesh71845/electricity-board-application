// src/pages/HomePage.js

import React, { useState } from 'react';
import UserTable from '../components/UserTable.js';
import Search from '../components/Search.js';
import DateFilter from '../components/DateFilter.js';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ users, deleteUser, updateUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDateRange, setFilteredDateRange] = useState([null, null]);
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="controls">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DateFilter setFilteredDateRange={setFilteredDateRange} />
        <button className="add-user-button" onClick={() => navigate('/add-user')}>
          Add User
        </button>
      </div>
      <UserTable
        users={users}
        searchTerm={searchTerm}
        filteredDateRange={filteredDateRange}
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    </div>
  );
};

export default HomePage;
