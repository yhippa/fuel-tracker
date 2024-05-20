import React, { useState, useEffect } from 'react';
import './App.css';
import FuelForm from './FuelForm';
import FuelList from './FuelList';
import FuelEconomy from './FuelEconomy';

function App() {
  const [records, setRecords] = useState(() => {
    const savedRecords = localStorage.getItem('fuel-records');
    return savedRecords ? JSON.parse(savedRecords) : [];
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentRecord, setCurrentRecord] = useState(null);

  useEffect(() => {
    localStorage.setItem('fuel-records', JSON.stringify(records));
  }, [records]);

  const addFuelRecord = (record) => {
    setRecords([...records, record]);
  };

  const deleteFuelRecord = (index) => {
    const newRecords = records.filter((_, i) => i !== index);
    setRecords(newRecords);
  };

  const editFuelRecord = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setCurrentRecord(records[index]);
  };

  const updateFuelRecord = (updatedRecord) => {
    const newRecords = records.map((record, index) =>
      index === currentIndex ? updatedRecord : record
    );
    setRecords(newRecords);
    setIsEditing(false);
    setCurrentIndex(null);
    setCurrentRecord(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fuel Economy Tracker</h1>
      </header>
      <div className="container">
        <FuelEconomy records={records} />
      </div>
      <div className="container">
        <FuelForm
          addFuelRecord={addFuelRecord}
          editFuelRecord={updateFuelRecord}
          currentRecord={currentRecord}
          isEditing={isEditing}
        />
      </div>
      <div className="container">
        <FuelList records={records} onEdit={editFuelRecord} onDelete={deleteFuelRecord} />
      </div>
    </div>
  );
}

export default App;
