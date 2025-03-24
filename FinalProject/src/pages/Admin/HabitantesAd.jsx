import React from 'react'
import HeaderAdmin from '../../components/Admin/HeaderAdmin'
import AdminHabitantes from '../../components/Admin/AdminHabitantes'
import AdminRegistroH from '../../components/Admin/AdminRegistroH'
import FooterAdmin from '../../components/Admin/FooterAdmin'

function HabitantesAd() {
  return (
    <div>
        <HeaderAdmin />
        <AdminHabitantes />
        <AdminRegistroH />
        <FooterAdmin />
    </div>
  )
}

export default HabitantesAd