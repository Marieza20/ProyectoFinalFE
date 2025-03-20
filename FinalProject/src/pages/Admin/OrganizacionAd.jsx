import React from 'react'
import HeaderAdmin from '../../components/Admin/HeaderAdmin'
import AdminEquipos from '../../components/Admin/AdminEquipos'
import AdminRegistroE from '../../components/Admin/AdminRegistroE'
import FooterAdmin from '../../components/Admin/FooterAdmin'

function OrganizacionAd() {
  return (
    <div>
        <HeaderAdmin />
        <AdminEquipos />
        <AdminRegistroE />
        <FooterAdmin />
    </div>
  )
}

export default OrganizacionAd