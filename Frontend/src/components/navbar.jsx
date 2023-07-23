import {useState, useEffect} from 'react'
import "../style/navbar.css";
import dellLogo from "../images/dellLogo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPartFun } from '../redux/app/action';

const Navbar = () => {
    const [searchText, setSearchText] = useState();
    const navigate = useNavigate();

    // log out fun-
    const logOutFun = () => {
        localStorage.clear();
        navigate("/login")
    }

    // redux-
    const dispatch = useDispatch();
    const data = useSelector((store) => store.appReducer);

    // destructure-
    const { getParts: { data: partsData } = {}, isLoading, isError } = data;

    useEffect(() => {
        if(searchText?.length > 0){
            // debouncing-
            let timer;
            clearTimeout(timer);
            timer = setTimeout(() => {
                dispatch(getPartFun(searchText));
            }, 500);
            return () => {
            clearTimeout(timer);
            };
        }
    }, [searchText]);

    return (
        <div id='navbar'>
            <div>
                <Link to="/">
                    <img src={dellLogo} alt="dellLogo" />
                </Link>
            </div>
            <div>
                <input 
                    type="text"
                    placeholder='Search Parts'
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div>
                <div>
                    {
                        localStorage.getItem("role") === "admin" 
                            &&
                        <Link to={"/admin-panel"}>
                            <ion-icon name="settings-outline"></ion-icon>
                        </Link>
                    }
                </div>
                <div>
                    {
                        localStorage.getItem("name") ? 
                        <p 
                            className='user'
                            onClick={() => logOutFun()}
                        >{localStorage.getItem("name")[0]}</p> 
                            : 
                        <Link to={"/login"}>
                            <ion-icon name="person-circle-outline"></ion-icon>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
