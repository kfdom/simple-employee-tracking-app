import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteEmployee, loadEditEmployee, updateEmployee } from '../actions/employee';
import { setAlert } from '../actions/alert';
import validateEmployeeInput from '../validation/validateEmployeeInput';

const EmployeeListSection = ({
  employeeList,
  loading,
  deleteEmployee,
  loadEditEmployee,
  displayEditEmployee,
  setAlert,
  updateEmployee
}) => {
  const [editName, setEditName] = useState('');
  const [editAge, setEditAge] = useState('');
  const [editGender, setEditGender] = useState('');

  const updateEditEmployee = ({ displayEditEmployee, editName, editAge, editGender }) => {
    const validationResult = validateEmployeeInput({
      name: editName,
      age: String(editAge),
      gender: editGender
    });

    if (validationResult.isValid) {
      updateEmployee({ id: displayEditEmployee, name: editName, age: editAge, gender: editGender });
    } else {
      setAlert(validationResult.error, 'danger');
    }
  };

  return (
    <div>
      {loading ? (
        <div className="loading-div">
          <h3>Loading...</h3>
          <div className="loading">
            <i className="fas fa-spinner" />
          </div>
        </div>
      ) : (
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {displayEditEmployee === employee._id ? (
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Name"
                          onChange={e => setEditName(e.target.value)}
                          value={editName}
                          required
                        />
                      </div>
                    ) : (
                      employee.name
                    )}
                  </td>
                  <td>
                    {displayEditEmployee === employee._id ? (
                      <div>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Age"
                          onChange={e => setEditAge(e.target.value)}
                          value={editAge}
                          required
                        />
                      </div>
                    ) : (
                      employee.age
                    )}
                  </td>
                  <td>
                    {displayEditEmployee === employee._id ? (
                      <div>
                        <select
                          className="form-control"
                          onChange={e => setEditGender(e.target.value)}
                          value={editGender}
                        >
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
                    ) : (
                      employee.gender
                    )}
                  </td>
                  <td>
                    {displayEditEmployee === employee._id ? (
                      <div>
                        <i
                          className="fas fa-check"
                          style={{ cursor: 'pointer', color: 'green' }}
                          onClick={() =>
                            updateEditEmployee({
                              displayEditEmployee,
                              editName,
                              editAge,
                              editGender
                            })
                          }
                        />
                        <i
                          className="fas fa-arrow-left"
                          style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
                          onClick={() => loadEditEmployee(null)}
                        />
                      </div>
                    ) : (
                      <div>
                        <i
                          className="fas fa-pen"
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            loadEditEmployee(employee._id);
                            setEditName(employee.name);
                            setEditAge(employee.age);
                            setEditGender(employee.gender);
                          }}
                        />
                        <i
                          className="fas fa-times"
                          style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
                          onClick={() => {
                            const confirmed = window.confirm(
                              'Are you sure you want to delete this employee?'
                            );
                            if (!confirmed) {
                              return;
                            }
                            deleteEmployee(employee._id);
                          }}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('STATE', state);
  return {
    employeeList: state.employee.employeeList,
    loading: state.employee.loading,
    displayEditEmployee: state.employee.displayEditEmployee
  };
};

export default connect(
  mapStateToProps,
  { deleteEmployee, loadEditEmployee, setAlert, updateEmployee }
)(EmployeeListSection);
