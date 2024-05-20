import React, { useState, useEffect } from 'react';

function FuelForm({ addFuelRecord, editFuelRecord, currentRecord, isEditing }) {
  const [date, setDate] = useState('');
  const [miles, setMiles] = useState('');
  const [gallons, setGallons] = useState('');

  useEffect(() => {
    if (isEditing && currentRecord) {
      setDate(currentRecord.date);
      setMiles(currentRecord.miles);
      setGallons(currentRecord.gallons);
    }
  }, [isEditing, currentRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editFuelRecord({ date, miles: parseFloat(miles), gallons: parseFloat(gallons) });
    } else {
      addFuelRecord({ date, miles: parseFloat(miles), gallons: parseFloat(gallons) });
    }
    setDate('');
    setMiles('');
    setGallons('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Miles Driven:</label>
        <input type="number" value={miles} onChange={(e) => setMiles(e.target.value)} required />
      </div>
      <div>
        <label>Gallons Used:</label>
        <input type="number" value={gallons} onChange={(e) => setGallons(e.target.value)} required />
      </div>
      <button type="submit">{isEditing ? 'Update Record' : 'Add Record'}</button>
    </form>
  );
}

export default FuelForm;
