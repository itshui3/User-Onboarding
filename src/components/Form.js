import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';



const InputForm = ({values, errors, touched }) => {

  return(
    <Form>
      <Field type="text" name="name" placeholder="name" />
      <Field type="email" name="email" placeholder="email" />
      <Field type="text" name="password" placeholder="password" />
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
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  })
})(InputForm);

export default FormikInputForm;
