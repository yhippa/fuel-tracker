import React from 'react';

function FuelList({ records, onEdit, onDelete }) {
  return (
    <div>
      <h2>Fuel Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record.date} - {record.miles} miles / {record.gallons} gallons
            <div className="fuel-record-buttons">
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FuelList;
