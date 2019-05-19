import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEmployee } from '../actions/employee';
import { setAlert } from '../actions/alert';
import validateEmployeeInput from '../validation/validateEmployeeInput';

const AddEmployeeSection = ({ addEmployee, setAlert }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const addNewEmployee = ({ name, age, gender }) => {
    const validationResult = validateEmployeeInput({ name, age, gender });

    if (validationResult.isValid) {
      addEmployee({ name, age, gender });
      setName('');
      setAge('');
      setGender('');
    } else {
      setAlert(validationResult.error, 'danger');
    }
  };

  return (
    <div className="container">
      <h1>Add</h1>
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-md-3 col-form-label">
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
        <label
          htmlFor="example-text-input"
          className="col-3 col-form-label"
          style={{ marginBottom: '10px' }}
        >
          Age
        </label>
        <div className="col-md-3">
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
        <label htmlFor="example-text-input" className="col-3 col-form-label">
          Gender
        </label>
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
          <select className="form-control" onChange={e => setGender(e.target.value)} value={gender}>
            <option key="0" value="">
              Please select Gender
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
            onClick={() => addNewEmployee({ name, age, gender })}
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
  { addEmployee, setAlert }
)(AddEmployeeSection);
