import React, {  } from 'react'
import {
    
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
                        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <CFormGroup row>
                                <CLabel col md="3" htmlFor="file-input">File input</CLabel>
                                <CCol xs="12" md="9">
                                    <CInputFile type="file" id="file-input" name="file-input"/>
                                </CCol>
                            </CFormGroup>
                        </CForm>

                    </CCardBody>

                </CCard>
            </CCol>
        </>
    )
}

export default FileUpload