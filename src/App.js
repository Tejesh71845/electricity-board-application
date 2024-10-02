// src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AddUserPage from './pages/AddUserPage.js';
import ChartPage from './pages/ChartPage.js';
import './index.css';

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from localStorage or JSON initially
  useEffect(() => {
    const localStorageUsers = JSON.parse(localStorage.getItem('users'));
    if (localStorageUsers && localStorageUsers.length > 0) {
      setUsers(localStorageUsers);
    } else {
      fetch('/users.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setUsers(data);
          localStorage.setItem('users', JSON.stringify(data));
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    }
  }, []);

  // Save to localStorage whenever users are updated
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.ID === updatedUser.ID ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const deleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.ID !== id);
    setUsers(filteredUsers);
  };

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Electricity Board - Connection Tracker</h1>
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add-user">Add User</Link>
              </li>
              <li>
                <Link to="/charts">Charts</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  users={users}
                  deleteUser={deleteUser}
                  updateUser={updateUser}
                />
              }
            />
            <Route path="/add-user" element={<AddUserPage addUser={addUser} />} />
            <Route path="/charts" element={<ChartPage users={users} />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Tejesh Kumar Das. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
