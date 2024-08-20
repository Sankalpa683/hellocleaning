"use client"

import React, { useState } from 'react';

const Step1 = ({ services, onNext }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceChange = (service) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((s) => s !== service)
        : [...prevSelected, service]
    );
  };

  return (
    <div>
      <h2>Select Cleaning Services</h2>
      <form>
        {services.map((service) => (
          <label key={service}>
            <input
              type="checkbox"
              value={service}
              onChange={() => handleServiceChange(service)}
            />
            {service}
          </label>
        ))}
      </form>
      <button onClick={() => onNext(selectedServices)}>Next</button>
    </div>
  );
};

export default Step1;
