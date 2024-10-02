// src/components/UserTable.js

import React, { useState} from 'react';
import EditUser from './EditUser';

const UserTable = ({ users, searchTerm, filteredDateRange, deleteUser, updateUser }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20; // Number of records per page

  /**
   * Parses a date string in "dd/mm/yy" or "dd/mm/yyyy" format to a JavaScript Date object.
   * @param {string} dateString - The date string to parse.
   * @returns {Date} - The parsed Date object.
   */
  const parseDate = (dateString) => {
    if (!dateString) return null;
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Months are zero-based in JS
    let year = parseInt(parts[2], 10);
    if (year < 100) {
      year += 2000; // Assuming dates are from 2000 onwards
    }
    return new Date(year, month, day);
  };

  /**
   * Filters users based on search term (Applicant ID) and date range.
   */
  const filteredUsers = users.filter((user) => {
    // Filter by Applicant ID
    const matchesSearch = searchTerm
      ? user.ID.toString().includes(searchTerm)
      : true;

    // Filter by Date of Application
    let matchesDate = true;
    if (filteredDateRange[0] && filteredDateRange[1]) {
      const applicationDate = parseDate(user.Date_of_Application);
      if (applicationDate) {
        matchesDate =
          applicationDate >= filteredDateRange[0] &&
          applicationDate <= filteredDateRange[1];
      }
    }

    return matchesSearch && matchesDate;
  });

  // Pagination calculations
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredUsers.slice(indexOfFirstRecord, indexOfLastRecord);
  // const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);

  /**
   * Handles page change.
   * @param {number} pageNumber - The page number to navigate to.
   */
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <div className="user-table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Applicant Name</th>
              <th>Date of Application</th>
              <th>Load Applied (KV)</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.length > 0 ? (
              currentRecords.map((user) => (
                <tr key={user.ID}>
                  <td>{user.ID}</td>
                  <td>{user.Applicant_Name}</td>
                  <td>{user.Date_of_Application}</td>
                  <td>{user.Load_Applied} KV</td>
                  <td>{user.Status}</td>
                  <td>
                    <button
                      onClick={() => deleteUser(user.ID)}
                      disabled={user.Status !== 'Rejected'}
                      className={`delete-btn ${user.Status !== 'Rejected' ? 'disabled' : ''}`}
                    >
                      Delete
                    </button>
                    <EditUser user={user} updateUser={updateUser} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
  
        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredUsers.length / recordsPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    );
  };
  
  export default UserTable;
  