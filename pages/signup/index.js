import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
export default props => {return (<Formik onSubmit={(values, { setSubmitting }) => {
    fetch(location.protocol + '://' + location.hostname + '/api/signup',{method: 'POST',headers: values}).then(setSubmitting.bind(null,false))
  }}>{()  => (<Form></Form>)}</Formik>)}