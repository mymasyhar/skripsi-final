import React, {useState} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCollapse,
    CCol,
    CRow
} from '@coreui/react'

// import CIcon from '@coreui/icons-react'

const NewDashboard = () => {
    const [accordion, setAccordion] = useState(1)

    return (
        <>
            <CRow>
                <CCol md="7">
                    <CCard color="info" className="text-white">
                        <CRow md="4">
                            <CCol>
                                <CCardBody className="">
                                    <div className="text-left ml-2">
                                        <img className="rounded-circle" src={'avatars/8.jpg'} alt="admin@bootstrapmaster.com" />
                                    </div>
                                </CCardBody>
                            </CCol>
                            <CCol>
                                <CCardBody className="mt-5">
                                    <div className="text-left">
                                        <h3>Assalamualaikum,</h3>
                                        <h4>Masyhar Muharam</h4>
                                        <h4>16523171</h4>
                                    </div>
                                </CCardBody>
                            </CCol>
                        </CRow>
                    </CCard>

                    <CCard color="info" className="text-white">
                        <CCardHeader>
                            <b>Progress Pendaftaran</b>
                        </CCardHeader>
                        <CRow md="4">
                            <CCol>
                                <CCardBody className="">
                                    <div className="text-left">
                                    </div>
                                </CCardBody>
                            </CCol>
                        </CRow>
                    </CCard>
                </CCol>

                <CCol md="5">
                    <CCard color="info">
                        <h2 className="text-center text-white mt-2">Panduan</h2>
                        <CCardBody>
                            <CCol col="6" sm="4" md="2" xl className="mb-xl">
                                <div id="accordion">
                                    <CCard className="mb-0">
                                        <CCardHeader id="headingOne" color="success">
                                            <CButton 
                                                block 
                                                color="link" 
                                                className="text-left m-0 p-0" 
                                                onClick={() => setAccordion(accordion === 0 ? null : 0)}
                                            >
                                                <h5 className="m-0 p-0 text-white text-center"> Pendaftaran</h5>
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
                                        <CCardHeader id="headingTwo" color="success">
                                            <CButton 
                                                block 
                                                color="link" 
                                                className="text-left m-0 p-0" 
                                                onClick={() => setAccordion(accordion === 1 ? null : 1)}
                                            >
                                                <h5 className="m-0 p-0 text-white text-center"> Unggah Berkas</h5>
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
                                        <CCardHeader id="headingThree" color="success">
                                            <CButton 
                                                block 
                                                color="link" 
                                                className="text-left m-0 p-0" 
                                                onClick={() => setAccordion(accordion === 2 ? null : 2)}
                                            >
                                                <h5 className="m-0 p-0 text-white text-center"> Pengambilan Kelengkapan</h5>
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

                                    <CCard className="mb-1">
                                        <CCardHeader id="headingFour" color="success">
                                            <CButton 
                                                block 
                                                color="link" 
                                                className="text-left m-0 p-0" 
                                                onClick={() => setAccordion(accordion === 3 ? null : 3)}
                                            >
                                                <h5 className="m-0 p-0 text-white text-center"> Unggah Berkas</h5>
                                            </CButton>
                                        </CCardHeader>

                                        <CCollapse show={accordion === 3}>
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
                            </CCol>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            
        </>
    )
}

export default NewDashboard