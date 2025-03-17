import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home/Home';
import Estadistica from '../pages/Home/Estadistica';
import Red from '../pages/Home/Red';
import HomeUser from '../pages/User/HomeUser';
import EstadisticaUser from '../pages/User/EstadisticaUser';
import RedUser from '../pages/User/RedUser';
import Habitantes from '../pages/User/Habitantes';
import Organizacion from '../pages/User/Organizacion';
import Agenda from '../pages/User/Agenda';
import HomeAd from '../pages/Admin/HomeAd';
import EstadisticaAd from '../pages/Admin/EstadisticaAd';
import RedAd from '../pages/Admin/RedAd';
import HabitantesAd from '../pages/Admin/HabitantesAd';
import OrganizacionAd from '../pages/Admin/OrganizacionAd';
import AgendaAd from '../pages/Admin/AgendaAd';

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/estadistica' element={<Estadistica/>}></Route>
                <Route path='/red' element={<Red/>}></Route>
                <Route path='/homeUser' element={<HomeUser/>}></Route>
                <Route path='/estadisticaUser' element={<EstadisticaUser/>}></Route>
                <Route path='/redUser' element={<RedUser/>}></Route>
                <Route path='/habitantes' element={<Habitantes/>}></Route>
                <Route path='/organizacion' element={<Organizacion/>}></Route>
                <Route path='/agenda' element={<Agenda/>}></Route>
                <Route path='/homeAd' element={<HomeAd/>}></Route>
                <Route path='/estadisticaAd' element={<EstadisticaAd/>}></Route>
                <Route path='/redAd' element={<RedAd/>}></Route>
                <Route path='/habitantesAd' element={<HabitantesAd/>}></Route>
                <Route path='/organizacionAd' element={<OrganizacionAd/>}></Route>
                <Route path='/agendaAd' element={<AgendaAd/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing