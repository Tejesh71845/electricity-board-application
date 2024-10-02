// src/components/DateFilter.js

import React from 'react';

const DateFilter = ({ setFilteredDateRange }) => {
  const handleStartDateChange = (e) => {
    const startDate = e.target.value ? new Date(e.target.value) : null;
    setFilteredDateRange((prevRange) => [startDate, prevRange[1]]);
  };

  const handleEndDateChange = (e) => {
    const endDate = e.target.value ? new Date(e.target.value) : null;
    setFilteredDateRange((prevRange) => [prevRange[0], endDate]);
  };

  return (
    <div className="date-filter-container">
      <label>Start Date:</label>
      <input type="date" onChange={handleStartDateChange} />
      <label>End Date:</label>
      <input type="date" onChange={handleEndDateChange} />
    </div>
  );
};

export default DateFilter;
