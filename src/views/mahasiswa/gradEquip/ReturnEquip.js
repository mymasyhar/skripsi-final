import React, { } from 'react'
import {
    CCard, 
    CCardBody, 
    CNav,
    CNavItem,
    CNavLink, 
    CCol, 
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'

const ReturnEquip = () => {
    return (
        <>
            <CCol xs="12">
                <CCard>
                    <CCardBody>
                        <CNav fill variant="pills">
                            <CNavItem>
                                <CNavLink to="/new-grad-equip">Pengambilan</CNavLink>
                            </CNavItem>

                            <CNavItem>
                                <CNavLink active >Pengembalian</CNavLink>
                            </CNavItem>
                        </CNav>
                    </CCardBody>
                </CCard>
            </CCol>
        </>
    )
}

export default ReturnEquip