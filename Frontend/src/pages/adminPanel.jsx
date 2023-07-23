import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deletePartFunAdmin, getPartFun } from '../redux/app/action';
import dellParts from "../images/dellLogo.png"
import "../style/admin.css"

const AdminPanel = () => {
    // token-
    const token = localStorage.getItem("token");

    // redux-
    const dispatch = useDispatch();
    const data = useSelector((store) => store.appReducer);

    // destructure-
    const { getParts: { data: partsData } = {}, isLoading, isError } = data;

    // use Effect-
    useEffect(() => {
        dispatch(getPartFun());
    }, [])

    // delete fun-
    const deleteHandler = (_id) => {
        dispatch(deletePartFunAdmin(_id, token)).then(() => {
            dispatch(getPartFun());
            alert("Successfully deleted");
        })
    }

    return (
        <>
            <Navbar/>
            <div id='admin-panel-wrapper'>
                <div>
                    <h1>Admin Panel</h1>
                    <Link to={"/add-parts"}><ion-icon name="add-circle-outline"></ion-icon></Link>
                </div>
                {
                    !isLoading ? (
                        <div>
                        {
                            partsData ?
                                partsData?.parts?.map((el) => <div key={el._id}>
                                    <p>{el.name}</p>
                                    <p>{el.issues}</p>
                                    <p><Link to={`/update-part/${el._id}`}><ion-icon name="create-outline"></ion-icon></Link></p>
                                    <p onClick={() => deleteHandler(el._id)}>
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </p>
                                </div>
                            )
                                :
                            null
                        }
                    </div>
                    ) : (
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height: "90vh"}}><img src={dellParts} /></div>
                    )
                }
            </div>
        </>
    )
}

export default AdminPanel
