import React from 'react'
import HeaderAdmin from '../../components/Admin/HeaderAdmin'
import HeaderRedAd from '../../components/Admin/HeaderRedAd'
import InfoDonacion from '../../components/Home/InfoDonacion'
import FooterAdmin from '../../components/Admin/FooterAdmin'

function RedAd() {
  return (
    <div>
        <HeaderAdmin />
        <HeaderRedAd />
        <InfoDonacion />
        <FooterAdmin />
    </div>
  )
}

export default RedAd