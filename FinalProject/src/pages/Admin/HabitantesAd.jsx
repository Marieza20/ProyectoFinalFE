import React from 'react'
import HeaderAdmin from '../../components/Admin/HeaderAdmin'
import AdminHabitantes from '../../components/Admin/AdminHabitantes'
import AdminRegistro from '../../components/Admin/AdminRegistro'
import FooterAdmin from '../../components/Admin/FooterAdmin'

function HabitantesAd() {
  return (
    <div>
        <HeaderAdmin />
        <AdminHabitantes />
        <AdminRegistro />
        <FooterAdmin />
    </div>
  )
}

export default HabitantesAd