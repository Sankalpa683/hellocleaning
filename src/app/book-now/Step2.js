"use client"

import React, { useState } from 'react';

const Step2 = ({ onBack, onSubmit }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    number: '',
    address: '',
  });

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(userInfo);
  };

  return (
    <div>
      <h2>Your Information</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="number"
          placeholder="Phone Number"
          value={userInfo.number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={userInfo.address}
          onChange={handleChange}
        />
      </form>
      <button onClick={onBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step2;
