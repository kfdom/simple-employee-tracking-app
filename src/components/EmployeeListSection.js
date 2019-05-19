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
        <div>Employee List</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    employeeList: state.employee.employeeList,
    loading: state.employee.loading
  };
};

export default connect(mapStateToProps)(EmployeeListSection);
