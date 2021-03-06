import React, { } from 'react'
import {
    CCard, 
    CCardBody, 
    CCardHeader,
    CJumbotron,
    CContainer,
    CNav,
    CNavItem,
    CNavLink, 
    CCol, 
    CRow
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'

const GradEquip = () => {
    return (
        <>
            <CCol xs="12">
                <CCard>
                    <CCardBody>
                        <CNav fill variant="pills">
                            <CNavItem>
                                <CNavLink active>Pengambilan</CNavLink>
                            </CNavItem>

                            <CNavItem>
                                <CNavLink to="/new-return-equip" >Pengembalian</CNavLink>
                            </CNavItem>
                        </CNav>
                    </CCardBody>
                </CCard>
            </CCol>
            <CCol>
                <CRow>
                    <CCol>
                        <h4>Jadwal Pengambilan Kelengkapan dan Undangan Wisuda</h4>
                    </CCol>
                </CRow>
            </CCol>

            <CCol xs="12">
            <CRow>
                <CCol lg="4">
                    <CCard>
                        <CCardHeader className="text-center">
                            Status  dan Jadwal Pengambilan
                        </CCardHeader>

                        <CCardBody>
                        <CJumbotron className="border">
                            
                        </CJumbotron>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs="12" sm="2" lg="8">
                    <CCard>
                        <CCardHeader className="text-center">
                            Informasi Pengambilan Kelengkapan
                        </CCardHeader>

                        <CCardBody>
                            <CJumbotron fluid>
                                <CContainer fluid>
                                <p className="lead"> 1. Pengambilan Kelengkapan dan Undangan di Gedung Rektorat UII Lantai I.</p>
                                <p className="lead"> 2. Menunjukkan bukti verifikasi berkas.</p>
                                </CContainer>
                            </CJumbotron>
                        </CCardBody>
                        
                    </CCard>
                </CCol>
            </CRow>
            </CCol>
            
        </>
    )
}

export default GradEquip