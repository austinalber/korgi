const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.birthday = !isEmpty(data.birthday) ? data.birthday : "";
  data.zipcode = !isEmpty(data.zipcode) ? data.zipcode : "";
// Name checks
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!Validator.isLength(data.password, { min: 2, max: 30 })) {
    errors.password = "Password must be at least 2 characters";
  }
// Zipcode check
  if (Validator.isEmpty(data.zipcode)) {
    errors.zipcode = "Zipcode field is required";
  }
  if (!Validator.isLength(data.zipcode, { min:5, max:5 })) {
    errors.zipcode = "Zipcode must be 5 characters";
  }
// Date check
  if (Validator.isEmpty(data.birthday)) {
    errors.birthday = "Birthday field is required";
  }
  if (!Validator.isLength(data.birthday, { min:10, max:10 })) {
    errors.birthday = "Birthday must be 6 characters";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};