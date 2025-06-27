import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz from './Quiz';
import Shop from './Shop';
import "./App.css/"
export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="space-x-4">
          <Link to="/quiz" className="text-blue-600">Quiz App</Link>
          <Link to="/shop" className="text-green-600">Shopping Cart</Link>
        </nav>
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}
