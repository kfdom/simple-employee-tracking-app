import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEmployee } from '../actions/employee';

const AddEmployeeSection = ({ addEmployee }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const addNewEmployee = ({ name, age }) => {
    addEmployee({ name, age });
    setName('');
    setAge('');
  };

  return (
    <div className="container">
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-md-2 col-form-label">
          Name
        </label>
        <div className="col-md-3">
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            onChange={e => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <label htmlFor="example-text-input" className="col-2 col-form-label">
          Age
        </label>
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
          <input
            className="form-control"
            type="number"
            step="1"
            placeholder="Age"
            onChange={e => setAge(e.target.value)}
            value={age}
            required
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-primary btn-block"
            onClick={() => addNewEmployee({ name, age })}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { addEmployee }
)(AddEmployeeSection);
