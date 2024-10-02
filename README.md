# Electricity Board Web Application

This is a responsive multi-page web application built for India's leading Electricity Board to manage electricity connection requests and users. The application allows the staff to view, edit, and analyze connection requests, with features like searching, filtering by status, adding new users, and visualizing connection requests using charts.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- **User Table**: Display records in a tabular format with search functionality.
- **Add User**: Add new user details through a form.
- **Search**: Search connection details using Applicant ID.
- **Filter by Date**: Filter connection requests using a date range.
- **Data Validation**:
  - Date of Application, Govt ID Type, and ID Number are immutable.
  - Load applied cannot exceed 200 KV.
  - Only users with a rejected status can be deleted.
- **Charts**: Visualize connection requests via bar, line, and pie charts.
  - Charts display connection requests per month with a status filter.
- **Responsive Design**: The UI is fully responsive and works well across different devices (mobile, tablet, desktop).
- **Pagination**: Large datasets are paginated for better performance and UX.
- **LocalStorage Persistence**: Data persists in the browser's local storage, ensuring no data loss upon refresh or session end.

## Tech Stack

- **Frontend**: React, Chart.js
- **Styling**: Tailwind CSS
- **Data Storage**: LocalStorage (to retain added/modified data across sessions)
- **Charting Library**: Chart.js

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/electricity-board-web-app.git
   cd electricity-board-web-app
2. Install dependencies:
    npm install
3. Start the development server:
    npm start
4. Open your browser and navigate to http://localhost:3000.

Usage

Home Page

View all user connection requests in a table with pagination.
Use the search bar to find users by Applicant ID.
Click the "Add User" button to navigate to the add user form.

Add User Page

Fill out the form to add new connection requests.

Chart Page

Visualize connection requests in bar, line, or pie chart formats.
Use the dropdown filters to select request status (Pending, Approved, Rejected).

Project Structure

src/
│
├── components/
│   ├── UserTable.js            # Displays user connection requests in a table
│   ├── AddUser.js              # Form to add new users
│   ├── ChartPage.js            # Displays connection request charts
│
├── pages/
│   ├── HomePage.js             # Main homepage with user table and search
│   ├── AddUserPage.js          # Page for adding new users
│   ├── ChartPage.js            # Page for visualizing connection requests with charts
│
├── assets/                     # Static assets (e.g., logos, images)
├── styles/
│   └── index.css               # Global styling (responsive design)
│
├── data/
│   └── users.json              # Initial set of user data (can be replaced with API later)
│
├── App.js                      # Main application component
├── index.js                    # React entry point

License

This project is licensed under the MIT License.


### Steps to Complete:
- Replace the repository link in the `git clone` command with your actual GitHub URL.
- Add paths to screenshots under the `Screenshots` section if needed.
- Customize the project title and any other specific sections based on your requirements.

This `README.md` file provides clear instructions, a project overview, and feature details for users and developers alike.
