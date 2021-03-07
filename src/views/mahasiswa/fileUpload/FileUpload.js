import React, {  } from 'react'
import {
    CButton,
    CCard, 
    CCardBody, 
    CCardHeader, 
    CCol,
    CForm,
    CFormGroup,
    CInputFile,
    CLabel
} from '@coreui/react'

const FileUpload = () => {
    return (
        <>
            <CCol xs="12" md="12">
                <h3>Pendaftaran Wisuda, Tahun : 2021</h3>
                <h4>Periode : #</h4>
            </CCol>
            

            <CCol xs="12" md="12">
                <CCard>
                    <CCardHeader>
                        <CCol>
                            Form Unggah Berkas Wisuda
                        </CCol>
                    </CCardHeader>

                    <CCardBody>
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal mr-4 ml-4">
                            <CFormGroup row md="10">
                                    <CCardBody color="info" className="text-center">
                                        <CCol>
                                            <CLabel className="text-white">
                                                <h4>Scan Berkas A</h4>
                                            </CLabel>
                                        </CCol>
                                        <CCol>
                                            <CInputFile custom id="file-input"/>
                                            <CLabel htmlFor="file-input" variant="custom-file">
                                            Scan Berkas A
                                            </CLabel>
                                        </CCol>
                                    </CCardBody>
                            </CFormGroup>

                            <CFormGroup row md="10">
                                    <CCardBody color="info" className="text-center">
                                        <CCol>
                                            <CLabel className="text-white">
                                                <h4>Scan Berkas A</h4>
                                            </CLabel>
                                        </CCol>
                                        <CCol>
                                            <CInputFile custom id="file-input"/>
                                            <CLabel htmlFor="file-input" variant="custom-file">
                                            Scan Berkas A
                                            </CLabel>
                                        </CCol>
                                    </CCardBody>
                            </CFormGroup>

                            <CFormGroup row md="10">
                                    <CCardBody color="info" className="text-center">
                                        <CCol>
                                            <CLabel className="text-white">
                                                <h4>Scan Berkas A</h4>
                                            </CLabel>
                                        </CCol>
                                        <CCol>
                                            <CInputFile custom id="file-input"/>
                                            <CLabel htmlFor="file-input" variant="custom-file">
                                            Scan Berkas A
                                            </CLabel>
                                        </CCol>
                                    </CCardBody>
                            </CFormGroup>

                            <CFormGroup row md="10">
                                    <CCardBody className="text-center">
                                        <CButton color="info">Submit</CButton>  
                                    </CCardBody>
                            </CFormGroup>

                        </CForm>

                    </CCardBody>

                </CCard>
            </CCol>
        </>
    )
}

export default FileUpload