import React, { useState } from 'react';

const SearchEmployeeSection = ({}) => {
  const [ageFrom, setAgeFrom] = useState('');
  const [ageTo, setAgeTo] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div className="container">
      <h1>Search</h1>
      <div className="form-group row">
        <label
          htmlFor="example-text-input"
          className="col-2 col-form-label"
          style={{ marginBottom: '10px' }}
        >
          Age From
        </label>
        <div className="col-md-2">
          <input
            className="form-control"
            type="number"
            step="1"
            placeholder="Age From"
            onChange={e => setAgeFrom(e.target.value)}
            value={ageFrom}
            min="1"
            max="200"
          />
        </div>
        <label
          htmlFor="example-text-input"
          className="col-2 col-form-label"
          style={{ marginBottom: '10px' }}
        >
          Age To
        </label>
        <div className="col-md-2">
          <input
            className="form-control"
            type="number"
            step="1"
            placeholder="Age To"
            onChange={e => setAgeTo(e.target.value)}
            value={ageTo}
            min="1"
            max="200"
          />
        </div>
        <label htmlFor="example-text-input" className="col-2 col-form-label">
          Gender
        </label>
        <div className="col-md-2" style={{ marginBottom: '10px' }}>
          <select className="form-control" onChange={e => setGender(e.target.value)} value={gender}>
            <option key="0" value="">
              All
            </option>
            <option key="Female" value="Female">
              Female
            </option>
            <option key="Male" value="Male">
              Male
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchEmployeeSection;
