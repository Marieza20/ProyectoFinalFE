import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home/Home';
import HomeUser from '../pages/User/HomeUser';
import Estadistica from '../pages/Home/Estadistica';
import EstadisticaUser from '../pages/User/EstadisticaUser';
import Red from '../pages/Home/Red';
import RedUser from '../pages/User/RedUser';

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/homeUser' element={<HomeUser/>}></Route>
                <Route path='/estadistica' element={<Estadistica/>}></Route>
                <Route path='/estadisticaUser' element={<EstadisticaUser/>}></Route>
                <Route path='/red' element={<Red/>}></Route>
                <Route path='/redUser' element={<RedUser/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing