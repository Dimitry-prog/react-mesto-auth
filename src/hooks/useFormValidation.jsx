import React, {useCallback, useState} from "react";

const UseFormValidation = () => {
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: e.target.validationMessage});
    setIsValid(e.target.closest('.form').checkValidity());
  }

  const resetForm = useCallback(() => {
    setErrors({});
    setValues({});
    setIsValid(false);
  }, [setValues, setIsValid, setErrors]);

  return {
    values, errors, isValid, setValues, setIsValid, handleChange, resetForm
  };
};

export default UseFormValidation;