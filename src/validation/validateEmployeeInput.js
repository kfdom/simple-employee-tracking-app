import isEmpty from './is-empty';

const validateEmployeeInput = ({ name, age, gender }) => {
  name = name.trim();
  age = Number(age.trim());

  let error = '';

  if (isEmpty(name)) {
    error = 'Please enter Name';
  } else if (isEmpty(age)) {
    error = 'Please enter Age';
  } else if (!Number.isInteger(age) || age <= 0 || age > 200) {
    error = 'Please enter a valid Age';
  } else if (isEmpty(gender)) {
    error = 'Please select Gender';
  }

  return {
    error,
    isValid: isEmpty(error)
  };
};

export default validateEmployeeInput;
