import React, { useState } from 'react';
import { connect } from 'react-redux';

const EmployeeListSection = ({ employeeList, loading }) => {
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeeList.map((employee, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td />
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
    loading: state.employee.loading
  };
};

export default connect(mapStateToProps)(EmployeeListSection);
