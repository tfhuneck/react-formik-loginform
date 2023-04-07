import React from "react";
// TODO: import useFormik from formik library

import {useFormik} from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values => {
      console.log('form:', values)
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      if(!values.emailField) errors.emailError = 'Email is required';
      if(!values.pswField) errors.pswError = 'Password is required';
      if(!values.emailField.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) errors.emailInputError = 'Username should be an Email';
      return errors;
    }
    // onChange: event => {
    //   setMessage(event.target.value);
    // }
  });

  return (
    <div>
      <h1>Sign In Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input type="text" name="emailField" id="emailField" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailError ? <div name="emailError" id="emailError" style={{color:'red'}}>{formik.errors.emailError}</div> :null}
        {formik.errors.emailInputError ? <div name="emailInputError" id="emailInputError" style={{color:'red'}}>{formik.errors.emailInputError}</div> :null}
        <div>Password</div>
        <input type="text" name="pswField" id="pswField" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswError ? <div name="pswError" id="pswError" style={{color:'red'}}>{formik.errors.pswError}</div> :null}
        <br></br>
        <button type="submit" id="submitBtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
