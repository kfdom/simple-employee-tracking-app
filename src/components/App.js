import React, { Fragment, useEffect } from 'react';
import AddEmployeeSection from './AddEmployeeSection';
import EmployeeListSection from './EmployeeListSection';

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
        <div className="container">
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
