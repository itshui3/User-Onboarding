import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';



const InputForm = ({values, errors, touched, setUsers, isSubmitting, users, status }) => {

  useEffect(() => {
    console.log(status);
    status && setUsers(users => [...users, status])
    console.log(users);
  }, [status])

  return(
    <Form>
      <Field type="text" name="name" placeholder="name" />
      {touched.name && errors.name && (<p>{errors.name}</p>)}
      <Field type="email" name="email" placeholder="email" />
      {touched.email && errors.email && (<p>{errors.email}</p>)}
      <Field type="text" name="password" placeholder="password" />
      {touched.password && errors.password && (<p>{errors.password}</p>)}
      <Field type="checkbox" name="tos" checked={values.tos} />

      <button type="submit" disabled={isSubmitting}>Submit!</button>
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
      .max(16, "Your name is too long, change it")
      .required("Your name is required"),
    email: Yup.string()
      .required("Email required"),
    password: Yup.string()
      .required("Password required")
  }),

  handleSubmit(values, {setErrors, setStatus, resetForm, setSubmitting}) {
// takes in values generated after validation along with formikbag
// generates information for me to save to state as res

    if (values.email === "waffle@syrup.com") {
      setErrors({email: "Stretch goal hates waffles"});
    } else {
      axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {

        console.log(res);
        setStatus(res.data);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err.response);
        setSubmitting(false);
      });

    }
  }
})(InputForm);

export default FormikInputForm;
