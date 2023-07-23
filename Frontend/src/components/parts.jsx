import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPartFun } from '../redux/app/action';
import dellParts from "../images/dellLogo.png"
import { Link } from 'react-router-dom';

const Parts = () => {
    // redux-
    const dispatch = useDispatch();
    const data = useSelector((store) => store.appReducer);

    // destructure-
    const { getParts: { data: partsData } = {}, isLoading, isError } = data;

    // useEffect-
    useEffect(() => {
        dispatch(getPartFun())
    }, [])

    return (
        <div id='main-parts-wrapper'>
            {
                !isLoading ?  <div>
                    {
                        partsData ? (
                            partsData?.parts.map((el) => <div key={el._id}>
                                <Link to={`/partsinfo/${el._id}`}>
                                    <img src={dellParts} alt={el._id} />
                                    <div>
                                        <p>{el.name}</p>
                                        <p>{el.modelNumber}</p>
                                    </div>
                                    <div>
                                    <p>{el.issues}</p>
                                    <p>{el.specifications}</p>
                                    </div>
                                </Link>
                            </div>)
                        )
                        : 
                        null
                    }
                </div>
            : <div style={{display:"flex", justifyContent:"center", alignItems:"center", height: "90vh"}}><img src={dellParts} /></div>
            }
        </div>
    )
}

export default Parts
