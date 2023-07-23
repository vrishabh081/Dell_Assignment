import React from 'react'
import {useFormik} from "formik";
import {Link, useNavigate} from "react-router-dom"
import "../style/auth.css"
import SignUp from './signup';
import { useDispatch, useSelector } from 'react-redux';
import { logInFun } from '../redux/auth/action';

// initial form value-
const formValues =  {
    email: "",
    password: ""
}

// validate form-
const validate = (values) => {
    let errors = {};
    if(!values.email){
        errors.email = "Email is required"
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    return errors;
}

// Sign up function-
const LogIn = () => {
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
            dispatch(logInFun(values));
        }
    });

    if(data?.login.status === "success"){
        alert(data?.login.message)
        navigate("/"), 
        localStorage.setItem("token", data?.login?.data?.token);
        localStorage.setItem("name", data?.login?.data?.name); 
        localStorage.setItem("role", data?.login?.data?.role);
        data?.login === ""
    }

    return (
        <div id="form-wrapper">
            <form onSubmit={formik.handleSubmit} id='form'>
            <h2>Log In</h2>

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
                    Don't have an account ? <Link to="/signup" element={<SignUp/>}>signup</Link> <Link to="/" element={<SignUp/>}>back</Link> 
                </label>
            </div>
      </form>
        </div>
    )
}

export default LogIn
