import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';



const InputForm = ({values, errors, touched }) => {

  return(
    <Form>
      <Field type="text" name="name" placeholder="name" />
      {touched.name && errors.name && (<p>{errors.name}</p>)}
      <Field type="email" name="email" placeholder="email" />
      {touched.email && errors.email && (<p>{errors.email}</p>)}
      <Field type="text" name="password" placeholder="password" />
      {touched.password && errors.password && (<p>{errors.password}</p>)}
      <Field type="checkbox" name="tos" value={values.tos} />

      <button>Submit!</button>
    </Form>
  )
}

const FormikInputForm = withFormik({

  mapPropsToValues({name, email, password, tos }) {
    return {
      name: name || "", 
      email: email || "",
      password: password || "",
      tos: tos || false
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string("Name needs to be a string")
      .min(6, "Name needs to be at least 6 characters")
      .required("Name required"),
    email: Yup.string()
      .required("Email required"),
    password: Yup.string()
      .required("Password required")
  }),

  handleSubmit(values, { setStatus }) {

    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err.response);
      });
  }
})(InputForm);

export default FormikInputForm;
