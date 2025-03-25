import React from 'react'
import HeaderAdmin from '../../components/Admin/HeaderAdmin'
import AdminCalendario from '../../components/Admin/AdminCalendario'
import AdminRegistroC from '../../components/Admin/AdminRegistroC'
import FooterAdmin from '../../components/Admin/FooterAdmin'

function AgendaAd() {
  return (
    <div id='div'>
      <HeaderAdmin />
      <AdminCalendario />
      <AdminRegistroC />
      <FooterAdmin />
    </div>
  )
}

export default AgendaAd