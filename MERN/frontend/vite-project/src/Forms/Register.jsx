import React from 'react';
import { useFormik } from "formik";
import authValidationSchema from "../Validations/index";
import { toast } from 'react-toastify';
import { Button, Form } from "react-bootstrap"

const Register = ({ setIsRegisteredUser }) => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues : {
            firstName : "",
            lastName : "",
            email : "",
            password : ""
        },
        validationSchema : authValidationSchema,
        onSubmit : async(values, actions) => {
                try {
                    const response = await fetch("http://localhost:3001/register", {
                        method : "POST",
                        headers : {'Content-Type' : 'application/json'},
                        body : JSON.stringify(values)
                    })
                    const data = await response.json()
                    if(data.success) {
                        toast("Registration success")
                        actions.resetForm()
                        setIsRegisteredUser(true)
                    }
                } catch (error) {
                    console.log(error);
                }
        }
    })
  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor='firstName'> First Name </Form.Label>
        <Form.Control 
        id='firstName'
        type='text'
        name='firstName'
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='First Name'
        />
{ touched.firstName && errors.firstName ? <span> {errors.firstName} </span> : "" }

<Form.Label htmlFor='lastName'> Last Name </Form.Label>
        <Form.Control
        id='lastName'
        type='text'
        name='lastName'
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Last Name'

        />
        
        { touched.lastName && errors.lastName 
        ?
        <Form.Control.Feedback type="invalid"> {errors.lastName} </Form.Control.Feedback>
        : null }
        

<Form.Label htmlFor='email'> Email </Form.Label>
        <Form.Control 
        id='email'
        type='email'
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Email'
        />
{ touched.email && errors.email ? <span> {errors.email} </span> : "" }

<Form.Label htmlFor='password'> Password </Form.Label>
        <Form.Control  
        id='password'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Password'
        />
{ touched.password && errors.password ? <span> {errors.password} </span> : "" }

<Button type='submit' variant='primary'> Register </Button>
    </Form>
    </>
  )
}

export default Register