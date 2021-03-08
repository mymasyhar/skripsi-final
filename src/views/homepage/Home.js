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

import {
    CChartPie
} from '@coreui/react-chartjs'

import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

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

            <CRow>

                <CCol xs="12" sm="6" md="4" className="ml-3 mb-5">
                    <CCard color="info" className="text-white text-center">
                        
                        <CCardBody>
                            
                                <h3>Informasi Terkini Pendaftaran Wisuda</h3>
                            
                            <CListGroup>
                                <CListGroupItem color="secondary" className="mb-4">
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

                                <CListGroupItem color="secondary" className="mb-4">
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

                                <CListGroupItem color="secondary" className="mb-4">
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
                
                <CCol xs="12" sm="6" md="7">
                    <CCard color="info" className="text-white text-center">
                        <CCardBody className="cols-2">
                            <h3>Jumlah Pendaftar Wisuda Periode 1 berdasarkan Fakultas</h3>

                            <CChartPie
                                datasets={[
                                {
                                    backgroundColor: [
                                    '#41B883',
                                    '#E46651',
                                    '#00D8FF',
                                    '#DD1B16'
                                    ],
                                    data: [40, 20, 80, 10]
                                }
                                ]}
                                labels={['VueJs', 'EmberJs', 'ReactJs', 'AngularJs']}
                                options={{
                                tooltips: {
                                    enabled: true
                                }
                                }}
                            />
                        </CCardBody>
                    </CCard>

                    <CCard>
                        <CCardBody>
                            <h3>Jumlah Pendaftar Wisuda Periode 1 berdasarkan Fakultas</h3>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>


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