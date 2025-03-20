import React from 'react'
import HeaderUser from '../../components/User/HeaderUser'
import HeaderRedUser from '../../components/User/HeaderRedUser'
import FooterUser from '../../components/User/FooterUser'
import InfoDonacion from '../../components/InfoDonacion'

function RedUser() {
  return (
    <div>
        <HeaderUser />
        <HeaderRedUser />
        <InfoDonacion />
        <FooterUser />
    </div>
  )
}

export default RedUser