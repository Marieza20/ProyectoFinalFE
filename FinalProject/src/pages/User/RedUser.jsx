import React from 'react'
import HeaderUser from '../../components/User/HeaderUser'
import HeaderRedUser from '../../components/User/HeaderRedUser'
import InfoDonacion from '../../components/Home/InfoDonacion'
import FooterUser from '../../components/User/FooterUser'

function RedUser() {
  return (
    <div id='div'>
        <HeaderUser />
        <HeaderRedUser />
        <InfoDonacion />
        <FooterUser />
    </div>
  )
}

export default RedUser