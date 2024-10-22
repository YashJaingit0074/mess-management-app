import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Utensils, Calendar, Users, PlusCircle } from 'lucide-react';
import MealPlan from './components/MealPlan';
import StudentList from './components/StudentList';
import AttendanceTracker from './components/AttendanceTracker';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 perspective-1000">
        <header className="bg-blue-600 text-white p-4 transform rotate-x-2 shadow-xl">
          <h1 className="text-3xl font-bold flex items-center justify-center">
            <Utensils className="mr-2" />
            3D Mess Management App
          </h1>
        </header>
        <nav className="bg-white shadow-md my-4 mx-auto max-w-4xl rounded-lg overflow-hidden transform rotate-y-2">
          <ul className="flex justify-center space-x-4 p-2">
            <li>
              <Link to="/" className="flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-1" size={18} />
                Meal Plan
              </Link>
            </li>
            <li>
              <Link to="/students" className="flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-md hover:bg-green-200 transition-all duration-300 transform hover:scale-105">
                <Users className="mr-1" size={18} />
                Students
              </Link>
            </li>
            <li>
              <Link to="/attendance" className="flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-md hover:bg-purple-200 transition-all duration-300 transform hover:scale-105">
                <PlusCircle className="mr-1" size={18} />
                Attendance
              </Link>
            </li>
          </ul>
        </nav>
        <main className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-2xl transform rotate-x-1 transition-all duration-500 hover:rotate-x-0">
          <Routes>
            <Route path="/" element={<MealPlan />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/attendance" element={<AttendanceTracker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;