import React, { useState } from 'react'

import {
    CButton,
    CCol,
    CCard,
    CCardBody,
    CListGroup,
    CListGroupItem,
    CNavLink,
    CNavbar,
    CNavbarNav,
    CNavbarBrand,
    CToggler,
    CRow
} from '@coreui/react'

import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDropdown, setIsOpenDropdown] = useState(false)
    const [navbarText, setNavbarText] = useState(false)

    return(
        <>
            <CCard>
                    <CNavbar expandable="sm" color="info" >
                        <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}/>

                        <CNavbarBrand>
                            Sistem Informasi A
                        </CNavbarBrand>

                            <CNavbarNav className="ml-md-auto">
                                <CNavLink>Home</CNavLink>

                                <CNavLink>contact</CNavLink>

                                <CButton color="warning" className="text-white">Login</CButton>
                                
                            </CNavbarNav>
                    </CNavbar>
            </CCard>

            
            <CCol xs="12" sm="6" md="4">
                <CCard color="info" className="text-white text-center">
                    
                    <CCardBody>
                        
                            <h3>Informasi Terkini Pendaftaran Wisuda</h3>
                        
                        <CListGroup>
                            <CListGroupItem color="secondary" className="mb-2">
                                <CRow className="mb-0">
                                    <CCol md="3">
                                        <CIcon name="cilListRich" customClasses="sm" />
                                    </CCol>
                                    <CCol md="9">
                                        <div className=" text-left bold">
                                            <h4 className="font-weight-bold">Periode</h4>
                                            <p>1</p>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CListGroupItem>

                            <CListGroupItem color="secondary" className="mb-2">
                                <CRow className="mb-0">
                                    <CCol md="3">
                                        <CIcon name="cilListRich" customClasses="sm" />
                                    </CCol>
                                    <CCol md="9">
                                        <div className=" text-left">
                                            <h4 className="font-weight-bold">Tanggal Pelaksanaan</h4>
                                            <p>1</p>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CListGroupItem>

                            <CListGroupItem color="secondary" className="mb-2">
                                <CRow className="mb-0">
                                    <CCol md="3">
                                        <CIcon name="cilListRich" customClasses="sm" />
                                    </CCol>
                                    <CCol md="9">
                                        <div className=" text-left">
                                            <h4 className="font-weight-bold">Jumlah Pendaftar</h4>
                                            <p>1</p>
                                        </div>
                                    </CCol>
                                </CRow>
                            </CListGroupItem>

                        </CListGroup>
                    </CCardBody>
                </CCard>
            </CCol>
                

            {/* <div className="c-app c-default-layout">
                <div className="c-wrapper">
                    <CHeader className="">
                        <CHeaderNav className="ml-md-auto">
                            <CHeaderNavItem className="px-3" >
                                <CHeaderNavLink to="/home">Home</CHeaderNavLink>
                            </CHeaderNavItem>

                            <CHeaderNavItem  className="px-3">
                                <CHeaderNavLink to="/contact">Kontak</CHeaderNavLink>
                            </CHeaderNavItem>

                            <CHeaderNavItem className="px-3">
                                <CHeaderNavLink to="/login">Login</CHeaderNavLink>
                            </CHeaderNavItem>
                        </CHeaderNav>
                    </CHeader>
                </div>
                <div className="c-body">
                    
                </div>
            </div> */}

        </>
    )
}

export default Home