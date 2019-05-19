import React, { Fragment, useEffect } from 'react';
import Navbar from './Navbar';
import AddEmployeeSection from './AddEmployeeSection';
import EmployeeListSection from './EmployeeListSection';
import Alert from './Alert';

// Redux
import { Provider } from 'react-redux';
import store from '../store';
import { loadEmployee } from '../actions/employee';

const App = () => {
  useEffect(() => {
    store.dispatch(loadEmployee());
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div style={{ marginBottom: '100px' }} />
        <div className="container">
          <div>
            <Alert />
          </div>
          <div>
            <AddEmployeeSection />
          </div>
          <div>
            <EmployeeListSection />
          </div>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
