import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchEmployee } from '../actions/employee';

const SearchEmployeeSection = ({ searchEmployee }) => {
  const [name, setName] = useState('');
  const [ageFrom, setAgeFrom] = useState('');
  const [ageTo, setAgeTo] = useState('');
  const [gender, setGender] = useState('');

  const reset = () => {
    setName('');
    setAgeFrom('');
    setAgeTo('');
    setGender('');
  };

  return (
    <div className="container">
      <h1>Search</h1>
      <div className="form-group row">
        <label
          htmlFor="example-text-input"
          className="col-3 col-form-label"
          style={{ marginBottom: '10px' }}
        >
          Name
        </label>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </div>
        <label
          htmlFor="example-text-input"
          className="col-2 col-form-label"
          style={{ marginBottom: '10px' }}
        >
          Age From/To
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
      </div>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Gender
        </label>
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
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
        <div className="col-md-3 text-center ">
          <button
            className="btn btn-primary btn-block"
            onClick={() => searchEmployee({ name, ageFrom, ageTo, gender })}
          >
            Search
          </button>
        </div>
        <div className="col-md-3 text-center ">
          <button className="btn btn-secondary btn-block" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { searchEmployee }
)(SearchEmployeeSection);
