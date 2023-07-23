import React from 'react'
import Navbar from '../components/navbar'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewPartFun } from '../redux/app/action';

// initial form value-
const formValues =  {
    name: "",
    specifications: "",
    compatibility: "",
    issues: "",
    instructions: "",
    serviceTag: "",
    modelNumber: ""
}

// validate form-
const validate = (values) => {
    let errors = {};
    if(!values.name){
        errors.name = "Name is required"
    }
    if(!values.modelNumber){
        errors.modelNumber = "Model Number is required"
    }
    return errors;
}

const AddParts = () => {
    // redux-
    const dispatch = useDispatch();

    // token-
    const token = localStorage.getItem("token");

    // form submit-
    const formik = useFormik({
        initialValues: formValues,
        validate,
        onSubmit: async (values) => {
            dispatch(addNewPartFun(values, token)).then(() => {
                alert("Successfully Added");
                formik.handleReset();
            })
        }
    });

    return (
        <>
            <Navbar/>
            <div id="form-wrapper">
                <form onSubmit={formik.handleSubmit} id='form'>
                <h2>Add Parts</h2>

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
                            placeholder='Monitor'
                        />
                        {formik.errors.name && formik.touched.name ? <label>{formik.errors.name}</label> : null}
                    </div>
                </div>

                {/* Specifications */}
                <div>
                    <div>
                        <label htmlFor="name">Specifications</label>
                    </div>
                    <div>
                        <input
                            type="text"  
                            name="specifications" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.specifications}
                            placeholder='Light Weighted'
                        />
                    </div>
                </div>

                {/* Compatibility */}
                <div>
                    <div>
                        <label htmlFor="name">Compatibility</label>
                    </div>
                    <div>
                        <input
                            type="text"  
                            name="compatibility" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.compatibility}
                            placeholder='Compatibility'
                        />
                    </div>
                </div>

                {/* Issues */}
                <div>
                    <div>
                        <label htmlFor="name">Issues</label>
                    </div>
                    <div>
                        <input
                            type="text"  
                            name="issues" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.issues}
                            placeholder='Issues'
                        />
                    </div>
                </div>

                {/* Instructions */}
                <div>
                    <div>
                        <label htmlFor="name">Instructions</label>
                    </div>
                    <div>
                        <input
                            type="text"  
                            name="instructions" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.instructions}
                            placeholder='Instructions'
                        />
                    </div>
                </div>

                {/* Service Tag */}
                <div>
                    <div>
                        <label htmlFor="name">Service Tag</label>
                    </div>
                    <div>
                        <input
                            type="text"  
                            name="serviceTag" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.serviceTag}
                            placeholder='Service Tag'
                        />
                    </div>
                </div>

                {/* Model Number */}
                <div>
                    <div>
                        <label htmlFor="name">Model Number</label>
                    </div>
                    <div>
                        <input
                            type="text"  
                            name="modelNumber" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur}
                            value={formik.values.modelNumber}
                            placeholder='#DELL2391#'
                        />
                    </div>
                </div>

                <div>
                    <input type="submit" value={"Submit"} />
                </div>
                </form>
            </div>
        </>
    )
}

export default AddParts
