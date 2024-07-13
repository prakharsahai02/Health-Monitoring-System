// src/components/DoctorDashboard.js
import React, { useState, useEffect } from 'react';
import { getAllPatients  } from '../services/apiService';
import './DoctorDashboard.css';
import DocHeader from'./DocHeader';
import Footer from './Footer';


const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getAllPatients();
        setPatients(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchPatients();
  }, []);



  return (
    <div>
      <DocHeader />
      <h2>Patient List</h2>
      {error && <p>{error}</p>}
      <ul>
        {patients.map((patient) => (
          <li key={patient.uid}>
            <p>Name: {patient.displayName}</p>
            <p>Email: {patient.email}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
    
  );
};

export default DoctorDashboard;
