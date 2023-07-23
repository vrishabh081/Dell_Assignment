import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getSinglePartFun } from '../redux/app/action';
import Navbar from '../components/navbar';
import dellPartsPic from "../images/dellParts.jpg"

const SinglePagePartInfo = () => {
    // redux-
    const dispatch = useDispatch();
    const data = useSelector((store) => store.appReducer);

    // params-
    const {_id} = useParams();

    // destructure-
    const { getSinglePart: { data: getSinglePart } = {}, isLoading, isError } = data;

    useEffect(() => {
        dispatch(getSinglePartFun(_id))
    }, [])

    return (
        <>
            <Navbar/>
            <div id='main-part-wrapper'>
                {
                    (
                        <div>
                        {
                            getSinglePart ? (
                                <div key={getSinglePart?.part?._id}>
                                    <Link to={`/partsinfo/${getSinglePart?.part?._id}`}>
                                        <img src={dellPartsPic} alt={getSinglePart?.part?._id} />
                                        <div>
                                            <p>{getSinglePart?.part?.name}</p>
                                            <p>{getSinglePart?.part?.modelNumber}</p>
                                        </div>
                                        <div>
                                            <p>{getSinglePart?.part?.serviceTag}</p>
                                            <p>{getSinglePart?.part?.specifications}</p>
                                        </div>
                                        <p>Compatibility - {getSinglePart?.part?.compatibility}</p>
                                        <p>Instructions - {getSinglePart?.part?.instructions}</p>
                                        <p>Issues - {getSinglePart?.part?.issues}</p>
                                    </Link>
                                </div>
                            )
                            : 
                            null
                        }
                    </div>
                    )
                }
            </div>
        </>
    )
}

export default SinglePagePartInfo
