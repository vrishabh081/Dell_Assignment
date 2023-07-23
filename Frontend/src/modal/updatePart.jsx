import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import { useFormik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPartFun, getPartFun, getSinglePartFun, updatePartFunAdmin } from '../redux/app/action';

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

const UpdateParts = () => {
    const [defaultData, setDefaultData] = useState();
    // redux-
    const dispatch = useDispatch();
    const data = useSelector((store) => store.appReducer);

    // token-
    const token = localStorage.getItem("token");

    // navigate-
    const navigate = useNavigate();

    // params-
    const {_id} = useParams();

    // destructure-
    const { getSinglePart: { data: getSinglePart } = {}, isLoading, isError } = data;

    useEffect(() => {
        dispatch(getSinglePartFun(_id))
        // if(getSinglePart?.part !== undefined){
        //     const defaultPartData = {
        //         name: getSinglePart && getSinglePart?.part?.name,
        //         specifications: getSinglePart && getSinglePart?.part?.specifications,
        //         compatibility: getSinglePart && getSinglePart?.part?.compatibility,
        //         issues: getSinglePart && getSinglePart?.part?.issues,
        //         instructions: getSinglePart && getSinglePart?.part?.instructions,
        //         serviceTag: getSinglePart && getSinglePart?.part?.serviceTag,
        //         modelNumber: getSinglePart && getSinglePart?.part?.modelNumber
        //     };
        //     console.log(defaultPartData)
        //     formik.setValues(defaultPartData)
        // }
    }, [])

    let a = ""
    if(getSinglePart?.part !== undefined){
        a = (getSinglePart?.part)
    }
    

    // form submit-
    const formik = useFormik({
        initialValues: formValues,
        validate,
        onSubmit: async (values) => {
            dispatch(updatePartFunAdmin(values, token, _id)).then(() => {
                alert("Successfully Updated");
                navigate("/admin-panel")
                dispatch(getPartFun())
            })
        }
    });

    console.log(formik.values, _id);

    return (
        <>
            <Navbar/>
            <div id="form-wrapper">
                <form onSubmit={formik.handleSubmit} id='form'>
                <h2>Update Part Info</h2>

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
                        {formik.errors.modelNumber && formik.touched.modelNumber ? <label>{formik.errors.modelNumber}</label> : null}
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

export default UpdateParts
