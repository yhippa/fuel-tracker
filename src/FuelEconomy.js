import React from 'react';

function FuelEconomy({ records }) {
  const totalMiles = records.reduce((total, record) => total + record.miles, 0);
  const totalGallons = records.reduce((total, record) => total + record.gallons, 0);
  const fuelEconomy = totalMiles / totalGallons || 0;

  return (
    <div>
      <h2>Fuel Economy</h2>
      <p>Average Fuel Economy: {fuelEconomy.toFixed(2)} miles per gallon</p>
    </div>
  );
}

export default FuelEconomy;
