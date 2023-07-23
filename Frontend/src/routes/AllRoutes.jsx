import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import SignUp from '../pages/signup'
import LogIn from '../pages/login'
import SinglePagePartInfo from '../pages/singlePagePartInfo'
import AdminPanel from '../pages/adminPanel'
import AddParts from '../pages/addParts'
import UpdateParts from '../modal/updatePart'

// All Routes-
const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/partsinfo/:_id' element={<SinglePagePartInfo/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<LogIn/>} />

            {/* Admin */}
            <Route path='/admin-panel' element={<AdminPanel/>} />
            <Route path='/add-parts' element={<AddParts/>} />
            <Route path='/update-part/:_id' element={<UpdateParts/>} />
        </Routes>
    )
}

export default AllRoutes
