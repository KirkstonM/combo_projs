import React from 'react';
import { useFormik } from 'formik';
import authValidationSchema from "../Validations/index";

const Login = () => {
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues : {
            email : "",
            password : "",
            confirmPassword : ""
        },
        validationSchema : authValidationSchema,
        // onSubmit : async(values, actions) => {
        //     try {
        //         const response = await fetch("//http://localhost:3001/login", {
        //             method : "POST",
        //             headers : {'Content-Type' : 'application/json'},
        //             body : JSON.stringify(values)
        //         })
        //         const data = await response.json()
        //         if(data.success) {
        //             toast(data.msg)
        //             actions.resetForm()
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        onSubmit : (values) => console.log(values)
    })
  return (
    <>
    <form onSubmit={handleSubmit}> 
    
<label htmlFor='email'> Email </label>
        <input 
        id='email'
        type='email'
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Email'
        
        />
{ touched.email && errors.email ? <span> {errors.email} </span> : "" }

<label htmlFor='password'> Password </label>
        <input 
        id='password'
        type='password'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Password'
        />
{ touched.password && errors.password ? <span> {errors.password} </span> : "" }

<label htmlFor='confirmPassword'> confirm Password </label>
        <input 
        id='confirmPassword'
        type='password'
        name='confirmPassword'
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='confirm Password'
        />
{ touched.confirmPassword && errors.confirmPassword ? <span> {errors.confirmPassword} </span> : "" }

<button type='submit'> Register </button>
    </form>
    </>
  )
}

export default Login