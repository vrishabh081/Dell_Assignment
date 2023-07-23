import React from 'react'
import {useFormik} from "formik";
import {Link, useNavigate} from "react-router-dom"
import LogIn from './login';
import {useSelector, useDispatch} from "react-redux"; 
import { signUpFun } from '../redux/auth/action';

// initial form value-
const formValues =  {
    name: "",
    userName: "",
    email: "",
    password: ""
}

// validate form-
const validate = (values) => {
    let errors = {};
    if(!values.name){
        errors.name = "Name is required"
    }
    if(!values.userName){
        errors.userName = "UserName is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    return errors;
}

// Sign up function-
const SignUp = () => {
    // redux-
    const dispatch = useDispatch();
    const data = useSelector((store) => store.authReducer);

    // navigate-
    const navigate = useNavigate();

     // form submit-
    const formik = useFormik({
        initialValues: formValues,
        validate,
        onSubmit: async (values) => {
            dispatch(signUpFun(values));
        }
    });

    if(data?.signup?.status === "success"){
        alert(data?.signup.message) 
        navigate("/login")    
        data?.signup === ""
    }

    return (
        <div id='form-wrapper'>
            <form onSubmit={formik.handleSubmit} id='form'>
            <h2>Sign Up</h2>
            {/* Name */}
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                </div>
                <div>
                    <input
                        type="text"  
                        name="name" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder='John Cambley'
                    />
                    {formik.errors.name && formik.touched.name ? <label>{formik.errors.name}</label> : null}
                </div>
            </div>

            {/* Username */}
            <div>
                <div>
                    <label htmlFor="name">Username</label>
                </div>
                <div>
                    <input
                        type="text"  
                        name="userName" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.userName}
                        placeholder='john_cambley'
                    />
                    {formik.errors.userName && formik.touched.userName ? <label>{formik.errors.userName}</label> : null}
                </div>
            </div>

            {/* Email */}
            <div>
                <div>
                    <label htmlFor="name">Email</label>
                </div>
                <div>
                    <input
                        type="email"  
                        name="email" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder='johncambley@gmail.com'
                    />
                    {formik.errors.email && formik.touched.email ? <label>{formik.errors.email}</label> : null}
                </div>
            </div>

            {/* Password */}
            <div>
                <div>
                    <label htmlFor="name">Password</label>
                </div>
                <div>
                    <input
                        type="password"  
                        name="password" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder='John123@'
                    />
                    {formik.errors.password && formik.touched.password ? <label>{formik.errors.password}</label> : null}
                </div>
            </div>
            <div>
                <input type="submit" value={"Submit"} />
            </div>
            <div>
                <label>
                    Already have an account ? <Link to="/login" element={<LogIn/>}>login</Link> 
                </label>
            </div>
      </form>
        </div>
    )
}

export default SignUp
