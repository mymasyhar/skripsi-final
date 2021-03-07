import React, { useState } from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CCollapse,
    CLabel,
    CInput,
    CModal,
    CModalTitle,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CNav,
    CNavItem,
    CNavLink,
    CRow, 
    CFormGroup
}   from '@coreui/react';

const DetailFile = () => {
    const [success, setSuccess] = useState(false)
    const [warning, setWarning] = useState(false)

    // const [collapse, setCollapse] = useState(false)
    // const [collapseMulti, setCollapseMulti] = useState([false, false])
    const [accordion, setAccordion] = useState(1)
    // const [fade, setFade] = useState(true)

    // const toggle = (e) => {
    //     setCollapse(!collapse)
    //     e.preventDefault()
    // }


    // const toggleMulti = (type) => {
    //     let newCollapse = collapseMulti.slice()
    //     switch (type) {
    //         case "left":
    //             newCollapse[0] = !collapseMulti[0];
    //             break;
    //         case "right":
    //             newCollapse[1] = !collapseMulti[1];
    //             break;
    //         case "both":
    //             newCollapse[0] = !collapseMulti[0];
    //             newCollapse[1] = !collapseMulti[1];
    //             break;
    //         default:
    //     }
    // setCollapseMulti(newCollapse)
    // }

    // const toggleFade = () => {
    // setFade(!fade)
    // }

    return (
        <>
            <CCol xs="12" md="12">
                <h3>Verifikasi Berkas Pendaftaran Wisuda</h3> 
                <h4>Tahun : </h4>
                <h4>Periode : #</h4>
            </CCol>

            <CCol xl="12">
                <CCard>
                    <CCardHeader>
                        Berkas Pendaftar
                    </CCardHeader>

                    <CCol xs="12">
                        <CCard className="mt-2 mb-0">
                            <CCardBody>
                                <CNav fill variant="pills">
                                    <CNavItem>
                                        <CNavLink to="/file-verification">On-List</CNavLink>
                                    </CNavItem>

                                    <CNavItem>
                                        <CNavLink to="/verified-file">Verified</CNavLink>
                                    </CNavItem>

                                    <CNavItem>
                                    <CNavLink href="">Pending</CNavLink>
                                </CNavItem>
                                </CNav>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    
                    <CCardBody>
                        <div id="accordion">
                            <CCard className="mb-0">
                                <CCardHeader id="headingOne">
                                    <CButton 
                                        block 
                                        color="link" 
                                        className="text-left m-0 p-0" 
                                        onClick={() => setAccordion(accordion === 0 ? null : 0)}
                                    >
                                    <h5 className="m-0 p-0">Scan Berkas A</h5>
                                    </CButton>
                                </CCardHeader>

                                <CCollapse show={accordion === 0}>
                                    <CCardBody>
                                        1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                                    </CCardBody>
                                </CCollapse>
                            </CCard>

                            <CCard className="mb-0">
                                <CCardHeader id="headingTwo">
                                    <CButton 
                                        block 
                                        color="link" 
                                        className="text-left m-0 p-0" 
                                        onClick={() => setAccordion(accordion === 1 ? null : 1)}
                                    >
                                    <h5 className="m-0 p-0">Scan Berkas B</h5>
                                    </CButton>
                                </CCardHeader>

                                <CCollapse show={accordion === 1}>
                                    <CCardBody>
                                        1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                                    </CCardBody>
                                </CCollapse>
                            </CCard>

                            <CCard className="mb-0">
                                <CCardHeader id="headingThree">
                                    <CButton 
                                        block 
                                        color="link" 
                                        className="text-left m-0 p-0" 
                                        onClick={() => setAccordion(accordion === 2 ? null : 2)}
                                    >
                                    <h5 className="m-0 p-0">Scan Berkas C</h5>
                                    </CButton>
                                </CCardHeader>

                                <CCollapse show={accordion === 2}>
                                    <CCardBody>
                                        1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                                        cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                        on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                        beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                                    </CCardBody>
                                </CCollapse>
                            </CCard>
                        </div>

                        <CRow className="align-items-center mt-3">
                            <CCol col="1" className="text-center">
                                <CButton color="warning" className="mr-3" onClick={() => setWarning(!warning)}>Pending</CButton>
                                <CButton color="info" className="ml-3" onClick={() => setSuccess(!success)}>Terima</CButton>
                            </CCol>
                        </CRow>

                    </CCardBody>
                </CCard>
            </CCol>

            <CModal 
                show={success} 
                onClose={() => setSuccess(!success)}
                color="info">

                <CModalHeader closeButton>
                    <CModalTitle>Verifikasi Berkas : (Nama Mahasiswa) </CModalTitle>
                </CModalHeader>

                <CModalBody>
                    <CFormGroup row>
                        <CCol md="7">
                            <CLabel htmlFor="date-input">Tanggal Pengambilan Kelengkapan</CLabel>
                        </CCol>

                        <CCol xs="2" md="5">
                            <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                        </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                        <CCol md="7">
                            <CLabel htmlFor="date-input">Nomor Antrian</CLabel>
                        </CCol>

                        <CCol xs="2" md="5">
                            <CInput type="text" disabled/>
                        </CCol>
                    </CFormGroup>
                </CModalBody>

                <CModalFooter>
                    <CButton color="info" to="/file-verification" onClick={() => setSuccess(!success)}>Oke</CButton>{' '}
                    <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
                </CModalFooter>
            </CModal>

            <CModal 
                show={warning} 
                onClose={() => setWarning(!warning)}
                color="warning">

                <CModalHeader closeButton>
                    <CModalTitle>Pending Verifikasi Berkas : (Nama Mahasiswa) </CModalTitle>
                </CModalHeader>

                <CModalBody>
                    Setujui Pengajuan berkas : (Nama Mahasiswa)
                </CModalBody>

                <CModalFooter>
                    <CButton color="warning" onClick={() => setWarning(!warning)} to="/file-verification">Oke</CButton>{' '}
                    <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default DetailFile